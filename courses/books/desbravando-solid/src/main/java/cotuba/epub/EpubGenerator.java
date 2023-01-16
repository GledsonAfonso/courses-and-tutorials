package cotuba.epub;

import cotuba.domain.Ebook;
import cotuba.epub.impl.EpubGeneratorImpl;

public interface EpubGenerator {
  void generate(Ebook ebook);

  static EpubGenerator create() {
    return new EpubGeneratorImpl();
  }
}
