import {
    IExecuteFunctions,
    INodeExecutionData,
    INodeType,
    INodeTypeDescription,
    IHttpRequestOptions,
} from 'n8n-workflow';

export class Vocallabs implements INodeType {
    description: INodeTypeDescription = {
        displayName: 'VocalLabs',
        name: 'vocallabs',
        icon: 'file:vocallabs.svg',
        group: ['transform'],
        version: 1,
        subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
        description: 'Interact with VocalLabs AI Voice API',
        defaults: {
            name: 'VocalLabs',
        },
        inputs: ['main'],
        outputs: ['main'],
        credentials: [
            {
                name: 'vocallabsApi',
                required: true,
            },
        ],
        properties: [
            // Resource selector
            {
                displayName: 'Resource',
                name: 'resource',
                type: 'options',
                noDataExpression: true,
                options: [
                    {
                        name: 'Auth',
                        value: 'auth',
                    },
                    {
                        name: 'Dashboard',
                        value: 'dashboard',
                    },
                    {
                        name: 'Wallet',
                        value: 'wallet',
                    },
                    {
                        name: 'SIP',
                        value: 'sip',
                    },
                    {
                        name: 'Call',
                        value: 'call',
                    },
                ],
                default: 'call',
            },
            
            // Auth Operations
            {
                displayName: 'Operation',
                name: 'operation',
                type: 'options',
                noDataExpression: true,
                displayOptions: {
                    show: {
                        resource: ['auth'],
                    },
                },
                options: [
                    {
                        name: 'Create Auth Token',
                        value: 'createAuthToken',
                        description: 'Create a new authentication token',
                        action: 'Create auth token',
                    },
                    {
                        name: 'Get Tokens',
                        value: 'getTokens',
                        description: 'Get all tokens',
                        action: 'Get tokens',
                    },
                ],
                default: 'createAuthToken',
            },
            
            // Dashboard Operations
            {
                displayName: 'Operation',
                name: 'operation',
                type: 'options',
                noDataExpression: true,
                displayOptions: {
                    show: {
                        resource: ['dashboard'],
                    },
                },
                options: [
                    {
                        name: 'Get Dashboard Stats',
                        value: 'getDashboardStats',
                        description: 'Get dashboard statistics',
                        action: 'Get dashboard stats',
                    },
                ],
                default: 'getDashboardStats',
            },
            
            // Wallet Operations
            {
                displayName: 'Operation',
                name: 'operation',
                type: 'options',
                noDataExpression: true,
                displayOptions: {
                    show: {
                        resource: ['wallet'],
                    },
                },
                options: [
                    {
                        name: 'Get Wallet Balance',
                        value: 'getWalletBalance',
                        description: 'Get wallet balance',
                        action: 'Get wallet balance',
                    },
                    {
                        name: 'Get Transaction History',
                        value: 'getTransactionHistory',
                        description: 'Get transaction history',
                        action: 'Get transaction history',
                    },
                ],
                default: 'getWalletBalance',
            },
            
            // SIP Operations
            {
                displayName: 'Operation',
                name: 'operation',
                type: 'options',
                noDataExpression: true,
                displayOptions: {
                    show: {
                        resource: ['sip'],
                    },
                },
                options: [
                    {
                        name: 'SIP Call',
                        value: 'sipCall',
                        description: 'Create a SIP call',
                        action: 'Create SIP call',
                    },
                ],
                default: 'sipCall',
            },
            
            // Call Operations
            {
                displayName: 'Operation',
                name: 'operation',
                type: 'options',
                noDataExpression: true,
                displayOptions: {
                    show: {
                        resource: ['call'],
                    },
                },
                options: [
                    {
                        name: 'Initiate Call',
                        value: 'initiateCall',
                        description: 'Initiate a new call',
                        action: 'Initiate call',
                    },
                    {
                        name: 'Get Call Details',
                        value: 'getCallDetails',
                        description: 'Get details of a call',
                        action: 'Get call details',
                    },
                    {
                        name: 'Get Voices',
                        value: 'getVoices',
                        description: 'Get available voices',
                        action: 'Get voices',
                    },
                    {
                        name: 'Get Call API Tokens',
                        value: 'getCallApiTokens',
                        description: 'Get call API tokens',
                        action: 'Get call API tokens',
                    },
                    {
                        name: 'Call API',
                        value: 'callApi',
                        description: 'Initiate call via webhook',
                        action: 'Call API',
                    },
                    {
                        name: 'Get Call Timeline',
                        value: 'getCallTimeline',
                        description: 'Get call timeline',
                        action: 'Get call timeline',
                    },
                    {
                        name: 'Get Daily Calls',
                        value: 'getDailyCalls',
                        description: 'Get daily calls',
                        action: 'Get daily calls',
                    },
                    {
                        name: 'Get Websocket URL',
                        value: 'getWebsocketUrl',
                        description: 'Get websocket URL',
                        action: 'Get websocket URL',
                    },
                    {
                        name: 'Get Audit One',
                        value: 'getAuditOne',
                        description: 'Get one audit',
                        action: 'Get audit one',
                    },
                    {
                        name: 'Get Audits',
                        value: 'getAudits',
                        description: 'Get all audits',
                        action: 'Get audits',
                    },
                    {
                        name: 'Upload Audio URL',
                        value: 'uploadAudioUrl',
                        description: 'Upload audio URL',
                        action: 'Upload audio URL',
                    },
                ],
                default: 'initiateCall',
            },
            
            // Auth - Create Auth Token params
            {
                displayName: 'Client ID',
                name: 'clientId',
                type: 'string',
                required: true,
                displayOptions: {
                    show: {
                        resource: ['auth'],
                        operation: ['createAuthToken'],
                    },
                },
                default: '',
                description: 'Client ID for authentication',
            },
            {
                displayName: 'Client Secret',
                name: 'clientSecret',
                type: 'string',
                typeOptions: {
                    password: true,
                },
                required: true,
                displayOptions: {
                    show: {
                        resource: ['auth'],
                        operation: ['createAuthToken'],
                    },
                },
                default: '',
                description: 'Client secret for authentication',
            },
            
            // Wallet - Get Transaction History params
            {
                displayName: 'Limit',
                name: 'limit',
                type: 'number',
                displayOptions: {
                    show: {
                        resource: ['wallet'],
                        operation: ['getTransactionHistory'],
                    },
                },
                default: 10,
                description: 'Number of records to return',
            },
            {
                displayName: 'Offset',
                name: 'offset',
                type: 'number',
                displayOptions: {
                    show: {
                        resource: ['wallet'],
                        operation: ['getTransactionHistory'],
                    },
                },
                default: 0,
                description: 'Number of records to skip',
            },
            
            // SIP - SIP Call params
            {
                displayName: 'Phone Number',
                name: 'phoneNumber',
                type: 'string',
                required: true,
                displayOptions: {
                    show: {
                        resource: ['sip'],
                        operation: ['sipCall'],
                    },
                },
                default: '',
                description: 'Phone number to call',
            },
            {
                displayName: 'DID',
                name: 'did',
                type: 'string',
                required: true,
                displayOptions: {
                    show: {
                        resource: ['sip'],
                        operation: ['sipCall'],
                    },
                },
                default: '',
                description: 'Direct Inward Dialing number',
            },
            {
                displayName: 'Websocket URL',
                name: 'websocketUrl',
                type: 'string',
                required: true,
                displayOptions: {
                    show: {
                        resource: ['sip'],
                        operation: ['sipCall'],
                    },
                },
                default: '',
                description: 'Websocket URL for the call',
            },
            {
                displayName: 'Webhook URL',
                name: 'webhookUrl',
                type: 'string',
                displayOptions: {
                    show: {
                        resource: ['sip'],
                        operation: ['sipCall'],
                    },
                },
                default: '',
                description: 'Webhook URL for call events',
            },
            {
                displayName: 'Sample Rate',
                name: 'sampleRate',
                type: 'string',
                displayOptions: {
                    show: {
                        resource: ['sip'],
                        operation: ['sipCall'],
                    },
                },
                default: '',
                description: 'Audio sample rate',
            },
            
            // Call - Initiate Call params
            {
                displayName: 'Agent ID',
                name: 'agentId',
                type: 'string',
                required: true,
                displayOptions: {
                    show: {
                        resource: ['call'],
                        operation: ['initiateCall', 'uploadAudioUrl', 'getWebsocketUrl'],
                    },
                },
                default: '',
                description: 'Agent identifier',
            },
            {
                displayName: 'Prospect ID',
                name: 'prospectId',
                type: 'string',
                required: true,
                displayOptions: {
                    show: {
                        resource: ['call'],
                        operation: ['initiateCall', 'getWebsocketUrl'],
                    },
                },
                default: '',
                description: 'Prospect identifier',
            },
            
            // Call - Get Call Details params
            {
                displayName: 'Call ID',
                name: 'callId',
                type: 'string',
                required: true,
                displayOptions: {
                    show: {
                        resource: ['call'],
                        operation: ['getCallDetails', 'getAuditOne'],
                    },
                },
                default: '',
                description: 'Call identifier',
            },
            
            // Call - Call API params
            {
                displayName: 'From (DID)',
                name: 'from',
                type: 'string',
                required: true,
                displayOptions: {
                    show: {
                        resource: ['call'],
                        operation: ['callApi'],
                    },
                },
                default: '',
                description: 'Caller ID (DID)',
            },
            {
                displayName: 'Number',
                name: 'number',
                type: 'string',
                required: true,
                displayOptions: {
                    show: {
                        resource: ['call'],
                        operation: ['callApi'],
                    },
                },
                default: '',
                description: 'Phone number to call',
            },
            
            // Call - Get Call Timeline params
            {
                displayName: 'Phone To',
                name: 'phoneTo',
                type: 'string',
                required: true,
                displayOptions: {
                    show: {
                        resource: ['call'],
                        operation: ['getCallTimeline'],
                    },
                },
                default: '',
                description: 'Phone number',
            },
            {
                displayName: 'Limit',
                name: 'limit',
                type: 'number',
                displayOptions: {
                    show: {
                        resource: ['call'],
                        operation: ['getCallTimeline'],
                    },
                },
                default: 10,
                description: 'Number of records to return',
            },
            {
                displayName: 'Offset',
                name: 'offset',
                type: 'number',
                displayOptions: {
                    show: {
                        resource: ['call'],
                        operation: ['getCallTimeline'],
                    },
                },
                default: 0,
                description: 'Number of records to skip',
            },
            
            // Call - Get Daily Calls params
            {
                displayName: 'Start Date',
                name: 'startDate',
                type: 'string',
                required: true,
                displayOptions: {
                    show: {
                        resource: ['call'],
                        operation: ['getDailyCalls'],
                    },
                },
                default: '',
                description: 'Start date for daily calls (YYYY-MM-DD)',
            },
            
            // Call - Upload Audio URL params
            {
                displayName: 'Recording URLs',
                name: 'recordingUrls',
                type: 'string',
                required: true,
                displayOptions: {
                    show: {
                        resource: ['call'],
                        operation: ['uploadAudioUrl'],
                    },
                },
                default: '',
                description: 'Comma-separated list of recording URLs',
            },
        ],
    };

