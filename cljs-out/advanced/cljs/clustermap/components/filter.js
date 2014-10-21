// Compiled by ClojureScript 0.0-2356
goog.provide('clustermap.components.filter');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('jayq.core');
goog.require('clustermap.om');
goog.require('om.dom');
goog.require('jayq.core');
goog.require('clustermap.model');
goog.require('sablono.core');
goog.require('clustermap.routes');
goog.require('om.dom');
goog.require('clustermap.api');
goog.require('clustermap.om');
goog.require('cljs.core.async');
goog.require('sablono.core');
goog.require('clustermap.ordered_resource');
goog.require('clustermap.model');
goog.require('jayq.core');
goog.require('clustermap.routes');
goog.require('om.core');
goog.require('om.core');
goog.require('clustermap.api');
goog.require('clustermap.ordered_resource');
clustermap.components.filter.render = (function render(p__52244,owner,state){var map__52575 = p__52244;var map__52575__$1 = ((cljs.core.seq_QMARK_(map__52575))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52575):map__52575);var bounds = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52575__$1,cljs.core.constant$keyword$1142);var filter_spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52575__$1,cljs.core.constant$keyword$1150);var G__52664 = {"className": "filter-component"};var G__52665 = (function (){var G__52666 = {"className": "tbl"};var G__52667 = (function (){var G__52674 = {"className": "tbl-row"};var G__52675 = (function (){var G__52676 = {"className": "tbl-cell"};var G__52677 = (function (){var G__52678 = null;var G__52679 = "Filter";return React.DOM.h3(G__52678,G__52679);
})();return React.DOM.div(G__52676,G__52677);
})();return React.DOM.div(G__52674,G__52675);
})();var G__52668 = (function (){var G__52680 = {"className": "tbl-row"};var G__52681 = (function (){var G__52683 = {"className": "tbl-cell"};var G__52684 = "filter by view";return React.DOM.div(G__52683,G__52684);
})();var G__52682 = (function (){var G__52685 = {"className": "tbl-cell"};var G__52686 = (function (){var G__52687 = {"type": "checkbox", "name": "filter-by-view", "value": "true", "onChange": ((function (G__52685,G__52680,G__52681,G__52666,G__52667,G__52664,map__52575,map__52575__$1,bounds,filter_spec){
return (function (e){var val = e.target.checked;return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(filter_spec,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1319], null),val);
});})(G__52685,G__52680,G__52681,G__52666,G__52667,G__52664,map__52575,map__52575__$1,bounds,filter_spec))
};return (sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1 ? sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1(G__52687) : sablono.interpreter.input.call(null,G__52687));
})();return React.DOM.div(G__52685,G__52686);
})();return React.DOM.div(G__52680,G__52681,G__52682);
})();var G__52669 = (function (){var G__52688 = {"className": "tbl-row"};var G__52689 = (function (){var G__52691 = {"className": "tbl-cell"};var G__52692 = "age";return React.DOM.div(G__52691,G__52692);
})();var G__52690 = (function (){var G__52693 = {"className": "tbl-cell"};var G__52694 = (function (){var G__52695 = {"onChange": ((function (G__52693,G__52688,G__52689,G__52666,G__52667,G__52668,G__52664,map__52575,map__52575__$1,bounds,filter_spec){
return (function (e){var val = e.target.value;console.log(val);
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(filter_spec,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1320,cljs.core.constant$keyword$1321], null),(function (){var pred__52699 = cljs.core._EQ_;var expr__52700 = val;if(cljs.core.truth_((function (){var G__52702 = "new";var G__52703 = expr__52700;return (pred__52699.cljs$core$IFn$_invoke$arity$2 ? pred__52699.cljs$core$IFn$_invoke$arity$2(G__52702,G__52703) : pred__52699.call(null,G__52702,G__52703));
})()))
{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1322,new cljs.core.PersistentArrayMap(null, 1, ["!formation_date",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1323,"2009-01-01"], null)], null)], null);
} else
{if(cljs.core.truth_((function (){var G__52704 = "old";var G__52705 = expr__52700;return (pred__52699.cljs$core$IFn$_invoke$arity$2 ? pred__52699.cljs$core$IFn$_invoke$arity$2(G__52704,G__52705) : pred__52699.call(null,G__52704,G__52705));
})()))
{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1322,new cljs.core.PersistentArrayMap(null, 1, ["!formation_date",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1324,"2009-01-01"], null)], null)], null);
} else
{return null;
}
}
})());
});})(G__52693,G__52688,G__52689,G__52666,G__52667,G__52668,G__52664,map__52575,map__52575__$1,bounds,filter_spec))
};var G__52696 = (function (){var G__52706 = {"value": ""};var G__52707 = "any";return (sablono.interpreter.option.cljs$core$IFn$_invoke$arity$2 ? sablono.interpreter.option.cljs$core$IFn$_invoke$arity$2(G__52706,G__52707) : sablono.interpreter.option.call(null,G__52706,G__52707));
})();var G__52697 = (function (){var G__52708 = {"value": "new"};var G__52709 = "< 5 years old";return (sablono.interpreter.option.cljs$core$IFn$_invoke$arity$2 ? sablono.interpreter.option.cljs$core$IFn$_invoke$arity$2(G__52708,G__52709) : sablono.interpreter.option.call(null,G__52708,G__52709));
})();var G__52698 = (function (){var G__52710 = {"value": "old"};var G__52711 = ">= 5 years old";return (sablono.interpreter.option.cljs$core$IFn$_invoke$arity$2 ? sablono.interpreter.option.cljs$core$IFn$_invoke$arity$2(G__52710,G__52711) : sablono.interpreter.option.call(null,G__52710,G__52711));
})();return React.DOM.select(G__52695,G__52696,G__52697,G__52698);
})();return React.DOM.div(G__52693,G__52694);
})();return React.DOM.div(G__52688,G__52689,G__52690);
})();var G__52670 = (function (){var G__52712 = {"className": "tbl-row"};var G__52713 = (function (){var G__52715 = {"className": "tbl-cell"};var G__52716 = "group ?";return React.DOM.div(G__52715,G__52716);
})();var G__52714 = (function (){var G__52717 = {"className": "tbl-cell"};var G__52718 = (function (){var G__52719 = {"onChange": ((function (G__52717,G__52712,G__52713,G__52666,G__52667,G__52668,G__52669,G__52664,map__52575,map__52575__$1,bounds,filter_spec){
return (function (e){var val = e.target.value;console.log(val);
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(filter_spec,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1320,cljs.core.constant$keyword$1325], null),(function (){var pred__52723 = cljs.core._EQ_;var expr__52724 = val;if(cljs.core.truth_((function (){var G__52726 = "group";var G__52727 = expr__52724;return (pred__52723.cljs$core$IFn$_invoke$arity$2 ? pred__52723.cljs$core$IFn$_invoke$arity$2(G__52726,G__52727) : pred__52723.call(null,G__52726,G__52727));
})()))
{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1326,new cljs.core.PersistentArrayMap(null, 1, ["!is_group",true], null)], null);
} else
{if(cljs.core.truth_((function (){var G__52728 = "notgroup";var G__52729 = expr__52724;return (pred__52723.cljs$core$IFn$_invoke$arity$2 ? pred__52723.cljs$core$IFn$_invoke$arity$2(G__52728,G__52729) : pred__52723.call(null,G__52728,G__52729));
})()))
{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1326,new cljs.core.PersistentArrayMap(null, 1, ["!is_group",false], null)], null);
} else
{return null;
}
}
})());
});})(G__52717,G__52712,G__52713,G__52666,G__52667,G__52668,G__52669,G__52664,map__52575,map__52575__$1,bounds,filter_spec))
};var G__52720 = (function (){var G__52730 = {"value": ""};var G__52731 = "any";return (sablono.interpreter.option.cljs$core$IFn$_invoke$arity$2 ? sablono.interpreter.option.cljs$core$IFn$_invoke$arity$2(G__52730,G__52731) : sablono.interpreter.option.call(null,G__52730,G__52731));
})();var G__52721 = (function (){var G__52732 = {"value": "group"};var G__52733 = "group";return (sablono.interpreter.option.cljs$core$IFn$_invoke$arity$2 ? sablono.interpreter.option.cljs$core$IFn$_invoke$arity$2(G__52732,G__52733) : sablono.interpreter.option.call(null,G__52732,G__52733));
})();var G__52722 = (function (){var G__52734 = {"value": "notgroup"};var G__52735 = "not group";return (sablono.interpreter.option.cljs$core$IFn$_invoke$arity$2 ? sablono.interpreter.option.cljs$core$IFn$_invoke$arity$2(G__52734,G__52735) : sablono.interpreter.option.call(null,G__52734,G__52735));
})();return React.DOM.select(G__52719,G__52720,G__52721,G__52722);
})();return React.DOM.div(G__52717,G__52718);
})();return React.DOM.div(G__52712,G__52713,G__52714);
})();var G__52671 = (function (){var G__52736 = {"className": "tbl-row"};var G__52737 = (function (){var G__52739 = {"className": "tbl-cell"};var G__52740 = "turnover";return React.DOM.div(G__52739,G__52740);
})();var G__52738 = (function (){var G__52741 = {"className": "tbl-cell"};var G__52742 = (function (){var G__52743 = {"onChange": ((function (G__52741,G__52736,G__52737,G__52666,G__52667,G__52668,G__52669,G__52670,G__52664,map__52575,map__52575__$1,bounds,filter_spec){
return (function (e){var val = e.target.value;console.log(val);
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(filter_spec,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1320,cljs.core.constant$keyword$1327], null),(function (){var pred__52747 = cljs.core._EQ_;var expr__52748 = val;if(cljs.core.truth_((function (){var G__52750 = "low";var G__52751 = expr__52748;return (pred__52747.cljs$core$IFn$_invoke$arity$2 ? pred__52747.cljs$core$IFn$_invoke$arity$2(G__52750,G__52751) : pred__52747.call(null,G__52750,G__52751));
})()))
{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1322,new cljs.core.PersistentArrayMap(null, 1, ["!latest_turnover",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1324,(1000000)], null)], null)], null);
} else
{if(cljs.core.truth_((function (){var G__52752 = "high";var G__52753 = expr__52748;return (pred__52747.cljs$core$IFn$_invoke$arity$2 ? pred__52747.cljs$core$IFn$_invoke$arity$2(G__52752,G__52753) : pred__52747.call(null,G__52752,G__52753));
})()))
{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1322,new cljs.core.PersistentArrayMap(null, 1, ["!latest_turnover",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1323,(1000000)], null)], null)], null);
} else
{return null;
}
}
})());
});})(G__52741,G__52736,G__52737,G__52666,G__52667,G__52668,G__52669,G__52670,G__52664,map__52575,map__52575__$1,bounds,filter_spec))
};var G__52744 = (function (){var G__52754 = {"value": ""};var G__52755 = "any";return (sablono.interpreter.option.cljs$core$IFn$_invoke$arity$2 ? sablono.interpreter.option.cljs$core$IFn$_invoke$arity$2(G__52754,G__52755) : sablono.interpreter.option.call(null,G__52754,G__52755));
})();var G__52745 = (function (){var G__52756 = {"value": "low"};var G__52757 = "< \u00A31 million";return (sablono.interpreter.option.cljs$core$IFn$_invoke$arity$2 ? sablono.interpreter.option.cljs$core$IFn$_invoke$arity$2(G__52756,G__52757) : sablono.interpreter.option.call(null,G__52756,G__52757));
})();var G__52746 = (function (){var G__52758 = {"value": "high"};var G__52759 = ">= \u00A31 million";return (sablono.interpreter.option.cljs$core$IFn$_invoke$arity$2 ? sablono.interpreter.option.cljs$core$IFn$_invoke$arity$2(G__52758,G__52759) : sablono.interpreter.option.call(null,G__52758,G__52759));
})();return React.DOM.select(G__52743,G__52744,G__52745,G__52746);
})();return React.DOM.div(G__52741,G__52742);
})();return React.DOM.div(G__52736,G__52737,G__52738);
})();var G__52672 = (function (){var G__52760 = {"className": "tbl-row"};var G__52761 = (function (){var G__52763 = {"className": "tbl-cell"};var G__52764 = "SIC section";return React.DOM.div(G__52763,G__52764);
})();var G__52762 = (function (){var G__52765 = {"className": "tbl-cell"};var G__52766 = (function (){var G__52767 = {"style": {"width": "100%"}, "onChange": ((function (G__52765,G__52760,G__52761,G__52666,G__52667,G__52668,G__52669,G__52670,G__52671,G__52664,map__52575,map__52575__$1,bounds,filter_spec){
return (function (e){var val = e.target.value;console.log(e.target.value);
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(filter_spec,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1320,cljs.core.constant$keyword$1328], null),(function (){var pred__52790 = cljs.core._EQ_;var expr__52791 = val;if(cljs.core.truth_((function (){var G__52793 = "A";var G__52794 = expr__52791;return (pred__52790.cljs$core$IFn$_invoke$arity$2 ? pred__52790.cljs$core$IFn$_invoke$arity$2(G__52793,G__52794) : pred__52790.call(null,G__52793,G__52794));
})()))
{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1322,new cljs.core.PersistentArrayMap(null, 1, ["!sic07",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1323,"01110",cljs.core.constant$keyword$1329,"03220"], null)], null)], null);
} else
{if(cljs.core.truth_((function (){var G__52795 = "B";var G__52796 = expr__52791;return (pred__52790.cljs$core$IFn$_invoke$arity$2 ? pred__52790.cljs$core$IFn$_invoke$arity$2(G__52795,G__52796) : pred__52790.call(null,G__52795,G__52796));
})()))
{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1322,new cljs.core.PersistentArrayMap(null, 1, ["!sic07",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1323,"05101",cljs.core.constant$keyword$1329,"09900"], null)], null)], null);
} else
{if(cljs.core.truth_((function (){var G__52797 = "C";var G__52798 = expr__52791;return (pred__52790.cljs$core$IFn$_invoke$arity$2 ? pred__52790.cljs$core$IFn$_invoke$arity$2(G__52797,G__52798) : pred__52790.call(null,G__52797,G__52798));
})()))
{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1322,new cljs.core.PersistentArrayMap(null, 1, ["!sic07",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1323,"10110",cljs.core.constant$keyword$1329,"33200"], null)], null)], null);
} else
{if(cljs.core.truth_((function (){var G__52799 = "D";var G__52800 = expr__52791;return (pred__52790.cljs$core$IFn$_invoke$arity$2 ? pred__52790.cljs$core$IFn$_invoke$arity$2(G__52799,G__52800) : pred__52790.call(null,G__52799,G__52800));
})()))
{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1322,new cljs.core.PersistentArrayMap(null, 1, ["!sic07",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1323,"35110",cljs.core.constant$keyword$1329,"35300"], null)], null)], null);
} else
{if(cljs.core.truth_((function (){var G__52801 = "E";var G__52802 = expr__52791;return (pred__52790.cljs$core$IFn$_invoke$arity$2 ? pred__52790.cljs$core$IFn$_invoke$arity$2(G__52801,G__52802) : pred__52790.call(null,G__52801,G__52802));
})()))
{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1322,new cljs.core.PersistentArrayMap(null, 1, ["!sic07",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1323,"36000",cljs.core.constant$keyword$1329,"39000"], null)], null)], null);
} else
{if(cljs.core.truth_((function (){var G__52803 = "F";var G__52804 = expr__52791;return (pred__52790.cljs$core$IFn$_invoke$arity$2 ? pred__52790.cljs$core$IFn$_invoke$arity$2(G__52803,G__52804) : pred__52790.call(null,G__52803,G__52804));
})()))
{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1322,new cljs.core.PersistentArrayMap(null, 1, ["!sic07",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1323,"41100",cljs.core.constant$keyword$1329,"43999"], null)], null)], null);
} else
{if(cljs.core.truth_((function (){var G__52805 = "G";var G__52806 = expr__52791;return (pred__52790.cljs$core$IFn$_invoke$arity$2 ? pred__52790.cljs$core$IFn$_invoke$arity$2(G__52805,G__52806) : pred__52790.call(null,G__52805,G__52806));
})()))
{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1322,new cljs.core.PersistentArrayMap(null, 1, ["!sic07",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1323,"45111",cljs.core.constant$keyword$1329,"47990"], null)], null)], null);
} else
{if(cljs.core.truth_((function (){var G__52807 = "H";var G__52808 = expr__52791;return (pred__52790.cljs$core$IFn$_invoke$arity$2 ? pred__52790.cljs$core$IFn$_invoke$arity$2(G__52807,G__52808) : pred__52790.call(null,G__52807,G__52808));
})()))
{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1322,new cljs.core.PersistentArrayMap(null, 1, ["!sic07",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1323,"49100",cljs.core.constant$keyword$1329,"53202"], null)], null)], null);
} else
{if(cljs.core.truth_((function (){var G__52809 = "I";var G__52810 = expr__52791;return (pred__52790.cljs$core$IFn$_invoke$arity$2 ? pred__52790.cljs$core$IFn$_invoke$arity$2(G__52809,G__52810) : pred__52790.call(null,G__52809,G__52810));
})()))
{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1322,new cljs.core.PersistentArrayMap(null, 1, ["!sic07",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1323,"55100",cljs.core.constant$keyword$1329,"56302"], null)], null)], null);
} else
{if(cljs.core.truth_((function (){var G__52811 = "J";var G__52812 = expr__52791;return (pred__52790.cljs$core$IFn$_invoke$arity$2 ? pred__52790.cljs$core$IFn$_invoke$arity$2(G__52811,G__52812) : pred__52790.call(null,G__52811,G__52812));
})()))
{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1322,new cljs.core.PersistentArrayMap(null, 1, ["!sic07",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1323,"58110",cljs.core.constant$keyword$1329,"63990"], null)], null)], null);
} else
{if(cljs.core.truth_((function (){var G__52813 = "K";var G__52814 = expr__52791;return (pred__52790.cljs$core$IFn$_invoke$arity$2 ? pred__52790.cljs$core$IFn$_invoke$arity$2(G__52813,G__52814) : pred__52790.call(null,G__52813,G__52814));
})()))
{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1322,new cljs.core.PersistentArrayMap(null, 1, ["!sic07",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1323,"64110",cljs.core.constant$keyword$1329,"66300"], null)], null)], null);
} else
{if(cljs.core.truth_((function (){var G__52815 = "L";var G__52816 = expr__52791;return (pred__52790.cljs$core$IFn$_invoke$arity$2 ? pred__52790.cljs$core$IFn$_invoke$arity$2(G__52815,G__52816) : pred__52790.call(null,G__52815,G__52816));
})()))
{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1322,new cljs.core.PersistentArrayMap(null, 1, ["!sic07",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1323,"68100",cljs.core.constant$keyword$1329,"68320"], null)], null)], null);
} else
{if(cljs.core.truth_((function (){var G__52817 = "M";var G__52818 = expr__52791;return (pred__52790.cljs$core$IFn$_invoke$arity$2 ? pred__52790.cljs$core$IFn$_invoke$arity$2(G__52817,G__52818) : pred__52790.call(null,G__52817,G__52818));
})()))
{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1322,new cljs.core.PersistentArrayMap(null, 1, ["!sic07",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1323,"69101",cljs.core.constant$keyword$1329,"75000"], null)], null)], null);
} else
{if(cljs.core.truth_((function (){var G__52819 = "N";var G__52820 = expr__52791;return (pred__52790.cljs$core$IFn$_invoke$arity$2 ? pred__52790.cljs$core$IFn$_invoke$arity$2(G__52819,G__52820) : pred__52790.call(null,G__52819,G__52820));
})()))
{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1322,new cljs.core.PersistentArrayMap(null, 1, ["!sic07",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1323,"77110",cljs.core.constant$keyword$1329,"82990"], null)], null)], null);
} else
{if(cljs.core.truth_((function (){var G__52821 = "O";var G__52822 = expr__52791;return (pred__52790.cljs$core$IFn$_invoke$arity$2 ? pred__52790.cljs$core$IFn$_invoke$arity$2(G__52821,G__52822) : pred__52790.call(null,G__52821,G__52822));
})()))
{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1322,new cljs.core.PersistentArrayMap(null, 1, ["!sic07",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1323,"84110",cljs.core.constant$keyword$1329,"84300"], null)], null)], null);
} else
{if(cljs.core.truth_((function (){var G__52823 = "P";var G__52824 = expr__52791;return (pred__52790.cljs$core$IFn$_invoke$arity$2 ? pred__52790.cljs$core$IFn$_invoke$arity$2(G__52823,G__52824) : pred__52790.call(null,G__52823,G__52824));
})()))
{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1322,new cljs.core.PersistentArrayMap(null, 1, ["!sic07",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1323,"85100",cljs.core.constant$keyword$1329,"85600"], null)], null)], null);
} else
{if(cljs.core.truth_((function (){var G__52825 = "Q";var G__52826 = expr__52791;return (pred__52790.cljs$core$IFn$_invoke$arity$2 ? pred__52790.cljs$core$IFn$_invoke$arity$2(G__52825,G__52826) : pred__52790.call(null,G__52825,G__52826));
})()))
{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1322,new cljs.core.PersistentArrayMap(null, 1, ["!sic07",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1323,"86101",cljs.core.constant$keyword$1329,"88990"], null)], null)], null);
} else
{if(cljs.core.truth_((function (){var G__52827 = "R";var G__52828 = expr__52791;return (pred__52790.cljs$core$IFn$_invoke$arity$2 ? pred__52790.cljs$core$IFn$_invoke$arity$2(G__52827,G__52828) : pred__52790.call(null,G__52827,G__52828));
})()))
{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1322,new cljs.core.PersistentArrayMap(null, 1, ["!sic07",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1323,"90010",cljs.core.constant$keyword$1329,"93290"], null)], null)], null);
} else
{if(cljs.core.truth_((function (){var G__52829 = "S";var G__52830 = expr__52791;return (pred__52790.cljs$core$IFn$_invoke$arity$2 ? pred__52790.cljs$core$IFn$_invoke$arity$2(G__52829,G__52830) : pred__52790.call(null,G__52829,G__52830));
})()))
{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1322,new cljs.core.PersistentArrayMap(null, 1, ["!sic07",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1323,"94110",cljs.core.constant$keyword$1329,"96090"], null)], null)], null);
} else
{if(cljs.core.truth_((function (){var G__52831 = "T";var G__52832 = expr__52791;return (pred__52790.cljs$core$IFn$_invoke$arity$2 ? pred__52790.cljs$core$IFn$_invoke$arity$2(G__52831,G__52832) : pred__52790.call(null,G__52831,G__52832));
})()))
{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1322,new cljs.core.PersistentArrayMap(null, 1, ["!sic07",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1323,"97000",cljs.core.constant$keyword$1329,"98200"], null)], null)], null);
} else
{if(cljs.core.truth_((function (){var G__52833 = "U";var G__52834 = expr__52791;return (pred__52790.cljs$core$IFn$_invoke$arity$2 ? pred__52790.cljs$core$IFn$_invoke$arity$2(G__52833,G__52834) : pred__52790.call(null,G__52833,G__52834));
})()))
{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1322,new cljs.core.PersistentArrayMap(null, 1, ["!sic07",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1323,"99000",cljs.core.constant$keyword$1329,"99999"], null)], null)], null);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
})());
});})(G__52765,G__52760,G__52761,G__52666,G__52667,G__52668,G__52669,G__52670,G__52671,G__52664,map__52575,map__52575__$1,bounds,filter_spec))
};var G__52768 = (function (){var G__52835 = {"value": ""};var G__52836 = "all";return (sablono.interpreter.option.cljs$core$IFn$_invoke$arity$2 ? sablono.interpreter.option.cljs$core$IFn$_invoke$arity$2(G__52835,G__52836) : sablono.interpreter.option.call(null,G__52835,G__52836));
})();var G__52769 = (function (){var G__52837 = {"value": "A"};var G__52838 = "A : Agriculture, Forestry and Fishing";return (sablono.interpreter.option.cljs$core$IFn$_invoke$arity$2 ? sablono.interpreter.option.cljs$core$IFn$_invoke$arity$2(G__52837,G__52838) : sablono.interpreter.option.call(null,G__52837,G__52838));
})();var G__52770 = (function (){var G__52839 = {"value": "B"};var G__52840 = "B : Mining and Quarrying";return (sablono.interpreter.option.cljs$core$IFn$_invoke$arity$2 ? sablono.interpreter.option.cljs$core$IFn$_invoke$arity$2(G__52839,G__52840) : sablono.interpreter.option.call(null,G__52839,G__52840));
})();var G__52771 = (function (){var G__52841 = {"value": "C"};var G__52842 = "C : Manufacturing";return (sablono.interpreter.option.cljs$core$IFn$_invoke$arity$2 ? sablono.interpreter.option.cljs$core$IFn$_invoke$arity$2(G__52841,G__52842) : sablono.interpreter.option.call(null,G__52841,G__52842));
})();var G__52772 = (function (){var G__52843 = {"value": "D"};var G__52844 = "D : Electricity, gas, steam and air conditioning supply";return (sablono.interpreter.option.cljs$core$IFn$_invoke$arity$2 ? sablono.interpreter.option.cljs$core$IFn$_invoke$arity$2(G__52843,G__52844) : sablono.interpreter.option.call(null,G__52843,G__52844));
})();var G__52773 = (function (){var G__52845 = {"value": "E"};var G__52846 = "E : Water supply, sewerage, waste management and remediation activities";return (sablono.interpreter.option.cljs$core$IFn$_invoke$arity$2 ? sablono.interpreter.option.cljs$core$IFn$_invoke$arity$2(G__52845,G__52846) : sablono.interpreter.option.call(null,G__52845,G__52846));
})();var G__52774 = (function (){var G__52847 = {"value": "F"};var G__52848 = "F : Construction";return (sablono.interpreter.option.cljs$core$IFn$_invoke$arity$2 ? sablono.interpreter.option.cljs$core$IFn$_invoke$arity$2(G__52847,G__52848) : sablono.interpreter.option.call(null,G__52847,G__52848));
})();var G__52775 = (function (){var G__52849 = {"value": "G"};var G__52850 = "G : Wholesale and retail trade; repair of motor vehicles and motorcycles";return (sablono.interpreter.option.cljs$core$IFn$_invoke$arity$2 ? sablono.interpreter.option.cljs$core$IFn$_invoke$arity$2(G__52849,G__52850) : sablono.interpreter.option.call(null,G__52849,G__52850));
})();var G__52776 = (function (){var G__52851 = {"value": "H"};var G__52852 = "H : Transportation and storage";return (sablono.interpreter.option.cljs$core$IFn$_invoke$arity$2 ? sablono.interpreter.option.cljs$core$IFn$_invoke$arity$2(G__52851,G__52852) : sablono.interpreter.option.call(null,G__52851,G__52852));
})();var G__52777 = (function (){var G__52853 = {"value": "I"};var G__52854 = "I : Accommodation and food service activities";return (sablono.interpreter.option.cljs$core$IFn$_invoke$arity$2 ? sablono.interpreter.option.cljs$core$IFn$_invoke$arity$2(G__52853,G__52854) : sablono.interpreter.option.call(null,G__52853,G__52854));
})();var G__52778 = (function (){var G__52855 = {"value": "J"};var G__52856 = "J : Information and communication";return (sablono.interpreter.option.cljs$core$IFn$_invoke$arity$2 ? sablono.interpreter.option.cljs$core$IFn$_invoke$arity$2(G__52855,G__52856) : sablono.interpreter.option.call(null,G__52855,G__52856));
})();var G__52779 = (function (){var G__52857 = {"value": "K"};var G__52858 = "K : Financial and insurance activities";return (sablono.interpreter.option.cljs$core$IFn$_invoke$arity$2 ? sablono.interpreter.option.cljs$core$IFn$_invoke$arity$2(G__52857,G__52858) : sablono.interpreter.option.call(null,G__52857,G__52858));
})();var G__52780 = (function (){var G__52859 = {"value": "L"};var G__52860 = "L : Real estate activities";return (sablono.interpreter.option.cljs$core$IFn$_invoke$arity$2 ? sablono.interpreter.option.cljs$core$IFn$_invoke$arity$2(G__52859,G__52860) : sablono.interpreter.option.call(null,G__52859,G__52860));
})();var G__52781 = (function (){var G__52861 = {"value": "M"};var G__52862 = "M : Professional, scientific and technical activities";return (sablono.interpreter.option.cljs$core$IFn$_invoke$arity$2 ? sablono.interpreter.option.cljs$core$IFn$_invoke$arity$2(G__52861,G__52862) : sablono.interpreter.option.call(null,G__52861,G__52862));
})();var G__52782 = (function (){var G__52863 = {"value": "N"};var G__52864 = "N : Administrative and support service activities";return (sablono.interpreter.option.cljs$core$IFn$_invoke$arity$2 ? sablono.interpreter.option.cljs$core$IFn$_invoke$arity$2(G__52863,G__52864) : sablono.interpreter.option.call(null,G__52863,G__52864));
})();var G__52783 = (function (){var G__52865 = {"value": "O"};var G__52866 = "O : Public administration and defence; compulsory social security";return (sablono.interpreter.option.cljs$core$IFn$_invoke$arity$2 ? sablono.interpreter.option.cljs$core$IFn$_invoke$arity$2(G__52865,G__52866) : sablono.interpreter.option.call(null,G__52865,G__52866));
})();var G__52784 = (function (){var G__52867 = {"value": "P"};var G__52868 = "P : Education";return (sablono.interpreter.option.cljs$core$IFn$_invoke$arity$2 ? sablono.interpreter.option.cljs$core$IFn$_invoke$arity$2(G__52867,G__52868) : sablono.interpreter.option.call(null,G__52867,G__52868));
})();var G__52785 = (function (){var G__52869 = {"value": "Q"};var G__52870 = "Q : Human health and social work activities";return (sablono.interpreter.option.cljs$core$IFn$_invoke$arity$2 ? sablono.interpreter.option.cljs$core$IFn$_invoke$arity$2(G__52869,G__52870) : sablono.interpreter.option.call(null,G__52869,G__52870));
})();var G__52786 = (function (){var G__52871 = {"value": "R"};var G__52872 = "R : Arts, entertainment and recreation";return (sablono.interpreter.option.cljs$core$IFn$_invoke$arity$2 ? sablono.interpreter.option.cljs$core$IFn$_invoke$arity$2(G__52871,G__52872) : sablono.interpreter.option.call(null,G__52871,G__52872));
})();var G__52787 = (function (){var G__52873 = {"value": "S"};var G__52874 = "S : Other service activities";return (sablono.interpreter.option.cljs$core$IFn$_invoke$arity$2 ? sablono.interpreter.option.cljs$core$IFn$_invoke$arity$2(G__52873,G__52874) : sablono.interpreter.option.call(null,G__52873,G__52874));
})();var G__52788 = (function (){var G__52875 = {"value": "T"};var G__52876 = "T : Activities of households as employers";return (sablono.interpreter.option.cljs$core$IFn$_invoke$arity$2 ? sablono.interpreter.option.cljs$core$IFn$_invoke$arity$2(G__52875,G__52876) : sablono.interpreter.option.call(null,G__52875,G__52876));
})();var G__52789 = (function (){var G__52877 = {"value": "U"};var G__52878 = "U : Activities of extraterritorial organisations and bodies";return (sablono.interpreter.option.cljs$core$IFn$_invoke$arity$2 ? sablono.interpreter.option.cljs$core$IFn$_invoke$arity$2(G__52877,G__52878) : sablono.interpreter.option.call(null,G__52877,G__52878));
})();return React.DOM.select(G__52767,G__52768,G__52769,G__52770,G__52771,G__52772,G__52773,G__52774,G__52775,G__52776,G__52777,G__52778,G__52779,G__52780,G__52781,G__52782,G__52783,G__52784,G__52785,G__52786,G__52787,G__52788,G__52789);
})();return React.DOM.div(G__52765,G__52766);
})();return React.DOM.div(G__52760,G__52761,G__52762);
})();var G__52673 = (function (){var G__52879 = {"className": "tbl-row"};var G__52880 = (function (){var G__52882 = {"className": "tbl-cell"};var G__52883 = "ONS sector";return React.DOM.div(G__52882,G__52883);
})();var G__52881 = (function (){var G__52884 = {"className": "tbl-cell"};var G__52885 = (function (){var G__52886 = {"style": {"width": "100%"}, "onChange": ((function (G__52884,G__52879,G__52880,G__52666,G__52667,G__52668,G__52669,G__52670,G__52671,G__52672,G__52664,map__52575,map__52575__$1,bounds,filter_spec){
return (function (e){var val = e.target.value;console.log(e.target.value);
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(filter_spec,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1320,cljs.core.constant$keyword$1330], null),(cljs.core.truth_(cljs.core.not_empty(val))?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1331,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1217,"?tags",cljs.core.constant$keyword$1143,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1332,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1333,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1326,new cljs.core.PersistentArrayMap(null, 1, ["type","ons_sector"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1326,new cljs.core.PersistentArrayMap(null, 1, ["tag",val], null)], null)], null)], null)], null)], null)], null):null));
});})(G__52884,G__52879,G__52880,G__52666,G__52667,G__52668,G__52669,G__52670,G__52671,G__52672,G__52664,map__52575,map__52575__$1,bounds,filter_spec))
};var G__52887 = (function (){var G__52893 = {"value": ""};var G__52894 = "all";return (sablono.interpreter.option.cljs$core$IFn$_invoke$arity$2 ? sablono.interpreter.option.cljs$core$IFn$_invoke$arity$2(G__52893,G__52894) : sablono.interpreter.option.call(null,G__52893,G__52894));
})();var G__52888 = (function (){var G__52895 = {"value": "other_scitechmanf"};var G__52896 = "Other scientific/technological manufacture";return (sablono.interpreter.option.cljs$core$IFn$_invoke$arity$2 ? sablono.interpreter.option.cljs$core$IFn$_invoke$arity$2(G__52895,G__52896) : sablono.interpreter.option.call(null,G__52895,G__52896));
})();var G__52889 = (function (){var G__52897 = {"value": "lifesci_health"};var G__52898 = "Life Sciences & Healthcare";return (sablono.interpreter.option.cljs$core$IFn$_invoke$arity$2 ? sablono.interpreter.option.cljs$core$IFn$_invoke$arity$2(G__52897,G__52898) : sablono.interpreter.option.call(null,G__52897,G__52898));
})();var G__52890 = (function (){var G__52899 = {"value": "digi_tech"};var G__52900 = "Digital Technologies";return (sablono.interpreter.option.cljs$core$IFn$_invoke$arity$2 ? sablono.interpreter.option.cljs$core$IFn$_invoke$arity$2(G__52899,G__52900) : sablono.interpreter.option.call(null,G__52899,G__52900));
})();var G__52891 = (function (){var G__52901 = {"value": "pub_broad"};var G__52902 = "Publishing & Broadcasting";return (sablono.interpreter.option.cljs$core$IFn$_invoke$arity$2 ? sablono.interpreter.option.cljs$core$IFn$_invoke$arity$2(G__52901,G__52902) : sablono.interpreter.option.call(null,G__52901,G__52902));
})();var G__52892 = (function (){var G__52903 = {"value": "other_scitech_serv"};var G__52904 = "Other scientific/technological services";return (sablono.interpreter.option.cljs$core$IFn$_invoke$arity$2 ? sablono.interpreter.option.cljs$core$IFn$_invoke$arity$2(G__52903,G__52904) : sablono.interpreter.option.call(null,G__52903,G__52904));
})();return React.DOM.select(G__52886,G__52887,G__52888,G__52889,G__52890,G__52891,G__52892);
})();return React.DOM.div(G__52884,G__52885);
})();return React.DOM.div(G__52879,G__52880,G__52881);
})();return React.DOM.div(G__52666,G__52667,G__52668,G__52669,G__52670,G__52671,G__52672,G__52673);
})();return React.DOM.div(G__52664,G__52665);
});
clustermap.components.filter.filter_component = (function filter_component(p__52905,owner){var map__52914 = p__52905;var map__52914__$1 = ((cljs.core.seq_QMARK_(map__52914))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52914):map__52914);var props = map__52914__$1;var map__52915 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52914__$1,cljs.core.constant$keyword$1150);var map__52915__$1 = ((cljs.core.seq_QMARK_(map__52915))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52915):map__52915);var filter_spec = map__52915__$1;var components = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52915__$1,cljs.core.constant$keyword$1320);var filter_by_view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52915__$1,cljs.core.constant$keyword$1319);var compiled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52915__$1,cljs.core.constant$keyword$1334);var bounds = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52914__$1,cljs.core.constant$keyword$1142);if(typeof clustermap.components.filter.t52916 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.filter.t52916 = (function (filter_component,owner,filter_by_view,props,map__52914,p__52905,map__52915,filter_spec,compiled,bounds,components,meta52917){
this.filter_component = filter_component;
this.owner = owner;
this.filter_by_view = filter_by_view;
this.props = props;
this.map__52914 = map__52914;
this.p__52905 = p__52905;
this.map__52915 = map__52915;
this.filter_spec = filter_spec;
this.compiled = compiled;
this.bounds = bounds;
this.components = components;
this.meta52917 = meta52917;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.filter.t52916.cljs$lang$type = true;
clustermap.components.filter.t52916.cljs$lang$ctorStr = "clustermap.components.filter/t52916";
clustermap.components.filter.t52916.cljs$lang$ctorPrWriter = ((function (map__52914,map__52914__$1,props,map__52915,map__52915__$1,filter_spec,components,filter_by_view,compiled,bounds){
return (function (this__4213__auto__,writer__4214__auto__,opt__4215__auto__){return cljs.core._write(writer__4214__auto__,"clustermap.components.filter/t52916");
});})(map__52914,map__52914__$1,props,map__52915,map__52915__$1,filter_spec,components,filter_by_view,compiled,bounds))
;
clustermap.components.filter.t52916.prototype.om$core$IWillUpdate$ = true;
clustermap.components.filter.t52916.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__52914,map__52914__$1,props,map__52915,map__52915__$1,filter_spec,components,filter_by_view,compiled,bounds){
return (function (_,p__52919,next_state){var self__ = this;
var map__52920 = p__52919;var map__52920__$1 = ((cljs.core.seq_QMARK_(map__52920))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52920):map__52920);var map__52921 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52920__$1,cljs.core.constant$keyword$1150);var map__52921__$1 = ((cljs.core.seq_QMARK_(map__52921))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52921):map__52921);var next_components = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52921__$1,cljs.core.constant$keyword$1320);var next_filter_by_view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52921__$1,cljs.core.constant$keyword$1319);var next_compiled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52921__$1,cljs.core.constant$keyword$1334);var next_bounds = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52920__$1,cljs.core.constant$keyword$1142);var ___$1 = this;if(cljs.core.truth_((function (){var or__3637__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(next_components,self__.components);if(or__3637__auto__)
{return or__3637__auto__;
} else
{var or__3637__auto____$1 = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(next_filter_by_view,self__.filter_by_view);if(or__3637__auto____$1)
{return or__3637__auto____$1;
} else
{var and__3625__auto__ = next_filter_by_view;if(cljs.core.truth_(and__3625__auto__))
{return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(next_bounds,self__.bounds);
} else
{return and__3625__auto__;
}
}
}
})()))
{return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.filter_spec,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1334], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.map.cljs$core$IFn$_invoke$arity$2(om.core._value,cljs.core.vals(next_components)))));
} else
{return null;
}
});})(map__52914,map__52914__$1,props,map__52915,map__52915__$1,filter_spec,components,filter_by_view,compiled,bounds))
;
clustermap.components.filter.t52916.prototype.om$core$IRenderState$ = true;
clustermap.components.filter.t52916.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__52914,map__52914__$1,props,map__52915,map__52915__$1,filter_spec,components,filter_by_view,compiled,bounds){
return (function (_,state){var self__ = this;
var ___$1 = this;return clustermap.components.filter.render(self__.props,self__.owner,state);
});})(map__52914,map__52914__$1,props,map__52915,map__52915__$1,filter_spec,components,filter_by_view,compiled,bounds))
;
clustermap.components.filter.t52916.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__52914,map__52914__$1,props,map__52915,map__52915__$1,filter_spec,components,filter_by_view,compiled,bounds){
return (function (_52918){var self__ = this;
var _52918__$1 = this;return self__.meta52917;
});})(map__52914,map__52914__$1,props,map__52915,map__52915__$1,filter_spec,components,filter_by_view,compiled,bounds))
;
clustermap.components.filter.t52916.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__52914,map__52914__$1,props,map__52915,map__52915__$1,filter_spec,components,filter_by_view,compiled,bounds){
return (function (_52918,meta52917__$1){var self__ = this;
var _52918__$1 = this;return (new clustermap.components.filter.t52916(self__.filter_component,self__.owner,self__.filter_by_view,self__.props,self__.map__52914,self__.p__52905,self__.map__52915,self__.filter_spec,self__.compiled,self__.bounds,self__.components,meta52917__$1));
});})(map__52914,map__52914__$1,props,map__52915,map__52915__$1,filter_spec,components,filter_by_view,compiled,bounds))
;
clustermap.components.filter.__GT_t52916 = ((function (map__52914,map__52914__$1,props,map__52915,map__52915__$1,filter_spec,components,filter_by_view,compiled,bounds){
return (function __GT_t52916(filter_component__$1,owner__$1,filter_by_view__$1,props__$1,map__52914__$2,p__52905__$1,map__52915__$2,filter_spec__$1,compiled__$1,bounds__$1,components__$1,meta52917){return (new clustermap.components.filter.t52916(filter_component__$1,owner__$1,filter_by_view__$1,props__$1,map__52914__$2,p__52905__$1,map__52915__$2,filter_spec__$1,compiled__$1,bounds__$1,components__$1,meta52917));
});})(map__52914,map__52914__$1,props,map__52915,map__52915__$1,filter_spec,components,filter_by_view,compiled,bounds))
;
}
return (new clustermap.components.filter.t52916(filter_component,owner,filter_by_view,props,map__52914__$1,p__52905,map__52915__$1,filter_spec,compiled,bounds,components,null));
});
