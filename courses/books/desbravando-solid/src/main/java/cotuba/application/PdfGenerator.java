package cotuba.application;

import cotuba.domain.Ebook;
import cotuba.pdf.ITextPdfGenerator;

public interface PdfGenerator {
  void generate(Ebook ebook);

  static PdfGenerator create() {
    return new ITextPdfGenerator();
  }
}
