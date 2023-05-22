package family;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class FamilyMemberService {

	public FamilyMemberService() {
		// TODO Auto-generated constructor stub
	}
	
	@Autowired
	private FamilyMemberRepository familyMemberRepository;
	

}
