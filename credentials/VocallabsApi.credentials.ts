import {
    IAuthenticateGeneric,
    ICredentialType,
    INodeProperties,
} from 'n8n-workflow';

export class VocallabsApi implements ICredentialType {
    name = 'vocallabsApi';
    displayName = 'VocalLabs API';
    documentationUrl = 'https://docs.vocallabs.ai/docs/vocallabs';
    properties: INodeProperties[] = [
        {
            displayName: 'API Key',
            name: 'apiKey',
            type: 'string',
            typeOptions: {
                password: true,
            },
            default: '',
            required: true,
            description: 'Your VocalLabs API authentication token',
        },
        {
            displayName: 'Base URL',
            name: 'baseUrl',
            type: 'string',
            default: 'https://api.superflow.run',
            description: 'Base URL for VocalLabs API (override for staging)',
        },
    ];
    
    authenticate: IAuthenticateGeneric = {
        type: 'generic',
        properties: {
            headers: {
                'Authorization': '=Bearer {{$credentials.apiKey}}',
            },
        },
    };
}
