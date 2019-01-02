import { VehicalModule } from './vehical.module';

describe('VehicalModule', () => {
  let vehicalModule: VehicalModule;

  beforeEach(() => {
    vehicalModule = new VehicalModule();
  });

  it('should create an instance', () => {
    expect(vehicalModule).toBeTruthy();
  });
});
