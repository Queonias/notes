const { Schema, model} = require('mongoose');
const bcryptjs = require('bcryptjs');

// Definindo o esquema do usuário
const UserSchema = new Schema({
    name: { 
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

// Método para criptografar a senha do usuário
UserSchema.methods.encryptPassword = async password => {
   const salt = await bcryptjs.genSalt(10);
   return await bcryptjs.hash(password, salt)
};

// Método para comparar a senha fornecida com a senha armazenada do usuário
UserSchema.methods.matchPassword = async function (password) {
   return await bcryptjs.compare(password, this.password)
}


// Exportando o modelo do usuário com o esquema definido
module.exports = model('User', UserSchema);