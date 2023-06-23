package project.family.holiday;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;


public interface HolidayRepository extends CrudRepository<Holiday, Long> {
	//@Query
	//List<Holiday> findall();
}
