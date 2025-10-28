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
        // Base URL field removed - will use hardcoded value
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
