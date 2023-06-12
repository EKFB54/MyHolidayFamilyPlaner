package family;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class FamilyMemberService {

	public FamilyMemberService() {
		// TODO Auto-generated constructor stub
	}
	
	@Autowired
	private FamilyMemberRepository familyMemberRepository;
	
	public List<FamilyMember> getFamilyMemberList() {
		return familyMemberRepository.findAll();
	}
	
	public FamilyMember getFamilyMember(Long id) {
		return familyMemberRepository.findById(id).orElse(null);
	}
	public void updateFamilyMember(Long id, FamilyMember familyMember) {
		familyMemberRepository.save(familyMember);
	}
	public void deleteFamilyMember(Long id) {
		familyMemberRepository.deleteById(id);
	}
	
	

}
