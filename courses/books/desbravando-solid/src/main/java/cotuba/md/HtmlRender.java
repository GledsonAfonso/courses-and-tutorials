package cotuba.md;

import java.nio.file.Path;
import java.util.List;

import cotuba.domain.Chapter;
import cotuba.md.impl.CommonMarkHtmlRender;

public interface HtmlRender {
  List<Chapter> render(Path markdownPath);
  
  static HtmlRender create() {
    return new CommonMarkHtmlRender();
  }
}
