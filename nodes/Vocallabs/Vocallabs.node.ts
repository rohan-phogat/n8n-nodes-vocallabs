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
        icon: 'file:vocallabs.png',
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
                    {
                        name: 'Agent',
                        value: 'agent',
                    },
                    {
                        name: 'Analytics',
                        value: 'analytics',
                    },
                    {
                        name: 'Contacts And Groups',
                        value: 'contactsAndGroups',
                    },
                    {
                        name: 'Library',
                        value: 'library',
                    },
                    {
                        name: 'Identity',
                        value: 'identity',
                    },
                    {
                        name: 'Campaign',
                        value: 'campaign',
                    },
                    {
                        name: 'Marketplace',
                        value: 'marketplace',
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
            
            // Agent Operations
            {
                displayName: 'Operation',
                name: 'operation',
                type: 'options',
                noDataExpression: true,
                displayOptions: {
                    show: {
                        resource: ['agent'],
                    },
                },
                options: [
                    {
                        name: 'Get Agents',
                        value: 'getAgents',
                        description: 'Get all agents',
                        action: 'Get agents',
                    },
                    {
                        name: 'Get Agent By ID',
                        value: 'getAgentById',
                        description: 'Get agent by ID',
                        action: 'Get agent by ID',
                    },
                    {
                        name: 'Create New Agent',
                        value: 'createAgent',
                        description: 'Create a new agent',
                        action: 'Create agent',
                    },
                    {
                        name: 'Update Agent By ID',
                        value: 'updateAgent',
                        description: 'Update agent by ID',
                        action: 'Update agent',
                    },
                    {
                        name: 'Get Agent Templates',
                        value: 'getAgentTemplates',
                        description: 'Get agent templates',
                        action: 'Get agent templates',
                    },
                    {
                        name: 'Get Voices By Language',
                        value: 'getVoicesByLanguage',
                        description: 'Get voices by language',
                        action: 'Get voices by language',
                    },
                    {
                        name: 'Toggle Favorite',
                        value: 'toggleFavorite',
                        description: 'Toggle agent favorite status',
                        action: 'Toggle favorite',
                    },
                    {
                        name: 'Update Visibility',
                        value: 'updateVisibility',
                        description: 'Update agent visibility (shared status)',
                        action: 'Update visibility',
                    },
                    {
                        name: 'Agent Prompt History',
                        value: 'agentPromptHistory',
                        description: 'Get agent prompt history',
                        action: 'Get prompt history',
                    },
                    {
                        name: 'Update Success Metric',
                        value: 'updateSuccessMetric',
                        description: 'Update agent success metric',
                        action: 'Update success metric',
                    },
                    {
                        name: 'Update WhatsApp Notification',
                        value: 'updateWhatsappNotification',
                        description: 'Update WhatsApp notification setting',
                        action: 'Update WhatsApp notification',
                    },
                    {
                        name: 'Update Mail Notification',
                        value: 'updateMailNotification',
                        description: 'Update mail notification setting',
                        action: 'Update mail notification',
                    },
                    {
                        name: 'Get Agent Documents',
                        value: 'getAgentDocuments',
                        description: 'Get agent documents',
                        action: 'Get agent documents',
                    },
                    {
                        name: 'Insert Agent Documents',
                        value: 'insertAgentDocuments',
                        description: 'Insert agent documents',
                        action: 'Insert agent documents',
                    },
                    {
                        name: 'Get AI Models',
                        value: 'getAIModels',
                        description: 'Get available AI models',
                        action: 'Get AI models',
                    },
                    {
                        name: 'Get Agent Actions',
                        value: 'getAgentActions',
                        description: 'Get agent reschedule actions',
                        action: 'Get agent actions',
                    },
                    {
                        name: 'Update Agent Reschedule',
                        value: 'updateAgentReschedule',
                        description: 'Update agent reschedule setting',
                        action: 'Update agent reschedule',
                    },
                    {
                        name: 'Get Keyword Replacements',
                        value: 'getKeywordReplacements',
                        description: 'Get agent keyword replacements',
                        action: 'Get keyword replacements',
                    },
                    {
                        name: 'Get Agent Keywords',
                        value: 'getAgentKeywords',
                        description: 'Get agent keywords',
                        action: 'Get agent keywords',
                    },
                    {
                        name: 'Add Keywords',
                        value: 'addKeywords',
                        description: 'Add keyword replacements',
                        action: 'Add keywords',
                    },
                    {
                        name: 'Update Keyword',
                        value: 'updateKeyword',
                        description: 'Update keyword replacement',
                        action: 'Update keyword',
                    },
                    {
                        name: 'Delete Keyword',
                        value: 'deleteKeyword',
                        description: 'Delete keyword replacement',
                        action: 'Delete keyword',
                    },
                    {
                        name: 'Get Agent Template',
                        value: 'getAgentTemplate',
                        description: 'Get agent template',
                        action: 'Get agent template',
                    },
                    {
                        name: 'Get Agent Samples',
                        value: 'getAgentSamples',
                        description: 'Get agent samples',
                        action: 'Get agent samples',
                    },
                    {
                        name: 'Get Agent FAQs',
                        value: 'getAgentFaqs',
                        description: 'Get agent FAQs',
                        action: 'Get agent FAQs',
                    },
                    {
                        name: 'Manage Agent FAQs',
                        value: 'manageAgentFaqs',
                        description: 'Insert, update, or delete agent FAQs',
                        action: 'Manage agent FAQs',
                    },
                ],
                default: 'getAgents',
            },
            
            // Analytics Operations
            {
                displayName: 'Operation',
                name: 'operation',
                type: 'options',
                noDataExpression: true,
                displayOptions: {
                    show: {
                        resource: ['analytics'],
                    },
                },
                options: [
                    {
                        name: 'Get Call Statuses',
                        value: 'getCallStatuses',
                        description: 'Get all call statuses',
                        action: 'Get call statuses',
                    },
                    {
                        name: 'Get Call Conversation',
                        value: 'getCallConversation',
                        description: 'Get call conversation',
                        action: 'Get call conversation',
                    },
                    {
                        name: 'Get Call Data',
                        value: 'getCallData',
                        description: 'Get call data',
                        action: 'Get call data',
                    },
                    {
                        name: 'Get Call Status',
                        value: 'getCallStatus',
                        description: 'Get call status',
                        action: 'Get call status',
                    },
                    {
                        name: 'Get Call Summary',
                        value: 'getCallSummary',
                        description: 'Get call summary',
                        action: 'Get call summary',
                    },
                    {
                        name: 'Get Post Call Data',
                        value: 'getPostCallData',
                        description: 'Get post call data',
                        action: 'Get post call data',
                    },
                    {
                        name: 'Update Post Call Data',
                        value: 'updatePostCallData',
                        description: 'Update post call data',
                        action: 'Update post call data',
                    },
                    {
                        name: 'Delete Post Call Data',
                        value: 'deletePostCallData',
                        description: 'Delete post call data',
                        action: 'Delete post call data',
                    },
                    {
                        name: 'Get Vocallabs Call Data',
                        value: 'getVocallabsCallData',
                        description: 'Get VocalLabs call data',
                        action: 'Get VocalLabs call data',
                    },
                ],
                default: 'getCallStatuses',
            },
            
            // ContactsAndGroups Operations
            {
                displayName: 'Operation',
                name: 'operation',
                type: 'options',
                noDataExpression: true,
                displayOptions: {
                    show: {
                        resource: ['contactsAndGroups'],
                    },
                },
                options: [
                    {
                        name: 'Create Contact Group',
                        value: 'createContactGroup',
                        description: 'Create a new contact group',
                        action: 'Create contact group',
                    },
                    {
                        name: 'Create Contact In Group',
                        value: 'createContactInGroup',
                        description: 'Create a contact in a group',
                        action: 'Create contact in group',
                    },
                    {
                        name: 'Update Contact Metadata',
                        value: 'updateContactMetadata',
                        description: 'Update contact metadata',
                        action: 'Update contact metadata',
                    },
                    {
                        name: 'Get Contact Groups',
                        value: 'getContactGroups',
                        description: 'Get all contact groups',
                        action: 'Get contact groups',
                    },
                    {
                        name: 'Update Contact Group',
                        value: 'updateContactGroup',
                        description: 'Update a contact group',
                        action: 'Update contact group',
                    },
                    {
                        name: 'Delete Contact Group',
                        value: 'deleteContactGroup',
                        description: 'Delete a contact group',
                        action: 'Delete contact group',
                    },
                    {
                        name: 'Delete Contact',
                        value: 'deleteContact',
                        description: 'Delete a contact',
                        action: 'Delete contact',
                    },
                    {
                        name: 'Get Contacts',
                        value: 'getContacts',
                        description: 'Get all contacts',
                        action: 'Get contacts',
                    },
                    {
                        name: 'Add Multiple Contacts To Group',
                        value: 'addMultipleContactsToGroup',
                        description: 'Add multiple contacts to a group',
                        action: 'Add multiple contacts to group',
                    },
                    {
                        name: 'Get Contact Data',
                        value: 'getContactData',
                        description: 'Get contact data',
                        action: 'Get contact data',
                    },
                    {
                        name: 'Update Contact Data',
                        value: 'updateContactData',
                        description: 'Update contact data',
                        action: 'Update contact data',
                    },
                    {
                        name: 'Get Contact',
                        value: 'getContact',
                        description: 'Get a contact by ID',
                        action: 'Get contact',
                    },
                ],
                default: 'getContactGroups',
            },
            
            // Library Operations
            {
                displayName: 'Operation',
                name: 'operation',
                type: 'options',
                noDataExpression: true,
                displayOptions: {
                    show: {
                        resource: ['library'],
                    },
                },
                options: [
                    {
                        name: 'Get Actions',
                        value: 'getActions',
                        description: 'Get all actions',
                        action: 'Get actions',
                    },
                    {
                        name: 'Create Action',
                        value: 'createAction',
                        description: 'Create a new action',
                        action: 'Create action',
                    },
                    {
                        name: 'Update Action',
                        value: 'updateAction',
                        description: 'Update an action',
                        action: 'Update action',
                    },
                    {
                        name: 'Delete Action',
                        value: 'deleteAction',
                        description: 'Delete an action',
                        action: 'Delete action',
                    },
                    {
                        name: 'Get Documents',
                        value: 'getDocuments',
                        description: 'Get all documents',
                        action: 'Get documents',
                    },
                    {
                        name: 'Delete Document',
                        value: 'deleteDocument',
                        description: 'Delete a document',
                        action: 'Delete document',
                    },
                    {
                        name: 'Get Action Templates',
                        value: 'getActionTemplates',
                        description: 'Get action templates',
                        action: 'Get action templates',
                    },
                    {
                        name: 'Get Action Template Details',
                        value: 'getActionTemplateDetails',
                        description: 'Get action template details',
                        action: 'Get action template details',
                    },
                    {
                        name: 'Get Action Parameters',
                        value: 'getActionParameters',
                        description: 'Get action parameters',
                        action: 'Get action parameters',
                    },
                    {
                        name: 'Get Action Fields',
                        value: 'getActionFields',
                        description: 'Get action fields',
                        action: 'Get action fields',
                    },
                    {
                        name: 'Get Action Configuration',
                        value: 'getActionConfiguration',
                        description: 'Get action configuration',
                        action: 'Get action configuration',
                    },
                ],
                default: 'getActions',
            },
            
            // Identity Operations
            {
                displayName: 'Operation',
                name: 'operation',
                type: 'options',
                noDataExpression: true,
                displayOptions: {
                    show: {
                        resource: ['identity'],
                    },
                },
                options: [
                    {
                        name: 'Get Flows',
                        value: 'getFlows',
                        description: 'Get all flows',
                        action: 'Get flows',
                    },
                    {
                        name: 'Get Identity URL',
                        value: 'getIdentityUrl',
                        description: 'Get identity verification URL',
                        action: 'Get identity URL',
                    },
                ],
                default: 'getFlows',
            },
            
            // Campaign Operations
            {
                displayName: 'Operation',
                name: 'operation',
                type: 'options',
                noDataExpression: true,
                displayOptions: {
                    show: {
                        resource: ['campaign'],
                    },
                },
                options: [
                    {
                        name: 'Get Campaigns',
                        value: 'getCampaigns',
                        description: 'Get all campaigns',
                        action: 'Get campaigns',
                    },
                    {
                        name: 'Create Campaign',
                        value: 'createCampaign',
                        description: 'Create a new campaign',
                        action: 'Create campaign',
                    },
                    {
                        name: 'Update Campaign',
                        value: 'updateCampaign',
                        description: 'Update a campaign',
                        action: 'Update campaign',
                    },
                    {
                        name: 'Delete Campaign',
                        value: 'deleteCampaign',
                        description: 'Delete a campaign',
                        action: 'Delete campaign',
                    },
                    {
                        name: 'Get Queueing Details',
                        value: 'getQueueingDetails',
                        description: 'Get campaign queueing details',
                        action: 'Get queueing details',
                    },
                    {
                        name: 'Get Campaign Status',
                        value: 'getCampaignStatus',
                        description: 'Get campaign status',
                        action: 'Get campaign status',
                    },
                    {
                        name: 'Update Campaign Status',
                        value: 'updateCampaignStatus',
                        description: 'Update campaign status',
                        action: 'Update campaign status',
                    },
                    {
                        name: 'Add Contacts To Campaign',
                        value: 'addContactsToCampaign',
                        description: 'Add contacts to a campaign',
                        action: 'Add contacts to campaign',
                    },
                ],
                default: 'getCampaigns',
            },
            
            // Marketplace Operations
            {
                displayName: 'Operation',
                name: 'operation',
                type: 'options',
                noDataExpression: true,
                displayOptions: {
                    show: {
                        resource: ['marketplace'],
                    },
                },
                options: [
                    {
                        name: 'Fetch Available Numbers',
                        value: 'fetchAvailableNumbers',
                        description: 'Fetch available phone numbers',
                        action: 'Fetch available numbers',
                    },
                    {
                        name: 'Get Your Numbers',
                        value: 'getYourNumbers',
                        description: 'Get your phone numbers',
                        action: 'Get your numbers',
                    },
                    {
                        name: 'Fetch Countries',
                        value: 'fetchCountries',
                        description: 'Fetch available countries',
                        action: 'Fetch countries',
                    },
                ],
                default: 'fetchAvailableNumbers',
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
            
            // Agent - Get Agents params
            {
                displayName: 'Limit',
                name: 'limit',
                type: 'number',
                displayOptions: {
                    show: {
                        resource: ['agent'],
                        operation: ['getAgents'],
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
                        resource: ['agent'],
                        operation: ['getAgents'],
                    },
                },
                default: 0,
                description: 'Number of records to skip',
            },
            
            // Agent - Get Agent By ID params
            {
                displayName: 'Agent ID',
                name: 'agentId',
                type: 'string',
                required: true,
                displayOptions: {
                    show: {
                        resource: ['agent'],
                        operation: ['getAgentById', 'updateAgent', 'toggleFavorite', 'updateVisibility', 
                                     'agentPromptHistory', 'updateSuccessMetric', 'updateWhatsappNotification', 
                                     'updateMailNotification', 'getAgentDocuments', 'getAgentActions', 
                                     'updateAgentReschedule', 'getKeywordReplacements', 'getAgentKeywords', 
                                     'getAgentFaqs', 'manageAgentFaqs'],
                    },
                },
                default: '',
                description: 'Agent identifier',
            },
            
            // Agent - Create Agent params
            {
                displayName: 'Agent Name',
                name: 'agentName',
                type: 'string',
                required: true,
                displayOptions: {
                    show: {
                        resource: ['agent'],
                        operation: ['createAgent'],
                    },
                },
                default: '',
                description: 'Name of the agent',
            },
            
            // Agent - Update Agent params
            {
                displayName: 'Name',
                name: 'name',
                type: 'string',
                displayOptions: {
                    show: {
                        resource: ['agent'],
                        operation: ['updateAgent'],
                    },
                },
                default: '',
                description: 'Agent name',
            },
            {
                displayName: 'Inputs Needed',
                name: 'inputsNeeded',
                type: 'json',
                displayOptions: {
                    show: {
                        resource: ['agent'],
                        operation: ['updateAgent'],
                    },
                },
                default: '{}',
                description: 'JSON object of inputs needed',
            },
            {
                displayName: 'Welcome Message',
                name: 'welcomeMessage',
                type: 'string',
                displayOptions: {
                    show: {
                        resource: ['agent'],
                        operation: ['updateAgent'],
                    },
                },
                default: '',
                description: 'Agent welcome message',
            },
            {
                displayName: 'Agent Prompt',
                name: 'agentPrompt',
                type: 'string',
                displayOptions: {
                    show: {
                        resource: ['agent'],
                        operation: ['updateAgent'],
                    },
                },
                default: '',
                description: 'Agent prompt text',
            },
            {
                displayName: 'Analytics Prompt',
                name: 'analyticsPrompt',
                type: 'string',
                displayOptions: {
                    show: {
                        resource: ['agent'],
                        operation: ['updateAgent'],
                    },
                },
                default: '',
                description: 'Analytics prompt text',
            },
            {
                displayName: 'Language',
                name: 'language',
                type: 'string',
                displayOptions: {
                    show: {
                        resource: ['agent'],
                        operation: ['updateAgent', 'getVoicesByLanguage'],
                    },
                },
                default: '',
                description: 'Agent language',
            },
            {
                displayName: 'Call Token ID',
                name: 'callTokenId',
                type: 'string',
                displayOptions: {
                    show: {
                        resource: ['agent'],
                        operation: ['updateAgent'],
                    },
                },
                default: '',
                description: 'Call token identifier',
            },
            {
                displayName: 'Voice ID',
                name: 'voiceId',
                type: 'string',
                displayOptions: {
                    show: {
                        resource: ['agent'],
                        operation: ['updateAgent'],
                    },
                },
                default: '',
                description: 'Voice identifier',
            },
            
            // Agent - Toggle Favorite params
            {
                displayName: 'Favorite',
                name: 'favorite',
                type: 'boolean',
                displayOptions: {
                    show: {
                        resource: ['agent'],
                        operation: ['toggleFavorite'],
                    },
                },
                default: true,
                description: 'Whether to mark as favorite',
            },
            
            // Agent - Update Visibility params
            {
                displayName: 'Is Shared',
                name: 'isShared',
                type: 'boolean',
                displayOptions: {
                    show: {
                        resource: ['agent'],
                        operation: ['updateVisibility'],
                    },
                },
                default: true,
                description: 'Whether the agent is shared',
            },
            
            // Agent - Update Success Metric params
            {
                displayName: 'Success Metric',
                name: 'successMetric',
                type: 'json',
                required: true,
                displayOptions: {
                    show: {
                        resource: ['agent'],
                        operation: ['updateSuccessMetric'],
                    },
                },
                default: '{}',
                description: 'JSON object of success metrics',
            },
            
            // Agent - Update Notification params
            {
                displayName: 'Value',
                name: 'value',
                type: 'boolean',
                displayOptions: {
                    show: {
                        resource: ['agent'],
                        operation: ['updateWhatsappNotification', 'updateMailNotification'],
                    },
                },
                default: true,
                description: 'Notification enabled status',
            },
            
            // Agent - Insert Agent Documents params
            {
                displayName: 'File Name',
                name: 'fileName',
                type: 'string',
                required: true,
                displayOptions: {
                    show: {
                        resource: ['agent'],
                        operation: ['insertAgentDocuments'],
                    },
                },
                default: '',
                description: 'Document file name',
            },
            {
                displayName: 'File URL',
                name: 'fileUrl',
                type: 'string',
                required: true,
                displayOptions: {
                    show: {
                        resource: ['agent'],
                        operation: ['insertAgentDocuments'],
                    },
                },
                default: '',
                description: 'Document file URL',
            },
            {
                displayName: 'File Type',
                name: 'fileType',
                type: 'string',
                displayOptions: {
                    show: {
                        resource: ['agent'],
                        operation: ['insertAgentDocuments'],
                    },
                },
                default: '',
                description: 'Document file type',
            },
            {
                displayName: 'Site URL',
                name: 'siteUrl',
                type: 'string',
                displayOptions: {
                    show: {
                        resource: ['agent'],
                        operation: ['insertAgentDocuments'],
                    },
                },
                default: '',
                description: 'Site URL for web crawler',
            },
            {
                displayName: 'Webcrawler Depth',
                name: 'webcrawlerDepth',
                type: 'number',
                displayOptions: {
                    show: {
                        resource: ['agent'],
                        operation: ['insertAgentDocuments'],
                    },
                },
                default: 2,
                description: 'Web crawler depth',
            },
            {
                displayName: 'Crawl Status',
                name: 'crawlStatus',
                type: 'string',
                displayOptions: {
                    show: {
                        resource: ['agent'],
                        operation: ['insertAgentDocuments'],
                    },
                },
                default: '',
                description: 'Crawl status',
            },
            
            // Agent - Update Agent Reschedule params
            {
                displayName: 'Reschedule',
                name: 'reschedule',
                type: 'boolean',
                displayOptions: {
                    show: {
                        resource: ['agent'],
                        operation: ['updateAgentReschedule'],
                    },
                },
                default: true,
                description: 'Enable reschedule feature',
            },
            
            // Agent - Add Keywords params
            {
                displayName: 'Keywords Objects',
                name: 'keywordsObjects',
                type: 'json',
                required: true,
                displayOptions: {
                    show: {
                        resource: ['agent'],
                        operation: ['addKeywords'],
                    },
                },
                default: '[]',
                description: 'Array of keyword objects with agent_id, keyword, and replacement',
            },
            
            // Agent - Update Keyword params
            {
                displayName: 'Keyword ID',
                name: 'keywordId',
                type: 'string',
                required: true,
                displayOptions: {
                    show: {
                        resource: ['agent'],
                        operation: ['updateKeyword', 'deleteKeyword'],
                    },
                },
                default: '',
                description: 'Keyword identifier',
            },
            {
                displayName: 'Keyword',
                name: 'keyword',
                type: 'string',
                displayOptions: {
                    show: {
                        resource: ['agent'],
                        operation: ['updateKeyword'],
                    },
                },
                default: '',
                description: 'Keyword text',
            },
            {
                displayName: 'Replacement',
                name: 'replacement',
                type: 'string',
                displayOptions: {
                    show: {
                        resource: ['agent'],
                        operation: ['updateKeyword'],
                    },
                },
                default: '',
                description: 'Replacement text',
            },
            
            // Agent - Get Agent Template params
            {
                displayName: 'Template Agent ID',
                name: 'templateAgentId',
                type: 'string',
                required: true,
                displayOptions: {
                    show: {
                        resource: ['agent'],
                        operation: ['getAgentTemplate', 'getAgentSamples'],
                    },
                },
                default: '',
                description: 'Template agent identifier',
            },
            
            // Agent - Manage Agent FAQs params
            {
                displayName: 'Question',
                name: 'quesData',
                type: 'string',
                displayOptions: {
                    show: {
                        resource: ['agent'],
                        operation: ['manageAgentFaqs'],
                    },
                },
                default: '',
                description: 'FAQ question',
            },
            {
                displayName: 'Answer',
                name: 'ansData',
                type: 'string',
                displayOptions: {
                    show: {
                        resource: ['agent'],
                        operation: ['manageAgentFaqs'],
                    },
                },
                default: '',
                description: 'FAQ answer',
            },
            {
                displayName: 'Operation Type',
                name: 'operationType',
                type: 'options',
                displayOptions: {
                    show: {
                        resource: ['agent'],
                        operation: ['manageAgentFaqs'],
                    },
                },
                options: [
                    {
                        name: 'Insert',
                        value: 'insert',
                    },
                    {
                        name: 'Update',
                        value: 'update',
                    },
                    {
                        name: 'Delete',
                        value: 'delete',
                    },
                ],
                default: 'insert',
                description: 'Type of FAQ operation',
            },
            {
                displayName: 'FAQ ID',
                name: 'faqId',
                type: 'string',
                displayOptions: {
                    show: {
                        resource: ['agent'],
                        operation: ['manageAgentFaqs'],
                        operationType: ['update', 'delete'],
                    },
                },
                default: '',
                description: 'FAQ identifier (required for update/delete)',
            },
            
            // Analytics - Call ID params
            {
                displayName: 'Call ID',
                name: 'callId',
                type: 'string',
                required: true,
                displayOptions: {
                    show: {
                        resource: ['analytics'],
                        operation: ['getCallConversation', 'getCallData', 'getCallStatus', 'getCallSummary', 'deletePostCallData', 'getVocallabsCallData'],
                    },
                },
                default: '',
                description: 'Call identifier',
            },
            
            // Analytics - Get Post Call Data params
            {
                displayName: 'Agent ID',
                name: 'agentId',
                type: 'string',
                required: true,
                displayOptions: {
                    show: {
                        resource: ['analytics'],
                        operation: ['getPostCallData'],
                    },
                },
                default: '',
                description: 'Agent identifier',
            },
            
            // Analytics - Update Post Call Data params
            {
                displayName: 'Call ID',
                name: 'callId',
                type: 'string',
                required: true,
                displayOptions: {
                    show: {
                        resource: ['analytics'],
                        operation: ['updatePostCallData'],
                    },
                },
                default: '',
                description: 'Call identifier',
            },
            {
                displayName: 'Key',
                name: 'key',
                type: 'string',
                required: true,
                displayOptions: {
                    show: {
                        resource: ['analytics'],
                        operation: ['updatePostCallData'],
                    },
                },
                default: '',
                description: 'Data key',
            },
            {
                displayName: 'Prompt',
                name: 'prompt',
                type: 'string',
                required: true,
                displayOptions: {
                    show: {
                        resource: ['analytics'],
                        operation: ['updatePostCallData'],
                    },
                },
                default: '',
                description: 'Prompt for getting the key',
            },
            
            // ContactsAndGroups - Create Contact Group params
            {
                displayName: 'Group Name',
                name: 'groupName',
                type: 'string',
                required: true,
                displayOptions: {
                    show: {
                        resource: ['contactsAndGroups'],
                        operation: ['createContactGroup'],
                    },
                },
                default: '',
                description: 'Contact group name',
            },
            
            // ContactsAndGroups - Create Contact In Group params
            {
                displayName: 'Contact Name',
                name: 'contactName',
                type: 'string',
                required: true,
                displayOptions: {
                    show: {
                        resource: ['contactsAndGroups'],
                        operation: ['createContactInGroup'],
                    },
                },
                default: '',
                description: 'Contact name',
            },
            {
                displayName: 'Phone',
                name: 'phone',
                type: 'string',
                required: true,
                displayOptions: {
                    show: {
                        resource: ['contactsAndGroups'],
                        operation: ['createContactInGroup'],
                    },
                },
                default: '',
                description: 'Phone number',
            },
            {
                displayName: 'Prospect Group ID',
                name: 'prospectGroupId',
                type: 'string',
                required: true,
                displayOptions: {
                    show: {
                        resource: ['contactsAndGroups'],
                        operation: ['createContactInGroup'],
                    },
                },
                default: '',
                description: 'Prospect group identifier',
            },
            
            // ContactsAndGroups - Update Contact Metadata params
            {
                displayName: 'Prospect ID',
                name: 'prospectId',
                type: 'string',
                required: true,
                displayOptions: {
                    show: {
                        resource: ['contactsAndGroups'],
                        operation: ['updateContactMetadata', 'getContactData', 'updateContactData', 'getContact'],
                    },
                },
                default: '',
                description: 'Prospect identifier',
            },
            {
                displayName: 'Metadata',
                name: 'metadata',
                type: 'json',
                required: true,
                displayOptions: {
                    show: {
                        resource: ['contactsAndGroups'],
                        operation: ['updateContactMetadata'],
                    },
                },
                default: '{}',
                description: 'Contact metadata JSON object',
            },
            
            // ContactsAndGroups - Get Contact Groups params
            {
                displayName: 'Limit',
                name: 'limit',
                type: 'number',
                displayOptions: {
                    show: {
                        resource: ['contactsAndGroups'],
                        operation: ['getContactGroups', 'getContacts', 'getContactData'],
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
                        resource: ['contactsAndGroups'],
                        operation: ['getContactGroups', 'getContacts', 'getContactData'],
                    },
                },
                default: 0,
                description: 'Number of records to skip',
            },
            
            // ContactsAndGroups - Update Contact Group params
            {
                displayName: 'Client ID',
                name: 'clientId',
                type: 'string',
                required: true,
                displayOptions: {
                    show: {
                        resource: ['contactsAndGroups'],
                        operation: ['updateContactGroup'],
                    },
                },
                default: '',
                description: 'Client identifier',
            },
            {
                displayName: 'Group ID',
                name: 'groupId',
                type: 'string',
                required: true,
                displayOptions: {
                    show: {
                        resource: ['contactsAndGroups'],
                        operation: ['updateContactGroup', 'deleteContactGroup'],
                    },
                },
                default: '',
                description: 'Group identifier',
            },
            {
                displayName: 'Group Name',
                name: 'groupName',
                type: 'string',
                required: true,
                displayOptions: {
                    show: {
                        resource: ['contactsAndGroups'],
                        operation: ['updateContactGroup'],
                    },
                },
                default: '',
                description: 'Contact group name',
            },
            
            // ContactsAndGroups - Delete Contact params
            {
                displayName: 'Contact ID',
                name: 'contactId',
                type: 'string',
                required: true,
                displayOptions: {
                    show: {
                        resource: ['contactsAndGroups'],
                        operation: ['deleteContact'],
                    },
                },
                default: '',
                description: 'Contact identifier',
            },
            
            // ContactsAndGroups - Add Multiple Contacts params
            {
                displayName: 'Prospects',
                name: 'prospects',
                type: 'json',
                required: true,
                displayOptions: {
                    show: {
                        resource: ['contactsAndGroups'],
                        operation: ['addMultipleContactsToGroup'],
                    },
                },
                default: '[]',
                description: 'Array of prospect objects',
            },
            
            // ContactsAndGroups - Update Contact Data params
            {
                displayName: 'Data',
                name: 'data',
                type: 'json',
                required: true,
                displayOptions: {
                    show: {
                        resource: ['contactsAndGroups'],
                        operation: ['updateContactData'],
                    },
                },
                default: '{}',
                description: 'Contact data JSON object',
            },
            
            // Library - Create Action params
            {
                displayName: 'Action Name',
                name: 'actionName',
                type: 'string',
                required: true,
                displayOptions: {
                    show: {
                        resource: ['library'],
                        operation: ['createAction', 'updateAction'],
                    },
                },
                default: '',
                description: 'Action name',
            },
            {
                displayName: 'Description',
                name: 'description',
                type: 'string',
                displayOptions: {
                    show: {
                        resource: ['library'],
                        operation: ['createAction', 'updateAction'],
                    },
                },
                default: '',
                description: 'Action description',
            },
            {
                displayName: 'External CURL',
                name: 'externalCurl',
                type: 'string',
                displayOptions: {
                    show: {
                        resource: ['library'],
                        operation: ['createAction', 'updateAction'],
                    },
                },
                default: '',
                description: 'External CURL command',
            },
            {
                displayName: 'Success Response',
                name: 'successResponse',
                type: 'string',
                displayOptions: {
                    show: {
                        resource: ['library'],
                        operation: ['createAction', 'updateAction'],
                    },
                },
                default: '',
                description: 'Success response message',
            },
            {
                displayName: 'Failure Response',
                name: 'failureResponse',
                type: 'string',
                displayOptions: {
                    show: {
                        resource: ['library'],
                        operation: ['createAction', 'updateAction'],
                    },
                },
                default: '',
                description: 'Failure response message',
            },
            {
                displayName: 'Interruption Response',
                name: 'interruptionResponse',
                type: 'string',
                displayOptions: {
                    show: {
                        resource: ['library'],
                        operation: ['createAction', 'updateAction'],
                    },
                },
                default: '',
                description: 'Interruption response message',
            },
            {
                displayName: 'Ref Code',
                name: 'refCode',
                type: 'string',
                displayOptions: {
                    show: {
                        resource: ['library'],
                        operation: ['createAction', 'updateAction'],
                    },
                },
                default: '',
                description: 'Reference code',
            },
            
            // Library - Update Action params
            {
                displayName: 'Action ID',
                name: 'actionId',
                type: 'string',
                required: true,
                displayOptions: {
                    show: {
                        resource: ['library'],
                        operation: ['updateAction', 'deleteAction', 'getActionParameters', 'getActionFields', 'getActionConfiguration'],
                    },
                },
                default: '',
                description: 'Action identifier',
            },
            
            // Library - Delete Document params
            {
                displayName: 'Document ID',
                name: 'documentId',
                type: 'string',
                required: true,
                displayOptions: {
                    show: {
                        resource: ['library'],
                        operation: ['deleteDocument'],
                    },
                },
                default: '',
                description: 'Document identifier',
            },
            
            // Library - Get Action Template Details params
            {
                displayName: 'Template Action ID',
                name: 'templateActionId',
                type: 'string',
                required: true,
                displayOptions: {
                    show: {
                        resource: ['library'],
                        operation: ['getActionTemplateDetails'],
                    },
                },
                default: '',
                description: 'Template action identifier',
            },
            
            // Identity - Get Identity URL params
            {
                displayName: 'Flow ID',
                name: 'flowId',
                type: 'string',
                required: true,
                displayOptions: {
                    show: {
                        resource: ['identity'],
                        operation: ['getIdentityUrl'],
                    },
                },
                default: '',
                description: 'Flow identifier',
            },
            {
                displayName: 'Prospect ID',
                name: 'prospectId',
                type: 'string',
                required: true,
                displayOptions: {
                    show: {
                        resource: ['identity'],
                        operation: ['getIdentityUrl'],
                    },
                },
                default: '',
                description: 'Prospect identifier',
            },
            {
                displayName: 'Verification Type',
                name: 'verificationType',
                type: 'options',
                displayOptions: {
                    show: {
                        resource: ['identity'],
                        operation: ['getIdentityUrl'],
                    },
                },
                options: [
                    {
                        name: 'Aadhaar',
                        value: 'aadhaar',
                    },
                    {
                        name: 'PAN',
                        value: 'pan',
                    },
                ],
                default: 'aadhaar',
                description: 'Verification type',
            },
            {
                displayName: 'Created At',
                name: 'createdAt',
                type: 'string',
                displayOptions: {
                    show: {
                        resource: ['identity'],
                        operation: ['getIdentityUrl'],
                    },
                },
                default: '',
                description: 'Creation timestamp',
            },
            
            // Campaign - Create Campaign params
            {
                displayName: 'Campaign Name',
                name: 'campaignName',
                type: 'string',
                required: true,
                displayOptions: {
                    show: {
                        resource: ['campaign'],
                        operation: ['createCampaign', 'updateCampaign'],
                    },
                },
                default: '',
                description: 'Campaign name',
            },
            {
                displayName: 'Agent ID',
                name: 'agentId',
                type: 'string',
                required: true,
                displayOptions: {
                    show: {
                        resource: ['campaign'],
                        operation: ['createCampaign'],
                    },
                },
                default: '',
                description: 'Agent identifier',
            },
            
            // Campaign - Update Campaign params
            {
                displayName: 'Campaign ID',
                name: 'campaignId',
                type: 'string',
                required: true,
                displayOptions: {
                    show: {
                        resource: ['campaign'],
                        operation: ['updateCampaign', 'deleteCampaign', 'getQueueingDetails', 'getCampaignStatus', 'updateCampaignStatus', 'addContactsToCampaign'],
                    },
                },
                default: '',
                description: 'Campaign identifier',
            },
            
            // Campaign - Get Queueing Details params
            {
                displayName: 'Limit',
                name: 'limit',
                type: 'number',
                displayOptions: {
                    show: {
                        resource: ['campaign'],
                        operation: ['getQueueingDetails'],
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
                        resource: ['campaign'],
                        operation: ['getQueueingDetails'],
                    },
                },
                default: 0,
                description: 'Number of records to skip',
            },
            
            // Campaign - Update Campaign Status params
            {
                displayName: 'Active',
                name: 'active',
                type: 'boolean',
                displayOptions: {
                    show: {
                        resource: ['campaign'],
                        operation: ['updateCampaignStatus'],
                    },
                },
                default: false,
                description: 'Campaign active status',
            },
            
            // Campaign - Add Contacts To Campaign params
            {
                displayName: 'User ID',
                name: 'userId',
                type: 'string',
                required: true,
                displayOptions: {
                    show: {
                        resource: ['campaign'],
                        operation: ['addContactsToCampaign'],
                    },
                },
                default: '',
                description: 'User identifier',
            },
            {
                displayName: 'Prospect Group ID',
                name: 'prospectGroupId',
                type: 'string',
                required: true,
                displayOptions: {
                    show: {
                        resource: ['campaign'],
                        operation: ['addContactsToCampaign'],
                    },
                },
                default: '',
                description: 'Prospect group identifier',
            },
            
            // Marketplace - Pagination params
            {
                displayName: 'Limit',
                name: 'limit',
                type: 'number',
                displayOptions: {
                    show: {
                        resource: ['marketplace'],
                        operation: ['fetchAvailableNumbers', 'getYourNumbers', 'fetchCountries'],
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
                        resource: ['marketplace'],
                        operation: ['fetchAvailableNumbers', 'getYourNumbers', 'fetchCountries'],
                    },
                },
                default: 0,
                description: 'Number of records to skip',
            },
        ],
    };

    async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
        const items = this.getInputData();
        const returnData: INodeExecutionData[] = [];
        const resource = this.getNodeParameter('resource', 0) as string;
        const operation = this.getNodeParameter('operation', 0) as string;
        
        await this.getCredentials('vocallabsApi');
        const baseUrl = 'https://api.superflow.run';
        
        for (let i = 0; i < items.length; i++) {
            try {
                let responseData: any;
                
                // AUTH RESOURCE
                if (resource === 'auth') {
                    if (operation === 'createAuthToken') {
                        const clientId = this.getNodeParameter('clientId', i) as string;
                        const clientSecret = this.getNodeParameter('clientSecret', i) as string;
                        
                        const options: IHttpRequestOptions = {
                            method: 'POST',
                            url: `${baseUrl}/b2b/createAuthToken/`,
                            headers: { 'Content-Type': 'application/json' },
                            body: { clientId, clientSecret },
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
                
                // DASHBOARD RESOURCE
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
                
                // WALLET RESOURCE
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
                            qs: { limit, offset },
                            json: true,
                        };
                        responseData = await this.helpers.httpRequest(options);
                    }
                }
                
                // SIP RESOURCE
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
                            headers: { 'Content-Type': 'application/json' },
                            body,
                            json: true,
                        };
                        responseData = await this.helpers.httpRequest(options);
                    }
                }
                
                // CALL RESOURCE
                else if (resource === 'call') {
                    if (operation === 'initiateCall') {
                        const agentId = this.getNodeParameter('agentId', i) as string;
                        const prospectId = this.getNodeParameter('prospectId', i) as string;
                        
                        const options: IHttpRequestOptions = {
                            method: 'POST',
                            url: `${baseUrl}/b2b/vocallabs/initiateVocallabsCall?0=`,
                            headers: { 'Content-Type': 'application/json' },
                            body: { agentId, prospect_id: prospectId },
                            json: true,
                        };
                        responseData = await this.helpers.httpRequest(options);
                        
                    } else if (operation === 'getCallDetails') {
                        const callId = this.getNodeParameter('callId', i) as string;
                        
                        const options: IHttpRequestOptions = {
                            method: 'GET',
                            url: `${baseUrl}/b2b/vocallabs/getVocallabsCall`,
                            qs: { callId },
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
                            headers: { 'Content-Type': 'application/json' },
                            body: { from, number },
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
                            qs: { phone_to: phoneTo, limit, offset },
                            json: true,
                        };
                        responseData = await this.helpers.httpRequest(options);
                        
                    } else if (operation === 'getDailyCalls') {
                        const startDate = this.getNodeParameter('startDate', i) as string;
                        
                        const options: IHttpRequestOptions = {
                            method: 'GET',
                            url: `${baseUrl}/b2b/vocallabs/getDailyCalls`,
                            qs: { start_date: startDate },
                            json: true,
                        };
                        responseData = await this.helpers.httpRequest(options);
                        
                    } else if (operation === 'getWebsocketUrl') {
                        const agentId = this.getNodeParameter('agentId', i) as string;
                        const prospectId = this.getNodeParameter('prospectId', i) as string;
                        
                        const options: IHttpRequestOptions = {
                            method: 'GET',
                            url: `${baseUrl}/b2b/vocallabs/getWebsocketUrl`,
                            qs: { agent_id: agentId, prospect_id: prospectId },
                            json: true,
                        };
                        responseData = await this.helpers.httpRequest(options);
                        
                    } else if (operation === 'getAuditOne') {
                        const callId = this.getNodeParameter('callId', i) as string;
                        
                        const options: IHttpRequestOptions = {
                            method: 'GET',
                            url: `${baseUrl}/b2b/vocallabs/getOneAudit`,
                            qs: { call_id: callId },
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
                            headers: { 'Content-Type': 'application/json' },
                            body: { agent_id: agentId, recording_url: recordingUrlArray },
                            json: true,
                        };
                        responseData = await this.helpers.httpRequest(options);
                    }
                }
                
                // AGENT RESOURCE
                else if (resource === 'agent') {
                    if (operation === 'getAgents') {
                        const limit = this.getNodeParameter('limit', i) as number;
                        const offset = this.getNodeParameter('offset', i) as number;
                        
                        const options: IHttpRequestOptions = {
                            method: 'GET',
                            url: `${baseUrl}/b2b/vocallabs/getAIAgents`,
                            qs: { limit, offset },
                            json: true,
                        };
                        responseData = await this.helpers.httpRequest(options);
                        
                    } else if (operation === 'getAgentById') {
                        const agentId = this.getNodeParameter('agentId', i) as string;
                        
                        const options: IHttpRequestOptions = {
                            method: 'GET',
                            url: `${baseUrl}/b2b/vocallabs/getAIAgentByID`,
                            qs: { agent_id: agentId },
                            json: true,
                        };
                        responseData = await this.helpers.httpRequest(options);
                        
                    } else if (operation === 'createAgent') {
                        const agentName = this.getNodeParameter('agentName', i) as string;
                        
                        const options: IHttpRequestOptions = {
                            method: 'POST',
                            url: `${baseUrl}/b2b/vocallabs/createAIAgent`,
                            headers: { 'Content-Type': 'application/json' },
                            body: { name: agentName },
                            json: true,
                        };
                        responseData = await this.helpers.httpRequest(options);
                        
                    } else if (operation === 'updateAgent') {
                        const agentId = this.getNodeParameter('agentId', i) as string;
                        const name = this.getNodeParameter('name', i) as string;
                        const inputsNeeded = this.getNodeParameter('inputsNeeded', i) as string;
                        const welcomeMessage = this.getNodeParameter('welcomeMessage', i) as string;
                        const agentPrompt = this.getNodeParameter('agentPrompt', i) as string;
                        const analyticsPrompt = this.getNodeParameter('analyticsPrompt', i) as string;
                        const language = this.getNodeParameter('language', i) as string;
                        const callTokenId = this.getNodeParameter('callTokenId', i) as string;
                        const voiceId = this.getNodeParameter('voiceId', i) as string;
                        
                        const body: any = { agent_id: agentId };
                        if (name) body.name = name;
                        if (inputsNeeded) body.inputs_needed = JSON.parse(inputsNeeded);
                        if (welcomeMessage) body.welcome_message = welcomeMessage;
                        if (agentPrompt) body.agent_prompt = agentPrompt;
                        if (analyticsPrompt) body.analytics_prompt = analyticsPrompt;
                        if (language) body.language = language;
                        if (callTokenId) body.call_token_id = callTokenId;
                        if (voiceId) body.voice_id = voiceId;
                        
                        const options: IHttpRequestOptions = {
                            method: 'POST',
                            url: `${baseUrl}/b2b/vocallabs/updateAIAgent?agent_id=${agentId}`,
                            headers: { 'Content-Type': 'application/json' },
                            body,
                            json: true,
                        };
                        responseData = await this.helpers.httpRequest(options);
                        
                    } else if (operation === 'getAgentTemplates') {
                        const options: IHttpRequestOptions = {
                            method: 'GET',
                            url: `${baseUrl}/b2b/vocallabs/getAgentTemplates`,
                            json: true,
                        };
                        responseData = await this.helpers.httpRequest(options);
                        
                    } else if (operation === 'getVoicesByLanguage') {
                        const language = this.getNodeParameter('language', i) as string;
                        
                        const options: IHttpRequestOptions = {
                            method: 'GET',
                            url: `${baseUrl}/b2b/vocallabs/getVoicesByLanguageComment`,
                            qs: { language },
                            json: true,
                        };
                        responseData = await this.helpers.httpRequest(options);
                        
                    } else if (operation === 'toggleFavorite') {
                        const agentId = this.getNodeParameter('agentId', i) as string;
                        const favorite = this.getNodeParameter('favorite', i) as boolean;
                        
                        const options: IHttpRequestOptions = {
                            method: 'POST',
                            url: `${baseUrl}/b2b/vocallabs/toggleFavorite`,
                            headers: { 'Content-Type': 'application/json' },
                            body: { agent_id: agentId, favorite },
                            json: true,
                        };
                        responseData = await this.helpers.httpRequest(options);
                        
                    } else if (operation === 'updateVisibility') {
                        const agentId = this.getNodeParameter('agentId', i) as string;
                        const isShared = this.getNodeParameter('isShared', i) as boolean;
                        
                        const options: IHttpRequestOptions = {
                            method: 'POST',
                            url: `${baseUrl}/b2b/vocallabs/updateAgentShared`,
                            headers: { 'Content-Type': 'application/json' },
                            body: { agent_id: agentId, isShared },
                            json: true,
                        };
                        responseData = await this.helpers.httpRequest(options);
                        
                    } else if (operation === 'agentPromptHistory') {
                        const agentId = this.getNodeParameter('agentId', i) as string;
                        
                        const options: IHttpRequestOptions = {
                            method: 'POST',
                            url: `${baseUrl}/b2b/vocallabs/agentPromptHistory`,
                            headers: { 'Content-Type': 'application/json' },
                            body: { agent_id: agentId },
                            json: true,
                        };
                        responseData = await this.helpers.httpRequest(options);
                        
                    } else if (operation === 'updateSuccessMetric') {
                        const agentId = this.getNodeParameter('agentId', i) as string;
                        const successMetric = this.getNodeParameter('successMetric', i) as string;
                        
                        const options: IHttpRequestOptions = {
                            method: 'POST',
                            url: `${baseUrl}/b2b/vocallabs/updateSuccessMetric`,
                            headers: { 'Content-Type': 'application/json' },
                            body: { agent_id: agentId, success_metric: JSON.parse(successMetric) },
                            json: true,
                        };
                        responseData = await this.helpers.httpRequest(options);
                        
                    } else if (operation === 'updateWhatsappNotification') {
                        const agentId = this.getNodeParameter('agentId', i) as string;
                        const value = this.getNodeParameter('value', i) as boolean;
                        
                        const options: IHttpRequestOptions = {
                            method: 'POST',
                            url: `${baseUrl}/b2b/vocallabs/updateWhatsappNotification`,
                            headers: { 'Content-Type': 'application/json' },
                            body: { agent_id: agentId, value },
                            json: true,
                        };
                        responseData = await this.helpers.httpRequest(options);
                        
                    } else if (operation === 'updateMailNotification') {
                        const agentId = this.getNodeParameter('agentId', i) as string;
                        const value = this.getNodeParameter('value', i) as boolean;
                        
                        const options: IHttpRequestOptions = {
                            method: 'POST',
                            url: `${baseUrl}/b2b/vocallabs/updateMailNotification`,
                            headers: { 'Content-Type': 'application/json' },
                            body: { agent_id: agentId, value },
                            json: true,
                        };
                        responseData = await this.helpers.httpRequest(options);
                        
                    } else if (operation === 'getAgentDocuments') {
                        const agentId = this.getNodeParameter('agentId', i) as string;
                        
                        const options: IHttpRequestOptions = {
                            method: 'GET',
                            url: `${baseUrl}/b2b/vocallabs/getAgentDocuments`,
                            qs: { agent_id: agentId },
                            json: true,
                        };
                        responseData = await this.helpers.httpRequest(options);
                        
                    } else if (operation === 'insertAgentDocuments') {
                        const fileName = this.getNodeParameter('fileName', i) as string;
                        const fileUrl = this.getNodeParameter('fileUrl', i) as string;
                        const fileType = this.getNodeParameter('fileType', i) as string;
                        const siteUrl = this.getNodeParameter('siteUrl', i) as string;
                        const webcrawlerDepth = this.getNodeParameter('webcrawlerDepth', i) as number;
                        const crawlStatus = this.getNodeParameter('crawlStatus', i) as string;
                        
                        const options: IHttpRequestOptions = {
                            method: 'POST',
                            url: `${baseUrl}/b2b/vocallabs/insertAgentDocx`,
                            headers: { 'Content-Type': 'application/json' },
                            body: {
                                file_name: fileName,
                                file_url: fileUrl,
                                file_type: fileType,
                                site_url: siteUrl,
                                webcrawler_depth: webcrawlerDepth,
                                crawl_status: crawlStatus,
                            },
                            json: true,
                        };
                        responseData = await this.helpers.httpRequest(options);
                        
                    } else if (operation === 'getAIModels') {
                        const options: IHttpRequestOptions = {
                            method: 'GET',
                            url: `${baseUrl}/b2b/vocallabs/getAIModels`,
                            json: true,
                        };
                        responseData = await this.helpers.httpRequest(options);
                        
                    } else if (operation === 'getAgentActions') {
                        const agentId = this.getNodeParameter('agentId', i) as string;
                        
                        const options: IHttpRequestOptions = {
                            method: 'GET',
                            url: `${baseUrl}/b2b/vocallabs/getAgentActions`,
                            qs: { agent_id: agentId },
                            json: true,
                        };
                        responseData = await this.helpers.httpRequest(options);
                        
                    } else if (operation === 'updateAgentReschedule') {
                        const agentId = this.getNodeParameter('agentId', i) as string;
                        const reschedule = this.getNodeParameter('reschedule', i) as boolean;
                        
                        const options: IHttpRequestOptions = {
                            method: 'POST',
                            url: `${baseUrl}/b2b/vocallabs/updateAgentReschedule`,
                            headers: { 'Content-Type': 'application/json' },
                            body: { agent_id: agentId, reschedule },
                            json: true,
                        };
                        responseData = await this.helpers.httpRequest(options);
                        
                    } else if (operation === 'getKeywordReplacements') {
                        const agentId = this.getNodeParameter('agentId', i) as string;
                        
                        const options: IHttpRequestOptions = {
                            method: 'GET',
                            url: `${baseUrl}/b2b/vocallabs/getKeywordReplacements`,
                            qs: { agent_id: agentId },
                            json: true,
                        };
                        responseData = await this.helpers.httpRequest(options);
                        
                    } else if (operation === 'getAgentKeywords') {
                        const agentId = this.getNodeParameter('agentId', i) as string;
                        
                        const options: IHttpRequestOptions = {
                            method: 'GET',
                            url: `${baseUrl}/b2b/vocallabs/getAgentKeywords`,
                            qs: { agent_id: agentId },
                            json: true,
                        };
                        responseData = await this.helpers.httpRequest(options);
                        
                    } else if (operation === 'addKeywords') {
                        const keywordsObjects = this.getNodeParameter('keywordsObjects', i) as string;
                        
                        const options: IHttpRequestOptions = {
                            method: 'POST',
                            url: `${baseUrl}/b2b/vocallabs/addKeyword`,
                            headers: { 'Content-Type': 'application/json' },
                            body: { objects: JSON.parse(keywordsObjects) },
                            json: true,
                        };
                        responseData = await this.helpers.httpRequest(options);
                        
                    } else if (operation === 'updateKeyword') {
                        const keywordId = this.getNodeParameter('keywordId', i) as string;
                        const keyword = this.getNodeParameter('keyword', i) as string;
                        const replacement = this.getNodeParameter('replacement', i) as string;
                        
                        const options: IHttpRequestOptions = {
                            method: 'POST',
                            url: `${baseUrl}/b2b/vocallabs/updateKeyword`,
                            headers: { 'Content-Type': 'application/json' },
                            body: { keyword_id: keywordId, keyword, replacement },
                            json: true,
                        };
                        responseData = await this.helpers.httpRequest(options);
                        
                    } else if (operation === 'deleteKeyword') {
                        const keywordId = this.getNodeParameter('keywordId', i) as string;
                        
                        const options: IHttpRequestOptions = {
                            method: 'DELETE',
                            url: `${baseUrl}/b2b/vocallabs/deleteKeyword`,
                            qs: { keyword_id: keywordId },
                            headers: { 'Content-Type': 'application/json' },
                            json: true,
                        };
                        responseData = await this.helpers.httpRequest(options);
                        
                    } else if (operation === 'getAgentTemplate') {
                        const templateAgentId = this.getNodeParameter('templateAgentId', i) as string;
                        
                        const options: IHttpRequestOptions = {
                            method: 'GET',
                            url: `${baseUrl}/b2b/vocallabs/getTemplate`,
                            qs: { template_agent_id: templateAgentId },
                            json: true,
                        };
                        responseData = await this.helpers.httpRequest(options);
                        
                    } else if (operation === 'getAgentSamples') {
                        const templateAgentId = this.getNodeParameter('templateAgentId', i) as string;
                        
                        const options: IHttpRequestOptions = {
                            method: 'GET',
                            url: `${baseUrl}/b2b/vocallabs/getAgentSamples`,
                            qs: { template_agent_id: templateAgentId },
                            json: true,
                        };
                        responseData = await this.helpers.httpRequest(options);
                        
                    } else if (operation === 'getAgentFaqs') {
                        const agentId = this.getNodeParameter('agentId', i) as string;
                        
                        const options: IHttpRequestOptions = {
                            method: 'GET',
                            url: `${baseUrl}/b2b/vocallabs/getAgentFaq`,
                            qs: { agent_id: agentId },
                            json: true,
                        };
                        responseData = await this.helpers.httpRequest(options);
                        
                    } else if (operation === 'manageAgentFaqs') {
                        const agentId = this.getNodeParameter('agentId', i) as string;
                        const quesData = this.getNodeParameter('quesData', i) as string;
                        const ansData = this.getNodeParameter('ansData', i) as string;
                        const operationType = this.getNodeParameter('operationType', i) as string;
                        const faqId = this.getNodeParameter('faqId', i) as string;
                        
                        const body: any = {
                            agent_id: agentId,
                            ques_data: quesData,
                            ans_data: ansData,
                            operation: operationType,
                        };
                        if (faqId) body.faq_id = faqId;
                        
                        const options: IHttpRequestOptions = {
                            method: 'POST',
                            url: `${baseUrl}/b2b/vocallabs/agentFaq`,
                            headers: { 'Content-Type': 'application/json' },
                            body,
                            json: true,
                        };
                        responseData = await this.helpers.httpRequest(options);
                    }
                }
                
                // ANALYTICS RESOURCE
                else if (resource === 'analytics') {
                    if (operation === 'getCallStatuses') {
                        const options: IHttpRequestOptions = {
                            method: 'GET',
                            url: `${baseUrl}/b2b/vocallabs/getCallStatuses`,
                            json: true,
                        };
                        responseData = await this.helpers.httpRequest(options);
                        
                    } else if (operation === 'getCallConversation') {
                        const callId = this.getNodeParameter('callId', i) as string;
                        
                        const options: IHttpRequestOptions = {
                            method: 'GET',
                            url: `${baseUrl}/b2b/vocallabs/getCallConversation`,
                            qs: { call_id: callId },
                            json: true,
                        };
                        responseData = await this.helpers.httpRequest(options);
                        
                    } else if (operation === 'getCallData') {
                        const callId = this.getNodeParameter('callId', i) as string;
                        
                        const options: IHttpRequestOptions = {
                            method: 'GET',
                            url: `${baseUrl}/b2b/vocallabs/getCallData`,
                            qs: { call_id: callId },
                            headers: { 'Content-Type': 'application/json' },
                            json: true,
                        };
                        responseData = await this.helpers.httpRequest(options);
                        
                    } else if (operation === 'getCallStatus') {
                        const callId = this.getNodeParameter('callId', i) as string;
                        
                        const options: IHttpRequestOptions = {
                            method: 'GET',
                            url: `${baseUrl}/b2b/vocallabs/getCallStatus`,
                            qs: { call_id: callId },
                            headers: { 'Content-Type': 'application/json' },
                            json: true,
                        };
                        responseData = await this.helpers.httpRequest(options);
                        
                    } else if (operation === 'getCallSummary') {
                        const callId = this.getNodeParameter('callId', i) as string;
                        
                        const options: IHttpRequestOptions = {
                            method: 'GET',
                            url: `${baseUrl}/b2b/vocallabs/getCallSummary`,
                            qs: { call_id: callId },
                            headers: { 'Content-Type': 'application/json' },
                            json: true,
                        };
                        responseData = await this.helpers.httpRequest(options);
                        
                    } else if (operation === 'getPostCallData') {
                        const agentId = this.getNodeParameter('agentId', i) as string;
                        
                        const options: IHttpRequestOptions = {
                            method: 'GET',
                            url: `${baseUrl}/b2b/vocallabs/getPostCallData`,
                            qs: { agent_id: agentId },
                            headers: { 'Content-Type': 'application/json' },
                            json: true,
                        };
                        responseData = await this.helpers.httpRequest(options);
                        
                    } else if (operation === 'updatePostCallData') {
                        const callId = this.getNodeParameter('callId', i) as string;
                        const key = this.getNodeParameter('key', i) as string;
                        const prompt = this.getNodeParameter('prompt', i) as string;
                        
                        const options: IHttpRequestOptions = {
                            method: 'POST',
                            url: `${baseUrl}/b2b/vocallabs/updatePostCallData`,
                            headers: { 'Content-Type': 'application/json' },
                            body: { call_id: callId, key, prompt },
                            json: true,
                        };
                        responseData = await this.helpers.httpRequest(options);
                        
                    } else if (operation === 'deletePostCallData') {
                        const callId = this.getNodeParameter('callId', i) as string;
                        
                        const options: IHttpRequestOptions = {
                            method: 'POST',
                            url: `${baseUrl}/b2b/vocallabs/deletePostCallData`,
                            headers: { 'Content-Type': 'application/json' },
                            body: { call_id: callId },
                            json: true,
                        };
                        responseData = await this.helpers.httpRequest(options);
                        
                    } else if (operation === 'getVocallabsCallData') {
                        const callId = this.getNodeParameter('callId', i) as string;
                        
                        const options: IHttpRequestOptions = {
                            method: 'GET',
                            url: `${baseUrl}/b2b/vocallabs/getVocallabsCall`,
                            qs: { callId },
                            headers: { 'Content-Type': 'application/json' },
                            json: true,
                        };
                        responseData = await this.helpers.httpRequest(options);
                    }
                }
                
                // CONTACTS AND GROUPS RESOURCE
                else if (resource === 'contactsAndGroups') {
                    if (operation === 'createContactGroup') {
                        const groupName = this.getNodeParameter('groupName', i) as string;
                        
                        const options: IHttpRequestOptions = {
                            method: 'POST',
                            url: `${baseUrl}/b2b/vocallabs/createContactGroup?0=`,
                            headers: { 'Content-Type': 'application/json' },
                            body: { name: groupName },
                            json: true,
                        };
                        responseData = await this.helpers.httpRequest(options);
                        
                    } else if (operation === 'createContactInGroup') {
                        const contactName = this.getNodeParameter('contactName', i) as string;
                        const phone = this.getNodeParameter('phone', i) as string;
                        const prospectGroupId = this.getNodeParameter('prospectGroupId', i) as string;
                        
                        const options: IHttpRequestOptions = {
                            method: 'POST',
                            url: `${baseUrl}/b2b/vocallabs/createContactInGroup`,
                            headers: { 'Content-Type': 'application/json' },
                            body: { name: contactName, phone, prospect_group_id: prospectGroupId },
                            json: true,
                        };
                        responseData = await this.helpers.httpRequest(options);
                        
                    } else if (operation === 'updateContactMetadata') {
                        const prospectId = this.getNodeParameter('prospectId', i) as string;
                        const metadata = this.getNodeParameter('metadata', i) as string;
                        
                        const options: IHttpRequestOptions = {
                            method: 'POST',
                            url: `${baseUrl}/b2b/vocallabs/updateContactMetadata?prospect_id=${prospectId}`,
                            headers: { 'Content-Type': 'application/json' },
                            body: { metadata: JSON.parse(metadata) },
                            json: true,
                        };
                        responseData = await this.helpers.httpRequest(options);
                        
                    } else if (operation === 'getContactGroups') {
                        const limit = this.getNodeParameter('limit', i) as number;
                        const offset = this.getNodeParameter('offset', i) as number;
                        
                        const options: IHttpRequestOptions = {
                            method: 'GET',
                            url: `${baseUrl}/b2b/vocallabs/getContactGroups`,
                            qs: { limit, offset },
                            json: true,
                        };
                        responseData = await this.helpers.httpRequest(options);
                        
                    } else if (operation === 'updateContactGroup') {
                        const clientId = this.getNodeParameter('clientId', i) as string;
                        const groupId = this.getNodeParameter('groupId', i) as string;
                        const groupName = this.getNodeParameter('groupName', i) as string;
                        
                        const options: IHttpRequestOptions = {
                            method: 'POST',
                            url: `${baseUrl}/b2b/vocallabs/updateContactGroup`,
                            headers: { 'Content-Type': 'application/json' },
                            body: { client_id: clientId, id: groupId, name: groupName },
                            json: true,
                        };
                        responseData = await this.helpers.httpRequest(options);
                        
                    } else if (operation === 'deleteContactGroup') {
                        const groupId = this.getNodeParameter('groupId', i) as string;
                        
                        const options: IHttpRequestOptions = {
                            method: 'DELETE',
                            url: `${baseUrl}/b2b/vocallabs/deleteContactGroup`,
                            headers: { 'Content-Type': 'application/json' },
                            body: { id: groupId },
                            json: true,
                        };
                        responseData = await this.helpers.httpRequest(options);
                        
                    } else if (operation === 'deleteContact') {
                        const contactId = this.getNodeParameter('contactId', i) as string;
                        
                        const options: IHttpRequestOptions = {
                            method: 'DELETE',
                            url: `${baseUrl}/b2b/vocallabs/deleteContact`,
                            headers: { 'Content-Type': 'application/json' },
                            body: { contact_id: contactId },
                            json: true,
                        };
                        responseData = await this.helpers.httpRequest(options);
                        
                    } else if (operation === 'getContacts') {
                        const limit = this.getNodeParameter('limit', i) as number;
                        const offset = this.getNodeParameter('offset', i) as number;
                        
                        const options: IHttpRequestOptions = {
                            method: 'GET',
                            url: `${baseUrl}/b2b/vocallabs/getContacts`,
                            qs: { limit, offset },
                            json: true,
                        };
                        responseData = await this.helpers.httpRequest(options);
                        
                    } else if (operation === 'addMultipleContactsToGroup') {
                        const prospects = this.getNodeParameter('prospects', i) as string;
                        
                        const options: IHttpRequestOptions = {
                            method: 'POST',
                            url: `${baseUrl}/b2b/vocallabs/addMultipleContactsToGroup`,
                            headers: { 'Content-Type': 'application/json' },
                            body: { prospects: JSON.parse(prospects) },
                            json: true,
                        };
                        responseData = await this.helpers.httpRequest(options);
                        
                    } else if (operation === 'getContactData') {
                        const prospectId = this.getNodeParameter('prospectId', i) as string;
                        const limit = this.getNodeParameter('limit', i) as number;
                        const offset = this.getNodeParameter('offset', i) as number;
                        
                        const options: IHttpRequestOptions = {
                            method: 'GET',
                            url: `${baseUrl}/b2b/vocallabs/getContactData`,
                            qs: { prospect_id: prospectId, limit, offset },
                            json: true,
                        };
                        responseData = await this.helpers.httpRequest(options);
                        
                    } else if (operation === 'updateContactData') {
                        const prospectId = this.getNodeParameter('prospectId', i) as string;
                        const data = this.getNodeParameter('data', i) as string;
                        
                        const options: IHttpRequestOptions = {
                            method: 'POST',
                            url: `${baseUrl}/b2b/vocallabs/updateContactData`,
                            headers: { 'Content-Type': 'application/json' },
                            body: { prospect_id: prospectId, data: JSON.parse(data) },
                            json: true,
                        };
                        responseData = await this.helpers.httpRequest(options);
                        
                    } else if (operation === 'getContact') {
                        const prospectId = this.getNodeParameter('prospectId', i) as string;
                        
                        const options: IHttpRequestOptions = {
                            method: 'GET',
                            url: `${baseUrl}/b2b/vocallabs/getContact`,
                            qs: { prospect_id: prospectId },
                            json: true,
                        };
                        responseData = await this.helpers.httpRequest(options);
                    }
                }
                
                // LIBRARY RESOURCE
                else if (resource === 'library') {
                    if (operation === 'getActions') {
                        const options: IHttpRequestOptions = {
                            method: 'GET',
                            url: `${baseUrl}/b2b/vocallabs/getActions`,
                            json: true,
                        };
                        responseData = await this.helpers.httpRequest(options);
                        
                    } else if (operation === 'createAction') {
                        const actionName = this.getNodeParameter('actionName', i) as string;
                        const description = this.getNodeParameter('description', i) as string;
                        const externalCurl = this.getNodeParameter('externalCurl', i) as string;
                        const successResponse = this.getNodeParameter('successResponse', i) as string;
                        const failureResponse = this.getNodeParameter('failureResponse', i) as string;
                        const interruptionResponse = this.getNodeParameter('interruptionResponse', i) as string;
                        const refCode = this.getNodeParameter('refCode', i) as string;
                        
                        const options: IHttpRequestOptions = {
                            method: 'POST',
                            url: `${baseUrl}/b2b/vocallabs/createAction`,
                            headers: { 'Content-Type': 'application/json' },
                            body: {
                                action_name: actionName,
                                description,
                                external_curl: externalCurl,
                                success_response: successResponse,
                                failure_response: failureResponse,
                                interruption_response: interruptionResponse,
                                ref_code: refCode,
                            },
                            json: true,
                        };
                        responseData = await this.helpers.httpRequest(options);
                        
                    } else if (operation === 'updateAction') {
                        const actionId = this.getNodeParameter('actionId', i) as string;
                        const actionName = this.getNodeParameter('actionName', i) as string;
                        const description = this.getNodeParameter('description', i) as string;
                        const externalCurl = this.getNodeParameter('externalCurl', i) as string;
                        const successResponse = this.getNodeParameter('successResponse', i) as string;
                        const failureResponse = this.getNodeParameter('failureResponse', i) as string;
                        const interruptionResponse = this.getNodeParameter('interruptionResponse', i) as string;
                        const refCode = this.getNodeParameter('refCode', i) as string;
                        
                        const options: IHttpRequestOptions = {
                            method: 'POST',
                            url: `${baseUrl}/b2b/vocallabs/updateAction`,
                            headers: { 'Content-Type': 'application/json' },
                            body: {
                                id: actionId,
                                action_name: actionName,
                                description,
                                external_curl: externalCurl,
                                success_response: successResponse,
                                failure_response: failureResponse,
                                interruption_response: interruptionResponse,
                                ref_code: refCode,
                            },
                            json: true,
                        };
                        responseData = await this.helpers.httpRequest(options);
                        
                    } else if (operation === 'deleteAction') {
                        const actionId = this.getNodeParameter('actionId', i) as string;
                        
                        const options: IHttpRequestOptions = {
                            method: 'DELETE',
                            url: `${baseUrl}/b2b/vocallabs/deleteAction`,
                            headers: { 'Content-Type': 'application/json' },
                            body: { id: actionId },
                            json: true,
                        };
                        responseData = await this.helpers.httpRequest(options);
                        
                    } else if (operation === 'getDocuments') {
                        const options: IHttpRequestOptions = {
                            method: 'GET',
                            url: `${baseUrl}/b2b/vocallabs/getDocuments`,
                            json: true,
                        };
                        responseData = await this.helpers.httpRequest(options);
                        
                    } else if (operation === 'deleteDocument') {
                        const documentId = this.getNodeParameter('documentId', i) as string;
                        
                        const options: IHttpRequestOptions = {
                            method: 'DELETE',
                            url: `${baseUrl}/b2b/vocallabs/deleteDocument`,
                            headers: { 'Content-Type': 'application/json' },
                            body: { id: documentId },
                            json: true,
                        };
                        responseData = await this.helpers.httpRequest(options);
                        
                    } else if (operation === 'getActionTemplates') {
                        const options: IHttpRequestOptions = {
                            method: 'GET',
                            url: `${baseUrl}/b2b/vocallabs/getActionTemplates`,
                            json: true,
                        };
                        responseData = await this.helpers.httpRequest(options);
                        
                    } else if (operation === 'getActionTemplateDetails') {
                        const templateActionId = this.getNodeParameter('templateActionId', i) as string;
                        
                        const options: IHttpRequestOptions = {
                            method: 'GET',
                            url: `${baseUrl}/b2b/vocallabs/getActionTemplateDetails`,
                            qs: { template_action_id: templateActionId },
                            json: true,
                        };
                        responseData = await this.helpers.httpRequest(options);
                        
                    } else if (operation === 'getActionParameters') {
                        const actionId = this.getNodeParameter('actionId', i) as string;
                        
                        const options: IHttpRequestOptions = {
                            method: 'GET',
                            url: `${baseUrl}/b2b/vocallabs/getActionParameters`,
                            qs: { action_id: actionId },
                            json: true,
                        };
                        responseData = await this.helpers.httpRequest(options);
                        
                    } else if (operation === 'getActionFields') {
                        const actionId = this.getNodeParameter('actionId', i) as string;
                        
                        const options: IHttpRequestOptions = {
                            method: 'GET',
                            url: `${baseUrl}/b2b/vocallabs/getActionFields`,
                            qs: { action_id: actionId },
                            json: true,
                        };
                        responseData = await this.helpers.httpRequest(options);
                        
                    } else if (operation === 'getActionConfiguration') {
                        const actionId = this.getNodeParameter('actionId', i) as string;
                        
                        const options: IHttpRequestOptions = {
                            method: 'GET',
                            url: `${baseUrl}/b2b/vocallabs/getActionConfiguration`,
                            qs: { action_id: actionId },
                            json: true,
                        };
                        responseData = await this.helpers.httpRequest(options);
                    }
                }
                
                // IDENTITY RESOURCE
                else if (resource === 'identity') {
                    if (operation === 'getFlows') {
                        const options: IHttpRequestOptions = {
                            method: 'GET',
                            url: `${baseUrl}/b2b/vocallabs/getFlows`,
                            json: true,
                        };
                        responseData = await this.helpers.httpRequest(options);
                        
                    } else if (operation === 'getIdentityUrl') {
                        const flowId = this.getNodeParameter('flowId', i) as string;
                        const prospectId = this.getNodeParameter('prospectId', i) as string;
                        const verificationType = this.getNodeParameter('verificationType', i) as string;
                        const createdAt = this.getNodeParameter('createdAt', i) as string;
                        
                        const options: IHttpRequestOptions = {
                            method: 'POST',
                            url: `${baseUrl}/b2b/vocallabs/getIdentityUrl`,
                            headers: { 'Content-Type': 'application/json' },
                            body: {
                                flow_id: flowId,
                                prospect_id: prospectId,
                                verification_type: verificationType,
                                created_at: createdAt,
                            },
                            json: true,
                        };
                        responseData = await this.helpers.httpRequest(options);
                    }
                }
                
                // CAMPAIGN RESOURCE
                else if (resource === 'campaign') {
                    if (operation === 'getCampaigns') {
                        const options: IHttpRequestOptions = {
                            method: 'GET',
                            url: `${baseUrl}/b2b/vocallabs/getCampaigns`,
                            json: true,
                        };
                        responseData = await this.helpers.httpRequest(options);
                        
                    } else if (operation === 'createCampaign') {
                        const campaignName = this.getNodeParameter('campaignName', i) as string;
                        const agentId = this.getNodeParameter('agentId', i) as string;
                        
                        const options: IHttpRequestOptions = {
                            method: 'POST',
                            url: `${baseUrl}/b2b/vocallabs/createCampaign`,
                            headers: { 'Content-Type': 'application/json' },
                            body: { name: campaignName, agent_id: agentId },
                            json: true,
                        };
                        responseData = await this.helpers.httpRequest(options);
                        
                    } else if (operation === 'updateCampaign') {
                        const campaignId = this.getNodeParameter('campaignId', i) as string;
                        const campaignName = this.getNodeParameter('campaignName', i) as string;
                        
                        const options: IHttpRequestOptions = {
                            method: 'POST',
                            url: `${baseUrl}/b2b/vocallabs/updateCampaign`,
                            headers: { 'Content-Type': 'application/json' },
                            body: { campaign_id: campaignId, campaign_name: campaignName },
                            json: true,
                        };
                        responseData = await this.helpers.httpRequest(options);
                        
                    } else if (operation === 'deleteCampaign') {
                        const campaignId = this.getNodeParameter('campaignId', i) as string;
                        
                        const options: IHttpRequestOptions = {
                            method: 'DELETE',
                            url: `${baseUrl}/b2b/vocallabs/deleteCampaign`,
                            headers: { 'Content-Type': 'application/json' },
                            body: { id: campaignId },
                            json: true,
                        };
                        responseData = await this.helpers.httpRequest(options);
                        
                    } else if (operation === 'getQueueingDetails') {
                        const campaignId = this.getNodeParameter('campaignId', i) as string;
                        const limit = this.getNodeParameter('limit', i) as number;
                        const offset = this.getNodeParameter('offset', i) as number;
                        
                        const options: IHttpRequestOptions = {
                            method: 'GET',
                            url: `${baseUrl}/b2b/vocallabs/getQueueingDetails`,
                            qs: { campaign_id: campaignId, limit, offset },
                            headers: { 'Content-Type': 'application/json' },
                            json: true,
                        };
                        responseData = await this.helpers.httpRequest(options);
                        
                    } else if (operation === 'getCampaignStatus') {
                        const campaignId = this.getNodeParameter('campaignId', i) as string;
                        
                        const options: IHttpRequestOptions = {
                            method: 'GET',
                            url: `${baseUrl}/b2b/vocallabs/getCampaignStatus`,
                            qs: { campaign_id: campaignId },
                            headers: { 'Content-Type': 'application/json' },
                            json: true,
                        };
                        responseData = await this.helpers.httpRequest(options);
                        
                    } else if (operation === 'updateCampaignStatus') {
                        const campaignId = this.getNodeParameter('campaignId', i) as string;
                        const active = this.getNodeParameter('active', i) as boolean;
                        
                        const options: IHttpRequestOptions = {
                            method: 'POST',
                            url: `${baseUrl}/b2b/vocallabs/updateCampaignStatus`,
                            headers: { 'Content-Type': 'application/json' },
                            body: { campaign_id: campaignId, active },
                            json: true,
                        };
                        responseData = await this.helpers.httpRequest(options);
                        
                    } else if (operation === 'addContactsToCampaign') {
                        const userId = this.getNodeParameter('userId', i) as string;
                        const campaignId = this.getNodeParameter('campaignId', i) as string;
                        const prospectGroupId = this.getNodeParameter('prospectGroupId', i) as string;
                        
                        const options: IHttpRequestOptions = {
                            method: 'POST',
                            url: `${baseUrl}/b2b/vocallabs/addContactsToCampaign`,
                            headers: { 'Content-Type': 'application/json' },
                            body: {
                                user_id: userId,
                                campaign_id: campaignId,
                                prospect_group_id: prospectGroupId,
                            },
                            json: true,
                        };
                        responseData = await this.helpers.httpRequest(options);
                    }
                }
                
                // MARKETPLACE RESOURCE
                else if (resource === 'marketplace') {
                    if (operation === 'fetchAvailableNumbers') {
                        const limit = this.getNodeParameter('limit', i) as number;
                        const offset = this.getNodeParameter('offset', i) as number;
                        
                        const options: IHttpRequestOptions = {
                            method: 'GET',
                            url: `${baseUrl}/b2b/vocallabs/fetchAvailableNumbers`,
                            qs: { limit, offset },
                            json: true,
                        };
                        responseData = await this.helpers.httpRequest(options);
                        
                    } else if (operation === 'getYourNumbers') {
                        const limit = this.getNodeParameter('limit', i) as number;
                        const offset = this.getNodeParameter('offset', i) as number;
                        
                        const options: IHttpRequestOptions = {
                            method: 'GET',
                            url: `${baseUrl}/b2b/vocallabs/getNumbers`,
                            qs: { limit, offset },
                            json: true,
                        };
                        responseData = await this.helpers.httpRequest(options);
                        
                    } else if (operation === 'fetchCountries') {
                        const limit = this.getNodeParameter('limit', i) as number;
                        const offset = this.getNodeParameter('offset', i) as number;
                        
                        const options: IHttpRequestOptions = {
                            method: 'GET',
                            url: `${baseUrl}/b2b/vocallabs/fetchCountries`,
                            qs: { limit, offset },
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
