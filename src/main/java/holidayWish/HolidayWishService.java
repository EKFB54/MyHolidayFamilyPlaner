package holidayWish;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class HolidayWishService {

	@Autowired
	private HolidayWishRepository holidayWishRepository;

	public HolidayWishService() {
		// TODO Auto-generated constructor stub
	}

	public HolidayWish getHolidayWish(Long id) {

		return holidayWishRepository.findById(id).orElse(null);	
	}

	public void addHolidayWish(HolidayWish holidayWish) {
		holidayWishRepository.save(holidayWish);
	}

	public void updateHolidayWish(Long id, HolidayWish holidayWish) {
		holidayWishRepository.save(holidayWish);
	}

	public void deleteHolidayWish(Long id) {
		holidayWishRepository.deleteById(id);
	}
}
