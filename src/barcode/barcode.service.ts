import { Injectable } from '@nestjs/common';
import * as QRCode from 'qrcode';

@Injectable()
export class BarcodeService {
  generateQrCode(code: string): Promise<string> {
    return QRCode.toDataURL(code, { errorCorrectionLevel: 'H' });
  }
}
