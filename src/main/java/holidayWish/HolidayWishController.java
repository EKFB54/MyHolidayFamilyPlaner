package holidayWish;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HolidayWishController {

	
	@Autowired
    HolidayWishService holidaywishservice;
	
	public HolidayWishController() {
		// TODO Auto-generated constructor stub
	}

}
