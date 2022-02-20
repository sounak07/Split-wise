export interface ServiceFactoryI {
    createService(type: string): any;
}