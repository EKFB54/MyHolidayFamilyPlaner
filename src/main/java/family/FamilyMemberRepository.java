package family;

import java.util.List;

import org.springframework.data.repository.CrudRepository;




public interface FamilyMemberRepository extends CrudRepository<FamilyMember, Long> {
	
	public List<FamilyMember> findAll();
	

}
