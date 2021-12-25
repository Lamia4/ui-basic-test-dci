const schema = {
    $id: 'id',
    type: 'object',
    properties: {
        userId: {
            type: 'string',
            pattern: '^[0-9a-fA-F]{24}$'
        }
    }
};

export default schema;