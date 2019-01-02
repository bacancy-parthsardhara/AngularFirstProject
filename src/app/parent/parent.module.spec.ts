import { ParentModule } from './parent.module';

describe('ParentModule', () => {
  let parentModule: ParentModule;

  beforeEach(() => {
    parentModule = new ParentModule();
  });

  it('should create an instance', () => {
    expect(parentModule).toBeTruthy();
  });
});
