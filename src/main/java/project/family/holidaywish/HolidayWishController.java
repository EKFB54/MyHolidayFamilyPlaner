package project.family.holidaywish;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HolidayWishController {


	@Autowired
	HolidayWishService holidayWishService;

	@RequestMapping("/holidaywish")
	public List<HolidayWish> getHolidayWishlist(){
		return holidayWishService.getHolidayWishList(); 
	}

	@RequestMapping("/holidaywish/{id}")
	public HolidayWish getHolidaywish(@PathVariable Long id) {
		return holidayWishService.getHolidayWish(id);

	}

	@RequestMapping(method = RequestMethod.POST, value = "/holidaywish")
	public void addHolidaywish(@RequestBody HolidayWish holidayWish) {
		holidayWishService.addHolidayWish(holidayWish);

	}

	@RequestMapping(method = RequestMethod.PUT, value = "/holidaywish/{id}")
	public void updateHolidaywish(@PathVariable Long id, @RequestBody HolidayWish holidayWish) {
		holidayWishService.updateHolidayWish(id, holidayWish);
	}

	@RequestMapping(method = RequestMethod.DELETE, value = "/holidaywish/{id}")
	public void deleteHolidaywish(@PathVariable Long id) {
		holidayWishService.deleteHolidayWish(id);
	}

}
