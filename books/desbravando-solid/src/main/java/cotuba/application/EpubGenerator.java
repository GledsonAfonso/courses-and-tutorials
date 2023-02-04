package cotuba.application;

import cotuba.domain.Ebook;
import cotuba.epub.EpublibEpubGenerator;

public interface EpubGenerator {
  void generate(Ebook ebook);

  static EpubGenerator create() {
    return new EpublibEpubGenerator();
  }
}
