import { http } from './config';

export default {
    index() {
        return http.get('/users');
    },

    indexById(id) {
        return http.get(`/users/${id}`);
    },

    create(name, email, cpf) {
        return http.post('/users', { name, email, cpf });
    },

    update(id, name, email) {
        return http.put(`/users/${id}`, { name, email });
    },

    delete(id) {
        return http.delete(`/users/${id}`);
    }
}