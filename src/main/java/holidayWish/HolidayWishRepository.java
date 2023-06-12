package holidayWish;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import holiday.Holiday;

public interface HolidayWishRepository extends CrudRepository< HolidayWish, Long>{

	public List<HolidayWish> findAll();

}
