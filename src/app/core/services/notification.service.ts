import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class NotificationService {
  success(message: string) { console.log('SUCCESS:', message); }
  error(message: string) { console.error('ERROR:', message); }
  info(message: string) { console.info('INFO:', message); }
}
