package family;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class FamilyMemberController {
	
	@Autowired
	FamilyMemberService familyMemberService;

	public FamilyMemberController() {
		// TODO Auto-generated constructor stub
	}

}
