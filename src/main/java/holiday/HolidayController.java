package holiday;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

//import hs.aalen.Holidaywish.HolidayWish;
@RestController
public class HolidayController {
	@Autowired
	HolidayService holidayservice;
	
	/*@RequestMapping("/holiday")
	public List<Holiday> getHolidayList() {
		return holidayservice.getHolidayList();
	}*/

}
