package project.family.holidaywish;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

public interface HolidayWishRepository extends CrudRepository< HolidayWish, Long>{

	public List<HolidayWish> findAll();

}
