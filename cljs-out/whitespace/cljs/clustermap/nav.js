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
var seq__45792_45798 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__45793_45799 = null;var count__45794_45800 = 0;var i__45795_45801 = 0;while(true){
if((i__45795_45801 < count__45794_45800))
{var vec__45796_45802 = cljs.core._nth.call(null,chunk__45793_45799,i__45795_45801);var v_45803 = cljs.core.nth.call(null,vec__45796_45802,0,null);var body_class_45804 = cljs.core.nth.call(null,vec__45796_45802,1,null);if(cljs.core._EQ_.call(null,v_45803,view))
{domina.add_class_BANG_.call(null,body,body_class_45804);
} else
{domina.remove_class_BANG_.call(null,body,body_class_45804);
}
{
var G__45805 = seq__45792_45798;
var G__45806 = chunk__45793_45799;
var G__45807 = count__45794_45800;
var G__45808 = (i__45795_45801 + 1);
seq__45792_45798 = G__45805;
chunk__45793_45799 = G__45806;
count__45794_45800 = G__45807;
i__45795_45801 = G__45808;
continue;
}
} else
{var temp__4092__auto___45809 = cljs.core.seq.call(null,seq__45792_45798);if(temp__4092__auto___45809)
{var seq__45792_45810__$1 = temp__4092__auto___45809;if(cljs.core.chunked_seq_QMARK_.call(null,seq__45792_45810__$1))
{var c__4189__auto___45811 = cljs.core.chunk_first.call(null,seq__45792_45810__$1);{
var G__45812 = cljs.core.chunk_rest.call(null,seq__45792_45810__$1);
var G__45813 = c__4189__auto___45811;
var G__45814 = cljs.core.count.call(null,c__4189__auto___45811);
var G__45815 = 0;
seq__45792_45798 = G__45812;
chunk__45793_45799 = G__45813;
count__45794_45800 = G__45814;
i__45795_45801 = G__45815;
continue;
}
} else
{var vec__45797_45816 = cljs.core.first.call(null,seq__45792_45810__$1);var v_45817 = cljs.core.nth.call(null,vec__45797_45816,0,null);var body_class_45818 = cljs.core.nth.call(null,vec__45797_45816,1,null);if(cljs.core._EQ_.call(null,v_45817,view))
{domina.add_class_BANG_.call(null,body,body_class_45818);
} else
{domina.remove_class_BANG_.call(null,body,body_class_45818);
}
{
var G__45819 = cljs.core.next.call(null,seq__45792_45810__$1);
var G__45820 = null;
var G__45821 = 0;
var G__45822 = 0;
seq__45792_45798 = G__45819;
chunk__45793_45799 = G__45820;
count__45794_45800 = G__45821;
i__45795_45801 = G__45822;
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
clustermap.nav.handle_view_switches = (function handle_view_switches(comm){var seq__45829 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__45830 = null;var count__45831 = 0;var i__45832 = 0;while(true){
if((i__45832 < count__45831))
{var vec__45833 = cljs.core._nth.call(null,chunk__45830,i__45832);var v = cljs.core.nth.call(null,vec__45833,0,null);var _ = cljs.core.nth.call(null,vec__45833,1,null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,[cljs.core.str("#nav ."),cljs.core.str(v),cljs.core.str(" > a")].join('')),new cljs.core.Keyword(null,"click","click",1108654330),((function (seq__45829,chunk__45830,count__45831,i__45832,vec__45833,v,_){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",3608283668),v], null));
});})(seq__45829,chunk__45830,count__45831,i__45832,vec__45833,v,_))
);
{
var G__45835 = seq__45829;
var G__45836 = chunk__45830;
var G__45837 = count__45831;
var G__45838 = (i__45832 + 1);
seq__45829 = G__45835;
chunk__45830 = G__45836;
count__45831 = G__45837;
i__45832 = G__45838;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__45829);if(temp__4092__auto__)
{var seq__45829__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__45829__$1))
{var c__4189__auto__ = cljs.core.chunk_first.call(null,seq__45829__$1);{
var G__45839 = cljs.core.chunk_rest.call(null,seq__45829__$1);
var G__45840 = c__4189__auto__;
var G__45841 = cljs.core.count.call(null,c__4189__auto__);
var G__45842 = 0;
seq__45829 = G__45839;
chunk__45830 = G__45840;
count__45831 = G__45841;
i__45832 = G__45842;
continue;
}
} else
{var vec__45834 = cljs.core.first.call(null,seq__45829__$1);var v = cljs.core.nth.call(null,vec__45834,0,null);var _ = cljs.core.nth.call(null,vec__45834,1,null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,[cljs.core.str("#nav ."),cljs.core.str(v),cljs.core.str(" > a")].join('')),new cljs.core.Keyword(null,"click","click",1108654330),((function (seq__45829,chunk__45830,count__45831,i__45832,vec__45834,v,_,seq__45829__$1,temp__4092__auto__){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",3608283668),v], null));
});})(seq__45829,chunk__45830,count__45831,i__45832,vec__45834,v,_,seq__45829__$1,temp__4092__auto__))
);
{
var G__45843 = cljs.core.next.call(null,seq__45829__$1);
var G__45844 = null;
var G__45845 = 0;
var G__45846 = 0;
seq__45829 = G__45843;
chunk__45830 = G__45844;
count__45831 = G__45845;
i__45832 = G__45846;
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
