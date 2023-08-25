import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class controller {

    @PostMapping("/test")
    public ResponseEntity<String> test(){

        return ResponseEntity.ok("dd");
    }
}

