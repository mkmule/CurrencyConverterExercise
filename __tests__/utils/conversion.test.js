import { describe, expect, it } from '@jest/globals';
import {
  calculateFees,
  calculateSendAmount,
  convert,
  DEFAULT_FEES,
} from '../../src/utils/conversion';

describe('conversion.ts', () => {
  describe('convert', () => {
    it('should return 1 when conversion rate is 1 with 2 and digits', () => {
      // Given
      const amount = 1;
      const rate = 1;
      const decimalDigits = 2;

      // Then
      expect(convert(amount, rate, decimalDigits)).toBe(1);
    });

    it('should return 0.5 when conversion rate is 0.5 and 2 decimal digits', () => {
      // Given
      const amount = 1;
      const rate = 0.5;
      const decimalDigits = 2;

      // Then
      expect(convert(amount, rate, decimalDigits)).toBe(0.5);
    });

    it('should return 0.03 when conversion rate is 0.025 and 2 decimal digits', () => {
      // Given
      const amount = 1;
      const rate = 0.025;
      const decimalDigits = 2;

      // Then
      expect(convert(amount, rate, decimalDigits)).toBe(0.03);
    });
  });

  describe('DEFAULT_FEES', () => {
    it('should return 0.05 for service fee', () => {
      expect(DEFAULT_FEES.service).toBe(0.05);
    });
    it('should return 0.05 for vat fee', () => {
      expect(DEFAULT_FEES.vat).toBe(0.05);
    });
  });

  describe('calculateFees', () => {
    describe('Given service fee rate of 0.05 and vat fee rate of 0.05', () => {
      const optionsFees = {
        service: 0.05,
        vat: 0.05,
      };

      it('should return service fee of 0.5 ', () => {
        // Given
        const amount = 10;
        const decimalDigits = 2;

        // Then
        expect(
          calculateFees(amount, decimalDigits, optionsFees).serviceFee,
        ).toBe(0.5);
      });

      it('should return vat fee of 0.03', () => {
        // Given
        const amount = 10;
        const decimalDigits = 2;

        // Then
        expect(calculateFees(amount, decimalDigits, optionsFees).vatFee).toBe(
          0.03,
        );
      });
    });
  });

  describe('calculateSendAmount', () => {
    describe('Given service fee of 10 and vat fee of 0.5', () => {
      const fees = { serviceFee: 10, vatFee: 0.5 };

      it('should return send amount of 9.5 when amount is 20 with 2 decimal digits', () => {
        // Given
        const amount = 20;
        const decimalDigits = 2;

        // Then
        expect(calculateSendAmount(amount, decimalDigits, fees)).toBe(9.5);
      });
    });
  });
});