    async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
        const items = this.getInputData();
        const returnData: INodeExecutionData[] = [];
        const resource = this.getNodeParameter('resource', 0) as string;
        const operation = this.getNodeParameter('operation', 0) as string;
        
        const credentials = await this.getCredentials('vocallabsApi');
        const baseUrl = credentials.baseUrl as string || 'https://api.superflow.run';
        
        for (let i = 0; i < items.length; i++) {
            try {
                let responseData: any;
                
                if (resource === 'auth') {
                    if (operation === 'createAuthToken') {
                        const clientId = this.getNodeParameter('clientId', i) as string;
                        const clientSecret = this.getNodeParameter('clientSecret', i) as string;
                        
                        const options: IHttpRequestOptions = {
                            method: 'POST',
                            url: `${baseUrl}/b2b/createAuthToken/`,
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            body: {
                                clientId,
                                clientSecret,
                            },
                            json: true,
                        };
                        
                        responseData = await this.helpers.httpRequest(options);
                    } else if (operation === 'getTokens') {
                        const options: IHttpRequestOptions = {
                            method: 'GET',
                            url: `${baseUrl}/b2b/vocallabs/getTokens`,
                            json: true,
                        };
                        
                        responseData = await this.helpers.httpRequest(options);
                    }
                }
                
                else if (resource === 'dashboard') {
                    if (operation === 'getDashboardStats') {
                        const options: IHttpRequestOptions = {
                            method: 'GET',
                            url: `${baseUrl}/b2b/vocallabs/getDashboardStats`,
                            json: true,
                        };
                        
                        responseData = await this.helpers.httpRequest(options);
                    }
                }
                
                else if (resource === 'wallet') {
                    if (operation === 'getWalletBalance') {
                        const options: IHttpRequestOptions = {
                            method: 'GET',
                            url: `${baseUrl}/b2b/getGreenBalance`,
                            json: true,
                        };
                        
                        responseData = await this.helpers.httpRequest(options);
                    } else if (operation === 'getTransactionHistory') {
                        const limit = this.getNodeParameter('limit', i) as number;
                        const offset = this.getNodeParameter('offset', i) as number;
                        
                        const options: IHttpRequestOptions = {
                            method: 'GET',
                            url: `${baseUrl}/b2b/whatsubTransactionHistory`,
                            qs: {
                                limit,
                                offset,
                            },
                            json: true,
                        };
                        
                        responseData = await this.helpers.httpRequest(options);
                    }
                }
                
                else if (resource === 'sip') {
                    if (operation === 'sipCall') {
                        const phoneNumber = this.getNodeParameter('phoneNumber', i) as string;
                        const did = this.getNodeParameter('did', i) as string;
                        const websocketUrl = this.getNodeParameter('websocketUrl', i) as string;
                        const webhookUrl = this.getNodeParameter('webhookUrl', i) as string;
                        const sampleRate = this.getNodeParameter('sampleRate', i) as string;
                        
                        const body: any = {
                            phone_number: phoneNumber,
                            did,
                            websocket_url: websocketUrl,
                        };
                        
                        if (webhookUrl) body.webhook_url = webhookUrl;
                        if (sampleRate) body.sample_rate = sampleRate;
                        
                        const options: IHttpRequestOptions = {
                            method: 'POST',
                            url: `${baseUrl}/b2b/vocallabs/createSIPCall`,
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            body,
                            json: true,
                        };
                        
                        responseData = await this.helpers.httpRequest(options);
                    }
                }
                
                else if (resource === 'call') {
                    if (operation === 'initiateCall') {
                        const agentId = this.getNodeParameter('agentId', i) as string;
                        const prospectId = this.getNodeParameter('prospectId', i) as string;
                        
                        const options: IHttpRequestOptions = {
                            method: 'POST',
                            url: `${baseUrl}/b2b/vocallabs/initiateVocallabsCall?0=`,
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            body: {
                                agentId,
                                prospect_id: prospectId,
                            },
                            json: true,
                        };
                        
                        responseData = await this.helpers.httpRequest(options);
                    } else if (operation === 'getCallDetails') {
                        const callId = this.getNodeParameter('callId', i) as string;
                        
                        const options: IHttpRequestOptions = {
                            method: 'GET',
                            url: `${baseUrl}/b2b/vocallabs/getVocallabsCall`,
                            qs: {
                                callId,
                            },
                            json: true,
                        };
                        
                        responseData = await this.helpers.httpRequest(options);
                    } else if (operation === 'getVoices') {
                        const options: IHttpRequestOptions = {
                            method: 'GET',
                            url: `${baseUrl}/b2b/vocallabs/getVoices?0=`,
                            json: true,
                        };
                        
                        responseData = await this.helpers.httpRequest(options);
                    } else if (operation === 'getCallApiTokens') {
                        const options: IHttpRequestOptions = {
                            method: 'GET',
                            url: `${baseUrl}/b2b/vocallabs/getCallAPITokens`,
                            json: true,
                        };
                        
                        responseData = await this.helpers.httpRequest(options);
                    } else if (operation === 'callApi') {
                        const from = this.getNodeParameter('from', i) as string;
                        const number = this.getNodeParameter('number', i) as string;
                        
                        const options: IHttpRequestOptions = {
                            method: 'POST',
                            url: `${baseUrl}/b2b/vocallabs/initiateCallWebhook`,
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            body: {
                                from,
                                number,
                            },
                            json: true,
                        };
                        
                        responseData = await this.helpers.httpRequest(options);
                    } else if (operation === 'getCallTimeline') {
                        const phoneTo = this.getNodeParameter('phoneTo', i) as string;
                        const limit = this.getNodeParameter('limit', i) as number;
                        const offset = this.getNodeParameter('offset', i) as number;
                        
                        const options: IHttpRequestOptions = {
                            method: 'GET',
                            url: `${baseUrl}/b2b/vocallabs/getCallTimeline`,
                            qs: {
                                phone_to: phoneTo,
                                limit,
                                offset,
                            },
                            json: true,
                        };
                        
                        responseData = await this.helpers.httpRequest(options);
                    } else if (operation === 'getDailyCalls') {
                        const startDate = this.getNodeParameter('startDate', i) as string;
                        
                        const options: IHttpRequestOptions = {
                            method: 'GET',
                            url: `${baseUrl}/b2b/vocallabs/getDailyCalls`,
                            qs: {
                                start_date: startDate,
                            },
                            json: true,
                        };
                        
                        responseData = await this.helpers.httpRequest(options);
                    } else if (operation === 'getWebsocketUrl') {
                        const agentId = this.getNodeParameter('agentId', i) as string;
                        const prospectId = this.getNodeParameter('prospectId', i) as string;
                        
                        const options: IHttpRequestOptions = {
                            method: 'GET',
                            url: `${baseUrl}/b2b/vocallabs/getWebsocketUrl`,
                            qs: {
                                agent_id: agentId,
                                prospect_id: prospectId,
                            },
                            json: true,
                        };
                        
                        responseData = await this.helpers.httpRequest(options);
                    } else if (operation === 'getAuditOne') {
                        const callId = this.getNodeParameter('callId', i) as string;
                        
                        const options: IHttpRequestOptions = {
                            method: 'GET',
                            url: `${baseUrl}/b2b/vocallabs/getOneAudit`,
                            qs: {
                                call_id: callId,
                            },
                            json: true,
                        };
                        
                        responseData = await this.helpers.httpRequest(options);
                    } else if (operation === 'getAudits') {
                        const options: IHttpRequestOptions = {
                            method: 'GET',
                            url: `${baseUrl}/b2b/vocallabs/getAllAudits`,
                            json: true,
                        };
                        
                        responseData = await this.helpers.httpRequest(options);
                    } else if (operation === 'uploadAudioUrl') {
                        const agentId = this.getNodeParameter('agentId', i) as string;
                        const recordingUrls = this.getNodeParameter('recordingUrls', i) as string;
                        const recordingUrlArray = recordingUrls.split(',').map(url => url.trim());
                        
                        const options: IHttpRequestOptions = {
                            method: 'POST',
                            url: `${baseUrl}/b2b/vocallabs/uploadAudits`,
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            body: {
                                agent_id: agentId,
                                recording_url: recordingUrlArray,
                            },
                            json: true,
                        };
                        
                        responseData = await this.helpers.httpRequest(options);
                    }
                }
                
                returnData.push({ json: responseData });
                
            } catch (error) {
                if (this.continueOnFail()) {
                    returnData.push({ json: { error: error.message } });
                    continue;
                }
                throw error;
            }
        }
        
        return [returnData];
    }
}
