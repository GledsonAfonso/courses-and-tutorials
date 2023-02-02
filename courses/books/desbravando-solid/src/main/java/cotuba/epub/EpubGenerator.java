package cotuba.epub;

import cotuba.domain.Ebook;
import cotuba.epub.impl.EpublibEpubGenerator;

public interface EpubGenerator {
  void generate(Ebook ebook);

  static EpubGenerator create() {
    return new EpublibEpubGenerator();
  }
}
