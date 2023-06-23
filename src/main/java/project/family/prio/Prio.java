package project.family.prio;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;


import project.family.holidaywish.HolidayWish;
import project.family.familymember.FamilyMember;

@Entity
public class Prio {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;

	@ManyToOne
	@JoinColumn(name = "family_member_id", referencedColumnName = "id")
	private FamilyMember familyMember;

	@ManyToOne
	@JoinColumn(name = "holiday_wish_id", referencedColumnName = "urlaubID")
	private HolidayWish holidayWish;

	private int priority;

	public Prio() {

	}

	public Prio(Long id, FamilyMember familyMember, HolidayWish holidayWish, int priority) {
		super();
		this.id = id;
		this.familyMember = familyMember;
		this.holidayWish = holidayWish;
		this.priority = priority;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public FamilyMember getFamilyMember() {
		return familyMember;
	}

	public void setFamilyMember(FamilyMember familyMember) {
		this.familyMember = familyMember;
	}

	public HolidayWish getHolidayWish() {
		return holidayWish;
	}

	public void setHolidayWish(HolidayWish holidayWish) {
		this.holidayWish = holidayWish;
	}

	public int getPriority() {
		return priority;
	}

	public void setPriority(int priority) {
		this.priority = priority;
	}

}

