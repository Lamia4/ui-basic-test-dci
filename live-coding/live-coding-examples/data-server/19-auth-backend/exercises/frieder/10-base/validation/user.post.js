const schema = {
    $id: 'userPost',
    type: 'object',
    additionalProperties: false,
    properties: {
        name: {
            type: 'string',
            pattern: '^[a-zA-Z ]+$'
        },
        email: {
            type: 'string',
            format: 'email'
        },
        password:{
            type: 'string',
            minLength: 8
        }
    }
};

export default schema;