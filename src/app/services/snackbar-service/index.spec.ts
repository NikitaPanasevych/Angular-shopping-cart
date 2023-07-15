import { TestBed } from '@angular/core/testing';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarService } from '.';

describe('SnackbarService', () => {
  let service: SnackbarService;
  let snackbarMock: jasmine.SpyObj<MatSnackBar>;

  beforeEach(() => {
    const snackbarSpy = jasmine.createSpyObj('MatSnackBar', ['open']);

    TestBed.configureTestingModule({
      providers: [
        SnackbarService,
        { provide: MatSnackBar, useValue: snackbarSpy }
      ]
    });

    service = TestBed.inject(SnackbarService);
    snackbarMock = TestBed.inject(MatSnackBar) as jasmine.SpyObj<MatSnackBar>;
  });

  it('should open snackbar with the provided message', () => {
    const message = 'Test message';

    service.snackbarCall(message);

    expect(snackbarMock.open).toHaveBeenCalledWith(
      message,
      'close',
      jasmine.objectContaining({ duration: 2000 })
    );
  });
});
