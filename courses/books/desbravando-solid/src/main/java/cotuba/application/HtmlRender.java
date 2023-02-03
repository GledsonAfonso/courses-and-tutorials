package cotuba.application;

import java.nio.file.Path;
import java.util.List;

import cotuba.domain.Chapter;
import cotuba.md.CommonMarkHtmlRender;

public interface HtmlRender {
  List<Chapter> render(Path markdownPath);
  
  static HtmlRender create() {
    return new CommonMarkHtmlRender();
  }
}
