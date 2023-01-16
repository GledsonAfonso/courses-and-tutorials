package cotuba.pdf;

import cotuba.domain.Ebook;
import cotuba.pdf.impl.PdfGeneratorImpl;

public interface PdfGenerator {
  void generate(Ebook ebook);

  static PdfGenerator create() {
    return new PdfGeneratorImpl();
  }
}
