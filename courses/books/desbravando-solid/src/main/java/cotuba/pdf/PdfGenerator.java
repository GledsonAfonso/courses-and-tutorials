package cotuba.pdf;

import cotuba.domain.Ebook;

public interface PdfGenerator {
  void generate(Ebook ebook);
}
