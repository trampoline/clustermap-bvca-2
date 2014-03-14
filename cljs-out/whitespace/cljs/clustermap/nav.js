// Compiled by ClojureScript 0.0-2173
goog.provide('clustermap.nav');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('jayq.core');
goog.require('domina.events');
goog.require('domina.events');
goog.require('domina');
goog.require('domina.xpath');
goog.require('jayq.core');
goog.require('domina');
goog.require('domina.css');
goog.require('cljs.core.async');
goog.require('domina.css');
goog.require('domina.xpath');
goog.require('jayq.core');
clustermap.nav.init_bootstrap_tooltips = (function init_bootstrap_tooltips(){return jayq.core.$.call(null,"[data-toggle='tooltip']").tooltip();
});
clustermap.nav.handle_toggle_nav_search = (function handle_toggle_nav_search(){return domina.events.listen_BANG_.call(null,domina.css.sel.call(null,"#nav .search > a"),new cljs.core.Keyword(null,"click","click",1108654330),(function (e){var target = domina.events.target.call(null,e);var parent = domina.xpath.xpath.call(null,target,"..");domina.events.prevent_default.call(null,e);
domina.toggle_class_BANG_.call(null,parent,"open");
return jayq.core.$.call(null,cljs.core.first.call(null,domina.nodes.call(null,domina.css.sel.call(null,"#search")))).toggle();
}));
});
clustermap.nav.handle_hide_show_map_report = (function handle_hide_show_map_report(){return domina.events.listen_BANG_.call(null,domina.css.sel.call(null,"#map-report > a"),new cljs.core.Keyword(null,"click","click",1108654330),(function (e){var target = domina.events.target.call(null,e);var mr = domina.css.sel.call(null,"#map-report");domina.events.prevent_default.call(null,e);
if(cljs.core.truth_(domina.has_class_QMARK_.call(null,mr,"open")))
{domina.remove_class_BANG_.call(null,mr,"open");
return jayq.core.anim.call(null,jayq.core.$.call(null,cljs.core.first.call(null,domina.nodes.call(null,mr))),new cljs.core.PersistentArrayMap(null, 1, ["right","-270px"], null),400);
} else
{if(true)
{domina.add_class_BANG_.call(null,mr,"open");
return jayq.core.anim.call(null,jayq.core.$.call(null,cljs.core.first.call(null,domina.nodes.call(null,mr))),new cljs.core.PersistentArrayMap(null, 1, ["right","0px"], null),400);
} else
{return null;
}
}
}));
});
clustermap.nav.body_view_classes = new cljs.core.PersistentArrayMap(null, 2, ["map","view-map","lists","view-lists"], null);
/**
* do the DOM manip to change the view
*/
clustermap.nav.change_view = (function change_view(view){if(cljs.core.truth_(cljs.core.get.call(null,clustermap.nav.body_view_classes,view)))
{} else
{throw (new Error([cljs.core.str("unknown view: "),cljs.core.str(view)].join('')));
}
var body = domina.css.sel.call(null,"body");var target_selector = [cljs.core.str("#nav ."),cljs.core.str(view)].join('');var target_li = domina.css.sel.call(null,target_selector);var ul = domina.xpath.xpath.call(null,target_li,"..");var active_li = domina.css.sel.call(null,ul,"> .active");domina.remove_class_BANG_.call(null,active_li,"active");
domina.add_class_BANG_.call(null,target_li,"active");
var seq__45808_45814 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__45809_45815 = null;var count__45810_45816 = 0;var i__45811_45817 = 0;while(true){
if((i__45811_45817 < count__45810_45816))
{var vec__45812_45818 = cljs.core._nth.call(null,chunk__45809_45815,i__45811_45817);var v_45819 = cljs.core.nth.call(null,vec__45812_45818,0,null);var body_class_45820 = cljs.core.nth.call(null,vec__45812_45818,1,null);if(cljs.core._EQ_.call(null,v_45819,view))
{domina.add_class_BANG_.call(null,body,body_class_45820);
} else
{domina.remove_class_BANG_.call(null,body,body_class_45820);
}
{
var G__45821 = seq__45808_45814;
var G__45822 = chunk__45809_45815;
var G__45823 = count__45810_45816;
var G__45824 = (i__45811_45817 + 1);
seq__45808_45814 = G__45821;
chunk__45809_45815 = G__45822;
count__45810_45816 = G__45823;
i__45811_45817 = G__45824;
continue;
}
} else
{var temp__4092__auto___45825 = cljs.core.seq.call(null,seq__45808_45814);if(temp__4092__auto___45825)
{var seq__45808_45826__$1 = temp__4092__auto___45825;if(cljs.core.chunked_seq_QMARK_.call(null,seq__45808_45826__$1))
{var c__4189__auto___45827 = cljs.core.chunk_first.call(null,seq__45808_45826__$1);{
var G__45828 = cljs.core.chunk_rest.call(null,seq__45808_45826__$1);
var G__45829 = c__4189__auto___45827;
var G__45830 = cljs.core.count.call(null,c__4189__auto___45827);
var G__45831 = 0;
seq__45808_45814 = G__45828;
chunk__45809_45815 = G__45829;
count__45810_45816 = G__45830;
i__45811_45817 = G__45831;
continue;
}
} else
{var vec__45813_45832 = cljs.core.first.call(null,seq__45808_45826__$1);var v_45833 = cljs.core.nth.call(null,vec__45813_45832,0,null);var body_class_45834 = cljs.core.nth.call(null,vec__45813_45832,1,null);if(cljs.core._EQ_.call(null,v_45833,view))
{domina.add_class_BANG_.call(null,body,body_class_45834);
} else
{domina.remove_class_BANG_.call(null,body,body_class_45834);
}
{
var G__45835 = cljs.core.next.call(null,seq__45808_45826__$1);
var G__45836 = null;
var G__45837 = 0;
var G__45838 = 0;
seq__45808_45814 = G__45835;
chunk__45809_45815 = G__45836;
count__45810_45816 = G__45837;
i__45811_45817 = G__45838;
continue;
}
}
} else
{}
}
break;
}
return jayq.core.$.call(null,document).trigger("clustermap-change-view");
});
/**
* sends [:change-view <view>] messages to the command channel
*/
clustermap.nav.handle_view_switches = (function handle_view_switches(comm){var seq__45845 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__45846 = null;var count__45847 = 0;var i__45848 = 0;while(true){
if((i__45848 < count__45847))
{var vec__45849 = cljs.core._nth.call(null,chunk__45846,i__45848);var v = cljs.core.nth.call(null,vec__45849,0,null);var _ = cljs.core.nth.call(null,vec__45849,1,null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,[cljs.core.str("#nav ."),cljs.core.str(v),cljs.core.str(" > a")].join('')),new cljs.core.Keyword(null,"click","click",1108654330),((function (seq__45845,chunk__45846,count__45847,i__45848,vec__45849,v,_){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",3608283668),v], null));
});})(seq__45845,chunk__45846,count__45847,i__45848,vec__45849,v,_))
);
{
var G__45851 = seq__45845;
var G__45852 = chunk__45846;
var G__45853 = count__45847;
var G__45854 = (i__45848 + 1);
seq__45845 = G__45851;
chunk__45846 = G__45852;
count__45847 = G__45853;
i__45848 = G__45854;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__45845);if(temp__4092__auto__)
{var seq__45845__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__45845__$1))
{var c__4189__auto__ = cljs.core.chunk_first.call(null,seq__45845__$1);{
var G__45855 = cljs.core.chunk_rest.call(null,seq__45845__$1);
var G__45856 = c__4189__auto__;
var G__45857 = cljs.core.count.call(null,c__4189__auto__);
var G__45858 = 0;
seq__45845 = G__45855;
chunk__45846 = G__45856;
count__45847 = G__45857;
i__45848 = G__45858;
continue;
}
} else
{var vec__45850 = cljs.core.first.call(null,seq__45845__$1);var v = cljs.core.nth.call(null,vec__45850,0,null);var _ = cljs.core.nth.call(null,vec__45850,1,null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,[cljs.core.str("#nav ."),cljs.core.str(v),cljs.core.str(" > a")].join('')),new cljs.core.Keyword(null,"click","click",1108654330),((function (seq__45845,chunk__45846,count__45847,i__45848,vec__45850,v,_,seq__45845__$1,temp__4092__auto__){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",3608283668),v], null));
});})(seq__45845,chunk__45846,count__45847,i__45848,vec__45850,v,_,seq__45845__$1,temp__4092__auto__))
);
{
var G__45859 = cljs.core.next.call(null,seq__45845__$1);
var G__45860 = null;
var G__45861 = 0;
var G__45862 = 0;
seq__45845 = G__45859;
chunk__45846 = G__45860;
count__45847 = G__45861;
i__45848 = G__45862;
continue;
}
}
} else
{return null;
}
}
break;
}
});
clustermap.nav.init = (function init(comm){clustermap.nav.init_bootstrap_tooltips.call(null);
clustermap.nav.handle_toggle_nav_search.call(null);
clustermap.nav.handle_hide_show_map_report.call(null);
return clustermap.nav.handle_view_switches.call(null,comm);
});
