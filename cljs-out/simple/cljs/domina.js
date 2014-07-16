// Compiled by ClojureScript 0.0-2261
goog.provide('domina');
goog.require('cljs.core');
goog.require('goog.dom.forms');
goog.require('goog.dom');
goog.require('goog.dom.classes');
goog.require('goog.dom.xml');
goog.require('goog.dom');
goog.require('goog.dom.classes');
goog.require('goog.dom.forms');
goog.require('goog.string');
goog.require('cljs.core');
goog.require('domina.support');
goog.require('goog.events');
goog.require('goog.string');
goog.require('domina.support');
goog.require('goog.style');
goog.require('goog.style');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('goog.events');
goog.require('goog.dom.xml');
goog.require('cljs.core');
domina.re_html = /<|&#?\w+;/;
domina.re_leading_whitespace = /^\s+/;
domina.re_xhtml_tag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/i;
domina.re_tag_name = /<([\w:]+)/;
domina.re_no_inner_html = /<(?:script|style)/i;
domina.re_tbody = /<tbody/i;
var opt_wrapper_30540 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_30541 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<table>","</table>"], null);var cell_wrapper_30542 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["td","optgroup","tfoot","tr","area",new cljs.core.Keyword(null,"default","default",-1987822328),"option","legend","thead","col","caption","th","colgroup","tbody"],[cell_wrapper_30542,opt_wrapper_30540,table_section_wrapper_30541,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody>","</tbody></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<map>","</map>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"",""], null),opt_wrapper_30540,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<fieldset>","</fieldset>"], null),table_section_wrapper_30541,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),table_section_wrapper_30541,cell_wrapper_30542,table_section_wrapper_30541,table_section_wrapper_30541]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3531__auto__ = div.firstChild;if(cljs.core.truth_(and__3531__auto__))
{return div.firstChild.childNodes;
} else
{return and__3531__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__30547 = cljs.core.seq.call(null,tbody);var chunk__30548 = null;var count__30549 = (0);var i__30550 = (0);while(true){
if((i__30550 < count__30549))
{var child = cljs.core._nth.call(null,chunk__30548,i__30550);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0))))
{child.parentNode.removeChild(child);
} else
{}
{
var G__30551 = seq__30547;
var G__30552 = chunk__30548;
var G__30553 = count__30549;
var G__30554 = (i__30550 + (1));
seq__30547 = G__30551;
chunk__30548 = G__30552;
count__30549 = G__30553;
i__30550 = G__30554;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__30547);if(temp__4126__auto__)
{var seq__30547__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__30547__$1))
{var c__4299__auto__ = cljs.core.chunk_first.call(null,seq__30547__$1);{
var G__30555 = cljs.core.chunk_rest.call(null,seq__30547__$1);
var G__30556 = c__4299__auto__;
var G__30557 = cljs.core.count.call(null,c__4299__auto__);
var G__30558 = (0);
seq__30547 = G__30555;
chunk__30548 = G__30556;
count__30549 = G__30557;
i__30550 = G__30558;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__30547__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0))))
{child.parentNode.removeChild(child);
} else
{}
{
var G__30559 = cljs.core.next.call(null,seq__30547__$1);
var G__30560 = null;
var G__30561 = (0);
var G__30562 = (0);
seq__30547 = G__30559;
chunk__30548 = G__30560;
count__30549 = G__30561;
i__30550 = G__30562;
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
domina.restore_leading_whitespace_BANG_ = (function restore_leading_whitespace_BANG_(div,html){return div.insertBefore(document.createTextNode(cljs.core.first.call(null,cljs.core.re_find.call(null,domina.re_leading_whitespace,html))),div.firstChild);
});
/**
* takes an string of html and returns a NodeList of dom fragments
*/
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))).toLowerCase();var vec__30564 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__30564,(0),null);var start_wrap = cljs.core.nth.call(null,vec__30564,(1),null);var end_wrap = cljs.core.nth.call(null,vec__30564,(2),null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(start_wrap)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(html__$1)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(end_wrap));
return div;
})();var level = depth;while(true){
if((level > (0)))
{{
var G__30565 = wrapper.lastChild;
var G__30566 = (level - (1));
wrapper = G__30565;
level = G__30566;
continue;
}
} else
{return wrapper;
}
break;
}
})();if(cljs.core.truth_(domina.support.extraneous_tbody_QMARK_))
{domina.remove_extraneous_tbody_BANG_.call(null,div,html__$1,tag_name,start_wrap);
} else
{}
if(cljs.core.truth_((function (){var and__3531__auto__ = cljs.core.not.call(null,domina.support.leading_whitespace_QMARK_);if(and__3531__auto__)
{return cljs.core.re_find.call(null,domina.re_leading_whitespace,html__$1);
} else
{return and__3531__auto__;
}
})()))
{domina.restore_leading_whitespace_BANG_.call(null,div,html__$1);
} else
{}
return div.childNodes;
});
domina.string_to_dom = (function string_to_dom(s){if(cljs.core.truth_(cljs.core.re_find.call(null,domina.re_html,s)))
{return domina.html_to_dom.call(null,s);
} else
{return document.createTextNode(s);
}
});
domina.DomContent = (function (){var obj30568 = {};return obj30568;
})();
domina.nodes = (function nodes(content){if((function (){var and__3531__auto__ = content;if(and__3531__auto__)
{return content.domina$DomContent$nodes$arity$1;
} else
{return and__3531__auto__;
}
})())
{return content.domina$DomContent$nodes$arity$1(content);
} else
{var x__4170__auto__ = (((content == null))?null:content);return (function (){var or__3543__auto__ = (domina.nodes[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (domina.nodes["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){if((function (){var and__3531__auto__ = nodeseq;if(and__3531__auto__)
{return nodeseq.domina$DomContent$single_node$arity$1;
} else
{return and__3531__auto__;
}
})())
{return nodeseq.domina$DomContent$single_node$arity$1(nodeseq);
} else
{var x__4170__auto__ = (((nodeseq == null))?null:nodeseq);return (function (){var or__3543__auto__ = (domina.single_node[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (domina.single_node["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.single-node",nodeseq);
}
}
})().call(null,nodeseq);
}
});
domina._STAR_debug_STAR_ = true;
/**
* @param {...*} var_args
*/
domina.log_debug = (function() { 
var log_debug__delegate = function (mesg){if(cljs.core.truth_((function (){var and__3531__auto__ = domina._STAR_debug_STAR_;if(cljs.core.truth_(and__3531__auto__))
{return !(cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__3531__auto__;
}
})()))
{return console.log(cljs.core.apply.call(null,cljs.core.str,mesg));
} else
{return null;
}
};
var log_debug = function (var_args){
var mesg = null;if (arguments.length > 0) {
  mesg = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return log_debug__delegate.call(this,mesg);};
log_debug.cljs$lang$maxFixedArity = 0;
log_debug.cljs$lang$applyTo = (function (arglist__30569){
var mesg = cljs.core.seq(arglist__30569);
return log_debug__delegate(mesg);
});
log_debug.cljs$core$IFn$_invoke$arity$variadic = log_debug__delegate;
return log_debug;
})()
;
/**
* @param {...*} var_args
*/
domina.log = (function() { 
var log__delegate = function (mesg){if(cljs.core.truth_(window.console))
{return console.log(cljs.core.apply.call(null,cljs.core.str,mesg));
} else
{return null;
}
};
var log = function (var_args){
var mesg = null;if (arguments.length > 0) {
  mesg = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return log__delegate.call(this,mesg);};
log.cljs$lang$maxFixedArity = 0;
log.cljs$lang$applyTo = (function (arglist__30570){
var mesg = cljs.core.seq(arglist__30570);
return log__delegate(mesg);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
/**
* Returns content containing a single node by looking up the given ID
*/
domina.by_id = (function by_id(id){return goog.dom.getElement(cljs.core.name.call(null,id));
});
/**
* Returns content containing nodes which have the specified CSS class.
*/
domina.by_class = (function by_class(class_name){return domina.normalize_seq.call(null,goog.dom.getElementsByClass(cljs.core.name.call(null,class_name)));
});
/**
* Gets all the child nodes of the elements in a content. Same as (xpath content '*') but more efficient.
*/
domina.children = (function children(content){return cljs.core.doall.call(null,cljs.core.mapcat.call(null,goog.dom.getChildren,domina.nodes.call(null,content)));
});
/**
* Returns the deepest common ancestor of the argument contents (which are presumed to be single nodes), or nil if they are from different documents.
* @param {...*} var_args
*/
domina.common_ancestor = (function() { 
var common_ancestor__delegate = function (contents){return cljs.core.apply.call(null,goog.dom.findCommonAncestor,cljs.core.map.call(null,domina.single_node,contents));
};
var common_ancestor = function (var_args){
var contents = null;if (arguments.length > 0) {
  contents = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return common_ancestor__delegate.call(this,contents);};
common_ancestor.cljs$lang$maxFixedArity = 0;
common_ancestor.cljs$lang$applyTo = (function (arglist__30571){
var contents = cljs.core.seq(arglist__30571);
return common_ancestor__delegate(contents);
});
common_ancestor.cljs$core$IFn$_invoke$arity$variadic = common_ancestor__delegate;
return common_ancestor;
})()
;
/**
* Returns true if the first argument is an ancestor of the second argument. Presumes both arguments are single-node contents.
*/
domina.ancestor_QMARK_ = (function ancestor_QMARK_(ancestor_content,descendant_content){return cljs.core._EQ_.call(null,domina.common_ancestor.call(null,ancestor_content,descendant_content),domina.single_node.call(null,ancestor_content));
});
/**
* Returns a deep clone of content.
*/
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__30572_SHARP_){return p1__30572_SHARP_.cloneNode(true);
}),domina.nodes.call(null,content));
});
/**
* Given a parent and child contents, appends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.append_BANG_ = (function append_BANG_(parent_content,child_content){domina.apply_with_cloning.call(null,goog.dom.appendChild,parent_content,child_content);
return parent_content;
});
/**
* Given a parent and child contents, appends each of the children to all of the parents at the specified index. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__30573_SHARP_,p2__30574_SHARP_){return goog.dom.insertChildAt(p1__30573_SHARP_,p2__30574_SHARP_,idx);
}),parent_content,child_content);
return parent_content;
});
/**
* Given a parent and child contents, prepends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.prepend_BANG_ = (function prepend_BANG_(parent_content,child_content){domina.insert_BANG_.call(null,parent_content,child_content,(0));
return parent_content;
});
/**
* Given a content and some new content, inserts the new content immediately before the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__30576_SHARP_,p2__30575_SHARP_){return goog.dom.insertSiblingBefore(p2__30575_SHARP_,p1__30576_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__30578_SHARP_,p2__30577_SHARP_){return goog.dom.insertSiblingAfter(p2__30577_SHARP_,p1__30578_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__30580_SHARP_,p2__30579_SHARP_){return goog.dom.replaceNode(p2__30579_SHARP_,p1__30580_SHARP_);
}),old_content,new_content);
return old_content;
});
/**
* Removes all the nodes in a content from the DOM and returns them.
*/
domina.detach_BANG_ = (function detach_BANG_(content){return cljs.core.doall.call(null,cljs.core.map.call(null,goog.dom.removeNode,domina.nodes.call(null,content)));
});
/**
* Removes all the nodes in a content from the DOM. Returns nil.
*/
domina.destroy_BANG_ = (function destroy_BANG_(content){return cljs.core.dorun.call(null,cljs.core.map.call(null,goog.dom.removeNode,domina.nodes.call(null,content)));
});
/**
* Removes all the child nodes in a content from the DOM. Returns the original content.
*/
domina.destroy_children_BANG_ = (function destroy_children_BANG_(content){cljs.core.dorun.call(null,cljs.core.map.call(null,goog.dom.removeChildren,domina.nodes.call(null,content)));
return content;
});
/**
* Gets the value of a CSS property. Assumes content will be a single node. Name may be a string or keyword. Returns nil if there is no value set for the style.
*/
domina.style = (function style(content,name){var s = goog.style.getStyle(domina.single_node.call(null,content),cljs.core.name.call(null,name));if(cljs.core.truth_(clojure.string.blank_QMARK_.call(null,s)))
{return null;
} else
{return s;
}
});
/**
* Gets the value of an HTML attribute. Assumes content will be a single node. Name may be a stirng or keyword. Returns nil if there is no value set for the style.
*/
domina.attr = (function attr(content,name){return domina.single_node.call(null,content).getAttribute(cljs.core.name.call(null,name));
});
/**
* Sets the value of a CSS property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
* @param {...*} var_args
*/
domina.set_style_BANG_ = (function() { 
var set_style_BANG___delegate = function (content,name,value){var seq__30585_30589 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__30586_30590 = null;var count__30587_30591 = (0);var i__30588_30592 = (0);while(true){
if((i__30588_30592 < count__30587_30591))
{var n_30593 = cljs.core._nth.call(null,chunk__30586_30590,i__30588_30592);goog.style.setStyle(n_30593,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__30594 = seq__30585_30589;
var G__30595 = chunk__30586_30590;
var G__30596 = count__30587_30591;
var G__30597 = (i__30588_30592 + (1));
seq__30585_30589 = G__30594;
chunk__30586_30590 = G__30595;
count__30587_30591 = G__30596;
i__30588_30592 = G__30597;
continue;
}
} else
{var temp__4126__auto___30598 = cljs.core.seq.call(null,seq__30585_30589);if(temp__4126__auto___30598)
{var seq__30585_30599__$1 = temp__4126__auto___30598;if(cljs.core.chunked_seq_QMARK_.call(null,seq__30585_30599__$1))
{var c__4299__auto___30600 = cljs.core.chunk_first.call(null,seq__30585_30599__$1);{
var G__30601 = cljs.core.chunk_rest.call(null,seq__30585_30599__$1);
var G__30602 = c__4299__auto___30600;
var G__30603 = cljs.core.count.call(null,c__4299__auto___30600);
var G__30604 = (0);
seq__30585_30589 = G__30601;
chunk__30586_30590 = G__30602;
count__30587_30591 = G__30603;
i__30588_30592 = G__30604;
continue;
}
} else
{var n_30605 = cljs.core.first.call(null,seq__30585_30599__$1);goog.style.setStyle(n_30605,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__30606 = cljs.core.next.call(null,seq__30585_30599__$1);
var G__30607 = null;
var G__30608 = (0);
var G__30609 = (0);
seq__30585_30589 = G__30606;
chunk__30586_30590 = G__30607;
count__30587_30591 = G__30608;
i__30588_30592 = G__30609;
continue;
}
}
} else
{}
}
break;
}
return content;
};
var set_style_BANG_ = function (content,name,var_args){
var value = null;if (arguments.length > 2) {
  value = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return set_style_BANG___delegate.call(this,content,name,value);};
set_style_BANG_.cljs$lang$maxFixedArity = 2;
set_style_BANG_.cljs$lang$applyTo = (function (arglist__30610){
var content = cljs.core.first(arglist__30610);
arglist__30610 = cljs.core.next(arglist__30610);
var name = cljs.core.first(arglist__30610);
var value = cljs.core.rest(arglist__30610);
return set_style_BANG___delegate(content,name,value);
});
set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_style_BANG___delegate;
return set_style_BANG_;
})()
;
/**
* Sets the value of an HTML property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
* @param {...*} var_args
*/
domina.set_attr_BANG_ = (function() { 
var set_attr_BANG___delegate = function (content,name,value){var seq__30615_30619 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__30616_30620 = null;var count__30617_30621 = (0);var i__30618_30622 = (0);while(true){
if((i__30618_30622 < count__30617_30621))
{var n_30623 = cljs.core._nth.call(null,chunk__30616_30620,i__30618_30622);n_30623.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__30624 = seq__30615_30619;
var G__30625 = chunk__30616_30620;
var G__30626 = count__30617_30621;
var G__30627 = (i__30618_30622 + (1));
seq__30615_30619 = G__30624;
chunk__30616_30620 = G__30625;
count__30617_30621 = G__30626;
i__30618_30622 = G__30627;
continue;
}
} else
{var temp__4126__auto___30628 = cljs.core.seq.call(null,seq__30615_30619);if(temp__4126__auto___30628)
{var seq__30615_30629__$1 = temp__4126__auto___30628;if(cljs.core.chunked_seq_QMARK_.call(null,seq__30615_30629__$1))
{var c__4299__auto___30630 = cljs.core.chunk_first.call(null,seq__30615_30629__$1);{
var G__30631 = cljs.core.chunk_rest.call(null,seq__30615_30629__$1);
var G__30632 = c__4299__auto___30630;
var G__30633 = cljs.core.count.call(null,c__4299__auto___30630);
var G__30634 = (0);
seq__30615_30619 = G__30631;
chunk__30616_30620 = G__30632;
count__30617_30621 = G__30633;
i__30618_30622 = G__30634;
continue;
}
} else
{var n_30635 = cljs.core.first.call(null,seq__30615_30629__$1);n_30635.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__30636 = cljs.core.next.call(null,seq__30615_30629__$1);
var G__30637 = null;
var G__30638 = (0);
var G__30639 = (0);
seq__30615_30619 = G__30636;
chunk__30616_30620 = G__30637;
count__30617_30621 = G__30638;
i__30618_30622 = G__30639;
continue;
}
}
} else
{}
}
break;
}
return content;
};
var set_attr_BANG_ = function (content,name,var_args){
var value = null;if (arguments.length > 2) {
  value = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return set_attr_BANG___delegate.call(this,content,name,value);};
set_attr_BANG_.cljs$lang$maxFixedArity = 2;
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__30640){
var content = cljs.core.first(arglist__30640);
arglist__30640 = cljs.core.next(arglist__30640);
var name = cljs.core.first(arglist__30640);
var value = cljs.core.rest(arglist__30640);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__30645_30649 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__30646_30650 = null;var count__30647_30651 = (0);var i__30648_30652 = (0);while(true){
if((i__30648_30652 < count__30647_30651))
{var n_30653 = cljs.core._nth.call(null,chunk__30646_30650,i__30648_30652);n_30653.removeAttribute(cljs.core.name.call(null,name));
{
var G__30654 = seq__30645_30649;
var G__30655 = chunk__30646_30650;
var G__30656 = count__30647_30651;
var G__30657 = (i__30648_30652 + (1));
seq__30645_30649 = G__30654;
chunk__30646_30650 = G__30655;
count__30647_30651 = G__30656;
i__30648_30652 = G__30657;
continue;
}
} else
{var temp__4126__auto___30658 = cljs.core.seq.call(null,seq__30645_30649);if(temp__4126__auto___30658)
{var seq__30645_30659__$1 = temp__4126__auto___30658;if(cljs.core.chunked_seq_QMARK_.call(null,seq__30645_30659__$1))
{var c__4299__auto___30660 = cljs.core.chunk_first.call(null,seq__30645_30659__$1);{
var G__30661 = cljs.core.chunk_rest.call(null,seq__30645_30659__$1);
var G__30662 = c__4299__auto___30660;
var G__30663 = cljs.core.count.call(null,c__4299__auto___30660);
var G__30664 = (0);
seq__30645_30649 = G__30661;
chunk__30646_30650 = G__30662;
count__30647_30651 = G__30663;
i__30648_30652 = G__30664;
continue;
}
} else
{var n_30665 = cljs.core.first.call(null,seq__30645_30659__$1);n_30665.removeAttribute(cljs.core.name.call(null,name));
{
var G__30666 = cljs.core.next.call(null,seq__30645_30659__$1);
var G__30667 = null;
var G__30668 = (0);
var G__30669 = (0);
seq__30645_30649 = G__30666;
chunk__30646_30650 = G__30667;
count__30647_30651 = G__30668;
i__30648_30652 = G__30669;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Parses a CSS style string and returns the properties as a map.
*/
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__30671 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__30671,(0),null);var v = cljs.core.nth.call(null,vec__30671,(1),null);if(cljs.core.truth_((function (){var and__3531__auto__ = k;if(cljs.core.truth_(and__3531__auto__))
{return v;
} else
{return and__3531__auto__;
}
})()))
{return cljs.core.assoc.call(null,acc,cljs.core.keyword.call(null,k.toLowerCase()),v);
} else
{return acc;
}
}),cljs.core.PersistentArrayMap.EMPTY,style.split(/\s*;\s*/));
});
/**
* Returns a map of the CSS styles/values. Assumes content will be a single node. Style names are returned as keywords.
*/
domina.styles = (function styles(content){var style = domina.attr.call(null,content,"style");if(typeof style === 'string')
{return domina.parse_style_attributes.call(null,style);
} else
{if((style == null))
{return cljs.core.PersistentArrayMap.EMPTY;
} else
{if(cljs.core.truth_(style.cssText))
{return domina.parse_style_attributes.call(null,style.cssText);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{return cljs.core.PersistentArrayMap.EMPTY;
} else
{return null;
}
}
}
}
});
/**
* Returns a map of the HTML attributes/values. Assumes content will be a single node. Attribute names are returned as keywords.
*/
domina.attrs = (function attrs(content){var node = domina.single_node.call(null,content);var attrs__$1 = node.attributes;return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,((function (node,attrs__$1){
return (function (p1__30672_SHARP_){var attr = attrs__$1.item(p1__30672_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.call(null,attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
});})(node,attrs__$1))
,cljs.core.range.call(null,attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__30679_30685 = cljs.core.seq.call(null,styles);var chunk__30680_30686 = null;var count__30681_30687 = (0);var i__30682_30688 = (0);while(true){
if((i__30682_30688 < count__30681_30687))
{var vec__30683_30689 = cljs.core._nth.call(null,chunk__30680_30686,i__30682_30688);var name_30690 = cljs.core.nth.call(null,vec__30683_30689,(0),null);var value_30691 = cljs.core.nth.call(null,vec__30683_30689,(1),null);domina.set_style_BANG_.call(null,content,name_30690,value_30691);
{
var G__30692 = seq__30679_30685;
var G__30693 = chunk__30680_30686;
var G__30694 = count__30681_30687;
var G__30695 = (i__30682_30688 + (1));
seq__30679_30685 = G__30692;
chunk__30680_30686 = G__30693;
count__30681_30687 = G__30694;
i__30682_30688 = G__30695;
continue;
}
} else
{var temp__4126__auto___30696 = cljs.core.seq.call(null,seq__30679_30685);if(temp__4126__auto___30696)
{var seq__30679_30697__$1 = temp__4126__auto___30696;if(cljs.core.chunked_seq_QMARK_.call(null,seq__30679_30697__$1))
{var c__4299__auto___30698 = cljs.core.chunk_first.call(null,seq__30679_30697__$1);{
var G__30699 = cljs.core.chunk_rest.call(null,seq__30679_30697__$1);
var G__30700 = c__4299__auto___30698;
var G__30701 = cljs.core.count.call(null,c__4299__auto___30698);
var G__30702 = (0);
seq__30679_30685 = G__30699;
chunk__30680_30686 = G__30700;
count__30681_30687 = G__30701;
i__30682_30688 = G__30702;
continue;
}
} else
{var vec__30684_30703 = cljs.core.first.call(null,seq__30679_30697__$1);var name_30704 = cljs.core.nth.call(null,vec__30684_30703,(0),null);var value_30705 = cljs.core.nth.call(null,vec__30684_30703,(1),null);domina.set_style_BANG_.call(null,content,name_30704,value_30705);
{
var G__30706 = cljs.core.next.call(null,seq__30679_30697__$1);
var G__30707 = null;
var G__30708 = (0);
var G__30709 = (0);
seq__30679_30685 = G__30706;
chunk__30680_30686 = G__30707;
count__30681_30687 = G__30708;
i__30682_30688 = G__30709;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Sets the specified attributes for each node in the content, given a map of names and values. Names may be a string or keyword. Values will be cast to a string, multiple values wil be concatenated.
*/
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__30716_30722 = cljs.core.seq.call(null,attrs);var chunk__30717_30723 = null;var count__30718_30724 = (0);var i__30719_30725 = (0);while(true){
if((i__30719_30725 < count__30718_30724))
{var vec__30720_30726 = cljs.core._nth.call(null,chunk__30717_30723,i__30719_30725);var name_30727 = cljs.core.nth.call(null,vec__30720_30726,(0),null);var value_30728 = cljs.core.nth.call(null,vec__30720_30726,(1),null);domina.set_attr_BANG_.call(null,content,name_30727,value_30728);
{
var G__30729 = seq__30716_30722;
var G__30730 = chunk__30717_30723;
var G__30731 = count__30718_30724;
var G__30732 = (i__30719_30725 + (1));
seq__30716_30722 = G__30729;
chunk__30717_30723 = G__30730;
count__30718_30724 = G__30731;
i__30719_30725 = G__30732;
continue;
}
} else
{var temp__4126__auto___30733 = cljs.core.seq.call(null,seq__30716_30722);if(temp__4126__auto___30733)
{var seq__30716_30734__$1 = temp__4126__auto___30733;if(cljs.core.chunked_seq_QMARK_.call(null,seq__30716_30734__$1))
{var c__4299__auto___30735 = cljs.core.chunk_first.call(null,seq__30716_30734__$1);{
var G__30736 = cljs.core.chunk_rest.call(null,seq__30716_30734__$1);
var G__30737 = c__4299__auto___30735;
var G__30738 = cljs.core.count.call(null,c__4299__auto___30735);
var G__30739 = (0);
seq__30716_30722 = G__30736;
chunk__30717_30723 = G__30737;
count__30718_30724 = G__30738;
i__30719_30725 = G__30739;
continue;
}
} else
{var vec__30721_30740 = cljs.core.first.call(null,seq__30716_30734__$1);var name_30741 = cljs.core.nth.call(null,vec__30721_30740,(0),null);var value_30742 = cljs.core.nth.call(null,vec__30721_30740,(1),null);domina.set_attr_BANG_.call(null,content,name_30741,value_30742);
{
var G__30743 = cljs.core.next.call(null,seq__30716_30734__$1);
var G__30744 = null;
var G__30745 = (0);
var G__30746 = (0);
seq__30716_30722 = G__30743;
chunk__30717_30723 = G__30744;
count__30718_30724 = G__30745;
i__30719_30725 = G__30746;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns true if the node has the specified CSS class. Assumes content is a single node.
*/
domina.has_class_QMARK_ = (function has_class_QMARK_(content,class$){return goog.dom.classes.has(domina.single_node.call(null,content),class$);
});
/**
* Adds the specified CSS class to each node in the content.
*/
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__30751_30755 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__30752_30756 = null;var count__30753_30757 = (0);var i__30754_30758 = (0);while(true){
if((i__30754_30758 < count__30753_30757))
{var node_30759 = cljs.core._nth.call(null,chunk__30752_30756,i__30754_30758);goog.dom.classes.add(node_30759,class$);
{
var G__30760 = seq__30751_30755;
var G__30761 = chunk__30752_30756;
var G__30762 = count__30753_30757;
var G__30763 = (i__30754_30758 + (1));
seq__30751_30755 = G__30760;
chunk__30752_30756 = G__30761;
count__30753_30757 = G__30762;
i__30754_30758 = G__30763;
continue;
}
} else
{var temp__4126__auto___30764 = cljs.core.seq.call(null,seq__30751_30755);if(temp__4126__auto___30764)
{var seq__30751_30765__$1 = temp__4126__auto___30764;if(cljs.core.chunked_seq_QMARK_.call(null,seq__30751_30765__$1))
{var c__4299__auto___30766 = cljs.core.chunk_first.call(null,seq__30751_30765__$1);{
var G__30767 = cljs.core.chunk_rest.call(null,seq__30751_30765__$1);
var G__30768 = c__4299__auto___30766;
var G__30769 = cljs.core.count.call(null,c__4299__auto___30766);
var G__30770 = (0);
seq__30751_30755 = G__30767;
chunk__30752_30756 = G__30768;
count__30753_30757 = G__30769;
i__30754_30758 = G__30770;
continue;
}
} else
{var node_30771 = cljs.core.first.call(null,seq__30751_30765__$1);goog.dom.classes.add(node_30771,class$);
{
var G__30772 = cljs.core.next.call(null,seq__30751_30765__$1);
var G__30773 = null;
var G__30774 = (0);
var G__30775 = (0);
seq__30751_30755 = G__30772;
chunk__30752_30756 = G__30773;
count__30753_30757 = G__30774;
i__30754_30758 = G__30775;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Removes the specified CSS class from each node in the content.
*/
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__30780_30784 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__30781_30785 = null;var count__30782_30786 = (0);var i__30783_30787 = (0);while(true){
if((i__30783_30787 < count__30782_30786))
{var node_30788 = cljs.core._nth.call(null,chunk__30781_30785,i__30783_30787);goog.dom.classes.remove(node_30788,class$);
{
var G__30789 = seq__30780_30784;
var G__30790 = chunk__30781_30785;
var G__30791 = count__30782_30786;
var G__30792 = (i__30783_30787 + (1));
seq__30780_30784 = G__30789;
chunk__30781_30785 = G__30790;
count__30782_30786 = G__30791;
i__30783_30787 = G__30792;
continue;
}
} else
{var temp__4126__auto___30793 = cljs.core.seq.call(null,seq__30780_30784);if(temp__4126__auto___30793)
{var seq__30780_30794__$1 = temp__4126__auto___30793;if(cljs.core.chunked_seq_QMARK_.call(null,seq__30780_30794__$1))
{var c__4299__auto___30795 = cljs.core.chunk_first.call(null,seq__30780_30794__$1);{
var G__30796 = cljs.core.chunk_rest.call(null,seq__30780_30794__$1);
var G__30797 = c__4299__auto___30795;
var G__30798 = cljs.core.count.call(null,c__4299__auto___30795);
var G__30799 = (0);
seq__30780_30784 = G__30796;
chunk__30781_30785 = G__30797;
count__30782_30786 = G__30798;
i__30783_30787 = G__30799;
continue;
}
} else
{var node_30800 = cljs.core.first.call(null,seq__30780_30794__$1);goog.dom.classes.remove(node_30800,class$);
{
var G__30801 = cljs.core.next.call(null,seq__30780_30794__$1);
var G__30802 = null;
var G__30803 = (0);
var G__30804 = (0);
seq__30780_30784 = G__30801;
chunk__30781_30785 = G__30802;
count__30782_30786 = G__30803;
i__30783_30787 = G__30804;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Toggles the specified CSS class from each node in the content.
*/
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__30809_30813 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__30810_30814 = null;var count__30811_30815 = (0);var i__30812_30816 = (0);while(true){
if((i__30812_30816 < count__30811_30815))
{var node_30817 = cljs.core._nth.call(null,chunk__30810_30814,i__30812_30816);goog.dom.classes.toggle(node_30817,class$);
{
var G__30818 = seq__30809_30813;
var G__30819 = chunk__30810_30814;
var G__30820 = count__30811_30815;
var G__30821 = (i__30812_30816 + (1));
seq__30809_30813 = G__30818;
chunk__30810_30814 = G__30819;
count__30811_30815 = G__30820;
i__30812_30816 = G__30821;
continue;
}
} else
{var temp__4126__auto___30822 = cljs.core.seq.call(null,seq__30809_30813);if(temp__4126__auto___30822)
{var seq__30809_30823__$1 = temp__4126__auto___30822;if(cljs.core.chunked_seq_QMARK_.call(null,seq__30809_30823__$1))
{var c__4299__auto___30824 = cljs.core.chunk_first.call(null,seq__30809_30823__$1);{
var G__30825 = cljs.core.chunk_rest.call(null,seq__30809_30823__$1);
var G__30826 = c__4299__auto___30824;
var G__30827 = cljs.core.count.call(null,c__4299__auto___30824);
var G__30828 = (0);
seq__30809_30813 = G__30825;
chunk__30810_30814 = G__30826;
count__30811_30815 = G__30827;
i__30812_30816 = G__30828;
continue;
}
} else
{var node_30829 = cljs.core.first.call(null,seq__30809_30823__$1);goog.dom.classes.toggle(node_30829,class$);
{
var G__30830 = cljs.core.next.call(null,seq__30809_30823__$1);
var G__30831 = null;
var G__30832 = (0);
var G__30833 = (0);
seq__30809_30813 = G__30830;
chunk__30810_30814 = G__30831;
count__30811_30815 = G__30832;
i__30812_30816 = G__30833;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns a seq of all the CSS classes currently applied to a node. Assumes content is a single node.
*/
domina.classes = (function classes(content){return cljs.core.seq.call(null,goog.dom.classes.get(domina.single_node.call(null,content)));
});
/**
* Sets the class attribute of the content nodes to classes, which can
* be either a class attribute string or a seq of classname strings.
*/
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_30842__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__30838_30843 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__30839_30844 = null;var count__30840_30845 = (0);var i__30841_30846 = (0);while(true){
if((i__30841_30846 < count__30840_30845))
{var node_30847 = cljs.core._nth.call(null,chunk__30839_30844,i__30841_30846);goog.dom.classes.set(node_30847,classes_30842__$1);
{
var G__30848 = seq__30838_30843;
var G__30849 = chunk__30839_30844;
var G__30850 = count__30840_30845;
var G__30851 = (i__30841_30846 + (1));
seq__30838_30843 = G__30848;
chunk__30839_30844 = G__30849;
count__30840_30845 = G__30850;
i__30841_30846 = G__30851;
continue;
}
} else
{var temp__4126__auto___30852 = cljs.core.seq.call(null,seq__30838_30843);if(temp__4126__auto___30852)
{var seq__30838_30853__$1 = temp__4126__auto___30852;if(cljs.core.chunked_seq_QMARK_.call(null,seq__30838_30853__$1))
{var c__4299__auto___30854 = cljs.core.chunk_first.call(null,seq__30838_30853__$1);{
var G__30855 = cljs.core.chunk_rest.call(null,seq__30838_30853__$1);
var G__30856 = c__4299__auto___30854;
var G__30857 = cljs.core.count.call(null,c__4299__auto___30854);
var G__30858 = (0);
seq__30838_30843 = G__30855;
chunk__30839_30844 = G__30856;
count__30840_30845 = G__30857;
i__30841_30846 = G__30858;
continue;
}
} else
{var node_30859 = cljs.core.first.call(null,seq__30838_30853__$1);goog.dom.classes.set(node_30859,classes_30842__$1);
{
var G__30860 = cljs.core.next.call(null,seq__30838_30853__$1);
var G__30861 = null;
var G__30862 = (0);
var G__30863 = (0);
seq__30838_30843 = G__30860;
chunk__30839_30844 = G__30861;
count__30840_30845 = G__30862;
i__30841_30846 = G__30863;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns the text of a node. Assumes content is a single node. For consistency across browsers, will always trim whitespace of the beginning and end of the returned text.
*/
domina.text = (function text(content){return goog.string.trim(goog.dom.getTextContent(domina.single_node.call(null,content)));
});
/**
* Sets the text value of all the nodes in the given content.
*/
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__30868_30872 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__30869_30873 = null;var count__30870_30874 = (0);var i__30871_30875 = (0);while(true){
if((i__30871_30875 < count__30870_30874))
{var node_30876 = cljs.core._nth.call(null,chunk__30869_30873,i__30871_30875);goog.dom.setTextContent(node_30876,value);
{
var G__30877 = seq__30868_30872;
var G__30878 = chunk__30869_30873;
var G__30879 = count__30870_30874;
var G__30880 = (i__30871_30875 + (1));
seq__30868_30872 = G__30877;
chunk__30869_30873 = G__30878;
count__30870_30874 = G__30879;
i__30871_30875 = G__30880;
continue;
}
} else
{var temp__4126__auto___30881 = cljs.core.seq.call(null,seq__30868_30872);if(temp__4126__auto___30881)
{var seq__30868_30882__$1 = temp__4126__auto___30881;if(cljs.core.chunked_seq_QMARK_.call(null,seq__30868_30882__$1))
{var c__4299__auto___30883 = cljs.core.chunk_first.call(null,seq__30868_30882__$1);{
var G__30884 = cljs.core.chunk_rest.call(null,seq__30868_30882__$1);
var G__30885 = c__4299__auto___30883;
var G__30886 = cljs.core.count.call(null,c__4299__auto___30883);
var G__30887 = (0);
seq__30868_30872 = G__30884;
chunk__30869_30873 = G__30885;
count__30870_30874 = G__30886;
i__30871_30875 = G__30887;
continue;
}
} else
{var node_30888 = cljs.core.first.call(null,seq__30868_30882__$1);goog.dom.setTextContent(node_30888,value);
{
var G__30889 = cljs.core.next.call(null,seq__30868_30882__$1);
var G__30890 = null;
var G__30891 = (0);
var G__30892 = (0);
seq__30868_30872 = G__30889;
chunk__30869_30873 = G__30890;
count__30870_30874 = G__30891;
i__30871_30875 = G__30892;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns the value of a node (presumably a form field). Assumes content is a single node.
*/
domina.value = (function value(content){return goog.dom.forms.getValue(domina.single_node.call(null,content));
});
/**
* Sets the value of all the nodes (presumably form fields) in the given content.
*/
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__30897_30901 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__30898_30902 = null;var count__30899_30903 = (0);var i__30900_30904 = (0);while(true){
if((i__30900_30904 < count__30899_30903))
{var node_30905 = cljs.core._nth.call(null,chunk__30898_30902,i__30900_30904);goog.dom.forms.setValue(node_30905,value);
{
var G__30906 = seq__30897_30901;
var G__30907 = chunk__30898_30902;
var G__30908 = count__30899_30903;
var G__30909 = (i__30900_30904 + (1));
seq__30897_30901 = G__30906;
chunk__30898_30902 = G__30907;
count__30899_30903 = G__30908;
i__30900_30904 = G__30909;
continue;
}
} else
{var temp__4126__auto___30910 = cljs.core.seq.call(null,seq__30897_30901);if(temp__4126__auto___30910)
{var seq__30897_30911__$1 = temp__4126__auto___30910;if(cljs.core.chunked_seq_QMARK_.call(null,seq__30897_30911__$1))
{var c__4299__auto___30912 = cljs.core.chunk_first.call(null,seq__30897_30911__$1);{
var G__30913 = cljs.core.chunk_rest.call(null,seq__30897_30911__$1);
var G__30914 = c__4299__auto___30912;
var G__30915 = cljs.core.count.call(null,c__4299__auto___30912);
var G__30916 = (0);
seq__30897_30901 = G__30913;
chunk__30898_30902 = G__30914;
count__30899_30903 = G__30915;
i__30900_30904 = G__30916;
continue;
}
} else
{var node_30917 = cljs.core.first.call(null,seq__30897_30911__$1);goog.dom.forms.setValue(node_30917,value);
{
var G__30918 = cljs.core.next.call(null,seq__30897_30911__$1);
var G__30919 = null;
var G__30920 = (0);
var G__30921 = (0);
seq__30897_30901 = G__30918;
chunk__30898_30902 = G__30919;
count__30899_30903 = G__30920;
i__30900_30904 = G__30921;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns the innerHTML of a node. Assumes content is a single node.
*/
domina.html = (function html(content){return domina.single_node.call(null,content).innerHTML;
});
domina.replace_children_BANG_ = (function replace_children_BANG_(content,inner_content){return domina.append_BANG_.call(null,domina.destroy_children_BANG_.call(null,content),inner_content);
});
domina.set_inner_html_BANG_ = (function set_inner_html_BANG_(content,html_string){var allows_inner_html_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_no_inner_html,html_string));var leading_whitespace_QMARK_ = cljs.core.re_find.call(null,domina.re_leading_whitespace,html_string);var tag_name = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html_string)))).toLowerCase();var special_tag_QMARK_ = cljs.core.contains_QMARK_.call(null,domina.wrap_map,tag_name);if(cljs.core.truth_((function (){var and__3531__auto__ = allows_inner_html_QMARK_;if(and__3531__auto__)
{var and__3531__auto____$1 = (function (){var or__3543__auto__ = domina.support.leading_whitespace_QMARK_;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return cljs.core.not.call(null,leading_whitespace_QMARK_);
}
})();if(cljs.core.truth_(and__3531__auto____$1))
{return !(special_tag_QMARK_);
} else
{return and__3531__auto____$1;
}
} else
{return and__3531__auto__;
}
})()))
{var value_30932 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__30928_30933 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__30929_30934 = null;var count__30930_30935 = (0);var i__30931_30936 = (0);while(true){
if((i__30931_30936 < count__30930_30935))
{var node_30937 = cljs.core._nth.call(null,chunk__30929_30934,i__30931_30936);node_30937.innerHTML = value_30932;
{
var G__30938 = seq__30928_30933;
var G__30939 = chunk__30929_30934;
var G__30940 = count__30930_30935;
var G__30941 = (i__30931_30936 + (1));
seq__30928_30933 = G__30938;
chunk__30929_30934 = G__30939;
count__30930_30935 = G__30940;
i__30931_30936 = G__30941;
continue;
}
} else
{var temp__4126__auto___30942 = cljs.core.seq.call(null,seq__30928_30933);if(temp__4126__auto___30942)
{var seq__30928_30943__$1 = temp__4126__auto___30942;if(cljs.core.chunked_seq_QMARK_.call(null,seq__30928_30943__$1))
{var c__4299__auto___30944 = cljs.core.chunk_first.call(null,seq__30928_30943__$1);{
var G__30945 = cljs.core.chunk_rest.call(null,seq__30928_30943__$1);
var G__30946 = c__4299__auto___30944;
var G__30947 = cljs.core.count.call(null,c__4299__auto___30944);
var G__30948 = (0);
seq__30928_30933 = G__30945;
chunk__30929_30934 = G__30946;
count__30930_30935 = G__30947;
i__30931_30936 = G__30948;
continue;
}
} else
{var node_30949 = cljs.core.first.call(null,seq__30928_30943__$1);node_30949.innerHTML = value_30932;
{
var G__30950 = cljs.core.next.call(null,seq__30928_30943__$1);
var G__30951 = null;
var G__30952 = (0);
var G__30953 = (0);
seq__30928_30933 = G__30950;
chunk__30929_30934 = G__30951;
count__30930_30935 = G__30952;
i__30931_30936 = G__30953;
continue;
}
}
} else
{}
}
break;
}
}catch (e30927){if((e30927 instanceof Error))
{var e_30954 = e30927;domina.replace_children_BANG_.call(null,content,value_30932);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e30927;
} else
{}
}
}} else
{domina.replace_children_BANG_.call(null,content,html_string);
}
return content;
});
/**
* Sets the innerHTML value for all the nodes in the given content.
*/
domina.set_html_BANG_ = (function set_html_BANG_(content,inner_content){if(typeof inner_content === 'string')
{return domina.set_inner_html_BANG_.call(null,content,inner_content);
} else
{return domina.replace_children_BANG_.call(null,content,inner_content);
}
});
/**
* Returns data associated with a node for a given key. Assumes
* content is a single node. If the bubble parameter is set to true,
* will search parent nodes if the key is not found.
*/
domina.get_data = (function() {
var get_data = null;
var get_data__2 = (function (node,key){return get_data.call(null,node,key,false);
});
var get_data__3 = (function (node,key,bubble){var m = domina.single_node.call(null,node).__domina_data;var value = (cljs.core.truth_(m)?cljs.core.get.call(null,m,key):null);if(cljs.core.truth_((function (){var and__3531__auto__ = bubble;if(cljs.core.truth_(and__3531__auto__))
{return (value == null);
} else
{return and__3531__auto__;
}
})()))
{var temp__4126__auto__ = domina.single_node.call(null,node).parentNode;if(cljs.core.truth_(temp__4126__auto__))
{var parent = temp__4126__auto__;return get_data.call(null,parent,key,true);
} else
{return null;
}
} else
{return value;
}
});
get_data = function(node,key,bubble){
switch(arguments.length){
case 2:
return get_data__2.call(this,node,key);
case 3:
return get_data__3.call(this,node,key,bubble);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_data.cljs$core$IFn$_invoke$arity$2 = get_data__2;
get_data.cljs$core$IFn$_invoke$arity$3 = get_data__3;
return get_data;
})()
;
/**
* Sets a data on the node for a given key. Assumes content is a
* single node. Data should be ClojureScript values and data structures
* only; using other objects as data may result in memory leaks on some
* browsers.
*/
domina.set_data_BANG_ = (function set_data_BANG_(node,key,value){var m = (function (){var or__3543__auto__ = domina.single_node.call(null,node).__domina_data;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
})();return domina.single_node.call(null,node).__domina_data = cljs.core.assoc.call(null,m,key,value);
});
/**
* Takes a two-arg function, a reference DomContent and new
* DomContent. Applies the function for each reference / content
* combination. Uses clones of the new content for each additional
* parent after the first.
*/
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__30961_30965 = cljs.core.seq.call(null,children);var chunk__30962_30966 = null;var count__30963_30967 = (0);var i__30964_30968 = (0);while(true){
if((i__30964_30968 < count__30963_30967))
{var child_30969 = cljs.core._nth.call(null,chunk__30962_30966,i__30964_30968);frag.appendChild(child_30969);
{
var G__30970 = seq__30961_30965;
var G__30971 = chunk__30962_30966;
var G__30972 = count__30963_30967;
var G__30973 = (i__30964_30968 + (1));
seq__30961_30965 = G__30970;
chunk__30962_30966 = G__30971;
count__30963_30967 = G__30972;
i__30964_30968 = G__30973;
continue;
}
} else
{var temp__4126__auto___30974 = cljs.core.seq.call(null,seq__30961_30965);if(temp__4126__auto___30974)
{var seq__30961_30975__$1 = temp__4126__auto___30974;if(cljs.core.chunked_seq_QMARK_.call(null,seq__30961_30975__$1))
{var c__4299__auto___30976 = cljs.core.chunk_first.call(null,seq__30961_30975__$1);{
var G__30977 = cljs.core.chunk_rest.call(null,seq__30961_30975__$1);
var G__30978 = c__4299__auto___30976;
var G__30979 = cljs.core.count.call(null,c__4299__auto___30976);
var G__30980 = (0);
seq__30961_30965 = G__30977;
chunk__30962_30966 = G__30978;
count__30963_30967 = G__30979;
i__30964_30968 = G__30980;
continue;
}
} else
{var child_30981 = cljs.core.first.call(null,seq__30961_30975__$1);frag.appendChild(child_30981);
{
var G__30982 = cljs.core.next.call(null,seq__30961_30975__$1);
var G__30983 = null;
var G__30984 = (0);
var G__30985 = (0);
seq__30961_30965 = G__30982;
chunk__30962_30966 = G__30983;
count__30963_30967 = G__30984;
i__30964_30968 = G__30985;
continue;
}
}
} else
{}
}
break;
}
return frag;
})();var other_children = cljs.core.doall.call(null,cljs.core.repeatedly.call(null,(cljs.core.count.call(null,parents) - (1)),((function (parents,children,first_child){
return (function (){return first_child.cloneNode(true);
});})(parents,children,first_child))
));if(cljs.core.seq.call(null,parents))
{f.call(null,cljs.core.first.call(null,parents),first_child);
return cljs.core.doall.call(null,cljs.core.map.call(null,((function (parents,children,first_child,other_children){
return (function (p1__30955_SHARP_,p2__30956_SHARP_){return f.call(null,p1__30955_SHARP_,p2__30956_SHARP_);
});})(parents,children,first_child,other_children))
,cljs.core.rest.call(null,parents),other_children));
} else
{return null;
}
});
domina.lazy_nl_via_item = (function() {
var lazy_nl_via_item = null;
var lazy_nl_via_item__1 = (function (nl){return lazy_nl_via_item.call(null,nl,(0));
});
var lazy_nl_via_item__2 = (function (nl,n){if((n < nl.length))
{return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons.call(null,nl.item(n),lazy_nl_via_item.call(null,nl,(n + (1))));
}),null,null));
} else
{return null;
}
});
lazy_nl_via_item = function(nl,n){
switch(arguments.length){
case 1:
return lazy_nl_via_item__1.call(this,nl);
case 2:
return lazy_nl_via_item__2.call(this,nl,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lazy_nl_via_item.cljs$core$IFn$_invoke$arity$1 = lazy_nl_via_item__1;
lazy_nl_via_item.cljs$core$IFn$_invoke$arity$2 = lazy_nl_via_item__2;
return lazy_nl_via_item;
})()
;
domina.lazy_nl_via_array_ref = (function() {
var lazy_nl_via_array_ref = null;
var lazy_nl_via_array_ref__1 = (function (nl){return lazy_nl_via_array_ref.call(null,nl,(0));
});
var lazy_nl_via_array_ref__2 = (function (nl,n){if((n < nl.length))
{return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons.call(null,(nl[n]),lazy_nl_via_array_ref.call(null,nl,(n + (1))));
}),null,null));
} else
{return null;
}
});
lazy_nl_via_array_ref = function(nl,n){
switch(arguments.length){
case 1:
return lazy_nl_via_array_ref__1.call(this,nl);
case 2:
return lazy_nl_via_array_ref__2.call(this,nl,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$1 = lazy_nl_via_array_ref__1;
lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$2 = lazy_nl_via_array_ref__2;
return lazy_nl_via_array_ref;
})()
;
/**
* A lazy seq view of a js/NodeList, or other array-like javascript things
*/
domina.lazy_nodelist = (function lazy_nodelist(nl){if(cljs.core.truth_(nl.item))
{return domina.lazy_nl_via_item.call(null,nl);
} else
{return domina.lazy_nl_via_array_ref.call(null,nl);
}
});
domina.array_like_QMARK_ = (function array_like_QMARK_(obj){var and__3531__auto__ = obj;if(cljs.core.truth_(and__3531__auto__))
{var and__3531__auto____$1 = cljs.core.not.call(null,obj.nodeName);if(and__3531__auto____$1)
{return obj.length;
} else
{return and__3531__auto____$1;
}
} else
{return and__3531__auto__;
}
});
/**
* Some versions of IE have things that are like arrays in that they
* respond to .length, but are not arrays nor NodeSets. This returns a
* real sequence view of such objects. If passed an object that is not
* a logical sequence at all, returns a single-item seq containing the
* object.
*/
domina.normalize_seq = (function normalize_seq(list_thing){if((list_thing == null))
{return cljs.core.List.EMPTY;
} else
{if((function (){var G__30987 = list_thing;if(G__30987)
{var bit__4193__auto__ = (G__30987.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4193__auto__) || (G__30987.cljs$core$ISeqable$))
{return true;
} else
{if((!G__30987.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__30987);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__30987);
}
})())
{return cljs.core.seq.call(null,list_thing);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,list_thing)))
{return domina.lazy_nodelist.call(null,list_thing);
} else
{if(new cljs.core.Keyword(null,"default","default",-1987822328))
{return cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [list_thing], null));
} else
{return null;
}
}
}
}
});
(domina.DomContent["_"] = true);
(domina.nodes["_"] = (function (content){if((content == null))
{return cljs.core.List.EMPTY;
} else
{if((function (){var G__30988 = content;if(G__30988)
{var bit__4193__auto__ = (G__30988.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4193__auto__) || (G__30988.cljs$core$ISeqable$))
{return true;
} else
{if((!G__30988.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__30988);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__30988);
}
})())
{return cljs.core.seq.call(null,content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content)))
{return domina.lazy_nodelist.call(null,content);
} else
{if(new cljs.core.Keyword(null,"default","default",-1987822328))
{return cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [content], null));
} else
{return null;
}
}
}
}
}));
(domina.single_node["_"] = (function (content){if((content == null))
{return null;
} else
{if((function (){var G__30989 = content;if(G__30989)
{var bit__4193__auto__ = (G__30989.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4193__auto__) || (G__30989.cljs$core$ISeqable$))
{return true;
} else
{if((!G__30989.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__30989);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__30989);
}
})())
{return cljs.core.first.call(null,content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content)))
{return content.item((0));
} else
{if(new cljs.core.Keyword(null,"default","default",-1987822328))
{return content;
} else
{return null;
}
}
}
}
}));
(domina.DomContent["string"] = true);
(domina.nodes["string"] = (function (s){return cljs.core.doall.call(null,domina.nodes.call(null,domina.string_to_dom.call(null,s)));
}));
(domina.single_node["string"] = (function (s){return domina.single_node.call(null,domina.string_to_dom.call(null,s));
}));
if(cljs.core.truth_((typeof NodeList != 'undefined')))
{NodeList.prototype.cljs$core$ISeqable$ = true;
NodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){var nodelist__$1 = this;return domina.lazy_nodelist.call(null,nodelist__$1);
});
NodeList.prototype.cljs$core$IIndexed$ = true;
NodeList.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (nodelist,n){var nodelist__$1 = this;return nodelist__$1.item(n);
});
NodeList.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (nodelist,n,not_found){var nodelist__$1 = this;if((nodelist__$1.length <= n))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist__$1,n);
}
});
NodeList.prototype.cljs$core$ICounted$ = true;
NodeList.prototype.cljs$core$ICounted$_count$arity$1 = (function (nodelist){var nodelist__$1 = this;return nodelist__$1.length;
});
} else
{}
if(cljs.core.truth_((typeof StaticNodeList != 'undefined')))
{StaticNodeList.prototype.cljs$core$ISeqable$ = true;
StaticNodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){var nodelist__$1 = this;return domina.lazy_nodelist.call(null,nodelist__$1);
});
StaticNodeList.prototype.cljs$core$IIndexed$ = true;
StaticNodeList.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (nodelist,n){var nodelist__$1 = this;return nodelist__$1.item(n);
});
StaticNodeList.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (nodelist,n,not_found){var nodelist__$1 = this;if((nodelist__$1.length <= n))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist__$1,n);
}
});
StaticNodeList.prototype.cljs$core$ICounted$ = true;
StaticNodeList.prototype.cljs$core$ICounted$_count$arity$1 = (function (nodelist){var nodelist__$1 = this;return nodelist__$1.length;
});
} else
{}
if(cljs.core.truth_((typeof HTMLCollection != 'undefined')))
{HTMLCollection.prototype.cljs$core$ISeqable$ = true;
HTMLCollection.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){var coll__$1 = this;return domina.lazy_nodelist.call(null,coll__$1);
});
HTMLCollection.prototype.cljs$core$IIndexed$ = true;
HTMLCollection.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){var coll__$1 = this;return coll__$1.item(n);
});
HTMLCollection.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){var coll__$1 = this;if((coll__$1.length <= n))
{return not_found;
} else
{return cljs.core.nth.call(null,coll__$1,n);
}
});
HTMLCollection.prototype.cljs$core$ICounted$ = true;
HTMLCollection.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){var coll__$1 = this;return coll__$1.length;
});
} else
{}
