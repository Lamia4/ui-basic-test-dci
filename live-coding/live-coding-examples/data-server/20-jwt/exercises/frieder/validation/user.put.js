const schema = {
    $id: 'userPut',
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
        }
    }
};

export default schema;