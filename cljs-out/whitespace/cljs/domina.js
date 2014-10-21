// Compiled by ClojureScript 0.0-2322
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
var opt_wrapper_23504 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_23505 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<table>","</table>"], null);var cell_wrapper_23506 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["td","optgroup","tfoot","tr","area",new cljs.core.Keyword(null,"default","default",-1987822328),"option","legend","thead","col","caption","th","colgroup","tbody"],[cell_wrapper_23506,opt_wrapper_23504,table_section_wrapper_23505,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody>","</tbody></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<map>","</map>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"",""], null),opt_wrapper_23504,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<fieldset>","</fieldset>"], null),table_section_wrapper_23505,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),table_section_wrapper_23505,cell_wrapper_23506,table_section_wrapper_23505,table_section_wrapper_23505]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3546__auto__ = div.firstChild;if(cljs.core.truth_(and__3546__auto__))
{return div.firstChild.childNodes;
} else
{return and__3546__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?div.childNodes:cljs.core.PersistentVector.EMPTY));var seq__23511 = cljs.core.seq.call(null,tbody);var chunk__23512 = null;var count__23513 = (0);var i__23514 = (0);while(true){
if((i__23514 < count__23513))
{var child = cljs.core._nth.call(null,chunk__23512,i__23514);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0))))
{child.parentNode.removeChild(child);
} else
{}
{
var G__23515 = seq__23511;
var G__23516 = chunk__23512;
var G__23517 = count__23513;
var G__23518 = (i__23514 + (1));
seq__23511 = G__23515;
chunk__23512 = G__23516;
count__23513 = G__23517;
i__23514 = G__23518;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__23511);if(temp__4126__auto__)
{var seq__23511__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23511__$1))
{var c__4314__auto__ = cljs.core.chunk_first.call(null,seq__23511__$1);{
var G__23519 = cljs.core.chunk_rest.call(null,seq__23511__$1);
var G__23520 = c__4314__auto__;
var G__23521 = cljs.core.count.call(null,c__4314__auto__);
var G__23522 = (0);
seq__23511 = G__23519;
chunk__23512 = G__23520;
count__23513 = G__23521;
i__23514 = G__23522;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__23511__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0))))
{child.parentNode.removeChild(child);
} else
{}
{
var G__23523 = cljs.core.next.call(null,seq__23511__$1);
var G__23524 = null;
var G__23525 = (0);
var G__23526 = (0);
seq__23511 = G__23523;
chunk__23512 = G__23524;
count__23513 = G__23525;
i__23514 = G__23526;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))).toLowerCase();var vec__23528 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__23528,(0),null);var start_wrap = cljs.core.nth.call(null,vec__23528,(1),null);var end_wrap = cljs.core.nth.call(null,vec__23528,(2),null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(start_wrap)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(html__$1)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(end_wrap));
return div;
})();var level = depth;while(true){
if((level > (0)))
{{
var G__23529 = wrapper.lastChild;
var G__23530 = (level - (1));
wrapper = G__23529;
level = G__23530;
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
if(cljs.core.truth_((function (){var and__3546__auto__ = cljs.core.not.call(null,domina.support.leading_whitespace_QMARK_);if(and__3546__auto__)
{return cljs.core.re_find.call(null,domina.re_leading_whitespace,html__$1);
} else
{return and__3546__auto__;
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
domina.DomContent = (function (){var obj23532 = {};return obj23532;
})();
domina.nodes = (function nodes(content){if((function (){var and__3546__auto__ = content;if(and__3546__auto__)
{return content.domina$DomContent$nodes$arity$1;
} else
{return and__3546__auto__;
}
})())
{return content.domina$DomContent$nodes$arity$1(content);
} else
{var x__4185__auto__ = (((content == null))?null:content);return (function (){var or__3558__auto__ = (domina.nodes[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (domina.nodes["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){if((function (){var and__3546__auto__ = nodeseq;if(and__3546__auto__)
{return nodeseq.domina$DomContent$single_node$arity$1;
} else
{return and__3546__auto__;
}
})())
{return nodeseq.domina$DomContent$single_node$arity$1(nodeseq);
} else
{var x__4185__auto__ = (((nodeseq == null))?null:nodeseq);return (function (){var or__3558__auto__ = (domina.single_node[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (domina.single_node["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
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
var log_debug__delegate = function (mesg){if(cljs.core.truth_((function (){var and__3546__auto__ = domina._STAR_debug_STAR_;if(cljs.core.truth_(and__3546__auto__))
{return !(cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__3546__auto__;
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
log_debug.cljs$lang$applyTo = (function (arglist__23533){
var mesg = cljs.core.seq(arglist__23533);
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
log.cljs$lang$applyTo = (function (arglist__23534){
var mesg = cljs.core.seq(arglist__23534);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__23535){
var contents = cljs.core.seq(arglist__23535);
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
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__23536_SHARP_){return p1__23536_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__23537_SHARP_,p2__23538_SHARP_){return goog.dom.insertChildAt(p1__23537_SHARP_,p2__23538_SHARP_,idx);
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__23540_SHARP_,p2__23539_SHARP_){return goog.dom.insertSiblingBefore(p2__23539_SHARP_,p1__23540_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__23542_SHARP_,p2__23541_SHARP_){return goog.dom.insertSiblingAfter(p2__23541_SHARP_,p1__23542_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__23544_SHARP_,p2__23543_SHARP_){return goog.dom.replaceNode(p2__23543_SHARP_,p1__23544_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__23549_23553 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__23550_23554 = null;var count__23551_23555 = (0);var i__23552_23556 = (0);while(true){
if((i__23552_23556 < count__23551_23555))
{var n_23557 = cljs.core._nth.call(null,chunk__23550_23554,i__23552_23556);goog.style.setStyle(n_23557,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__23558 = seq__23549_23553;
var G__23559 = chunk__23550_23554;
var G__23560 = count__23551_23555;
var G__23561 = (i__23552_23556 + (1));
seq__23549_23553 = G__23558;
chunk__23550_23554 = G__23559;
count__23551_23555 = G__23560;
i__23552_23556 = G__23561;
continue;
}
} else
{var temp__4126__auto___23562 = cljs.core.seq.call(null,seq__23549_23553);if(temp__4126__auto___23562)
{var seq__23549_23563__$1 = temp__4126__auto___23562;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23549_23563__$1))
{var c__4314__auto___23564 = cljs.core.chunk_first.call(null,seq__23549_23563__$1);{
var G__23565 = cljs.core.chunk_rest.call(null,seq__23549_23563__$1);
var G__23566 = c__4314__auto___23564;
var G__23567 = cljs.core.count.call(null,c__4314__auto___23564);
var G__23568 = (0);
seq__23549_23553 = G__23565;
chunk__23550_23554 = G__23566;
count__23551_23555 = G__23567;
i__23552_23556 = G__23568;
continue;
}
} else
{var n_23569 = cljs.core.first.call(null,seq__23549_23563__$1);goog.style.setStyle(n_23569,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__23570 = cljs.core.next.call(null,seq__23549_23563__$1);
var G__23571 = null;
var G__23572 = (0);
var G__23573 = (0);
seq__23549_23553 = G__23570;
chunk__23550_23554 = G__23571;
count__23551_23555 = G__23572;
i__23552_23556 = G__23573;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__23574){
var content = cljs.core.first(arglist__23574);
arglist__23574 = cljs.core.next(arglist__23574);
var name = cljs.core.first(arglist__23574);
var value = cljs.core.rest(arglist__23574);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__23579_23583 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__23580_23584 = null;var count__23581_23585 = (0);var i__23582_23586 = (0);while(true){
if((i__23582_23586 < count__23581_23585))
{var n_23587 = cljs.core._nth.call(null,chunk__23580_23584,i__23582_23586);n_23587.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__23588 = seq__23579_23583;
var G__23589 = chunk__23580_23584;
var G__23590 = count__23581_23585;
var G__23591 = (i__23582_23586 + (1));
seq__23579_23583 = G__23588;
chunk__23580_23584 = G__23589;
count__23581_23585 = G__23590;
i__23582_23586 = G__23591;
continue;
}
} else
{var temp__4126__auto___23592 = cljs.core.seq.call(null,seq__23579_23583);if(temp__4126__auto___23592)
{var seq__23579_23593__$1 = temp__4126__auto___23592;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23579_23593__$1))
{var c__4314__auto___23594 = cljs.core.chunk_first.call(null,seq__23579_23593__$1);{
var G__23595 = cljs.core.chunk_rest.call(null,seq__23579_23593__$1);
var G__23596 = c__4314__auto___23594;
var G__23597 = cljs.core.count.call(null,c__4314__auto___23594);
var G__23598 = (0);
seq__23579_23583 = G__23595;
chunk__23580_23584 = G__23596;
count__23581_23585 = G__23597;
i__23582_23586 = G__23598;
continue;
}
} else
{var n_23599 = cljs.core.first.call(null,seq__23579_23593__$1);n_23599.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__23600 = cljs.core.next.call(null,seq__23579_23593__$1);
var G__23601 = null;
var G__23602 = (0);
var G__23603 = (0);
seq__23579_23583 = G__23600;
chunk__23580_23584 = G__23601;
count__23581_23585 = G__23602;
i__23582_23586 = G__23603;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__23604){
var content = cljs.core.first(arglist__23604);
arglist__23604 = cljs.core.next(arglist__23604);
var name = cljs.core.first(arglist__23604);
var value = cljs.core.rest(arglist__23604);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__23609_23613 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__23610_23614 = null;var count__23611_23615 = (0);var i__23612_23616 = (0);while(true){
if((i__23612_23616 < count__23611_23615))
{var n_23617 = cljs.core._nth.call(null,chunk__23610_23614,i__23612_23616);n_23617.removeAttribute(cljs.core.name.call(null,name));
{
var G__23618 = seq__23609_23613;
var G__23619 = chunk__23610_23614;
var G__23620 = count__23611_23615;
var G__23621 = (i__23612_23616 + (1));
seq__23609_23613 = G__23618;
chunk__23610_23614 = G__23619;
count__23611_23615 = G__23620;
i__23612_23616 = G__23621;
continue;
}
} else
{var temp__4126__auto___23622 = cljs.core.seq.call(null,seq__23609_23613);if(temp__4126__auto___23622)
{var seq__23609_23623__$1 = temp__4126__auto___23622;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23609_23623__$1))
{var c__4314__auto___23624 = cljs.core.chunk_first.call(null,seq__23609_23623__$1);{
var G__23625 = cljs.core.chunk_rest.call(null,seq__23609_23623__$1);
var G__23626 = c__4314__auto___23624;
var G__23627 = cljs.core.count.call(null,c__4314__auto___23624);
var G__23628 = (0);
seq__23609_23613 = G__23625;
chunk__23610_23614 = G__23626;
count__23611_23615 = G__23627;
i__23612_23616 = G__23628;
continue;
}
} else
{var n_23629 = cljs.core.first.call(null,seq__23609_23623__$1);n_23629.removeAttribute(cljs.core.name.call(null,name));
{
var G__23630 = cljs.core.next.call(null,seq__23609_23623__$1);
var G__23631 = null;
var G__23632 = (0);
var G__23633 = (0);
seq__23609_23613 = G__23630;
chunk__23610_23614 = G__23631;
count__23611_23615 = G__23632;
i__23612_23616 = G__23633;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__23635 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__23635,(0),null);var v = cljs.core.nth.call(null,vec__23635,(1),null);if(cljs.core.truth_((function (){var and__3546__auto__ = k;if(cljs.core.truth_(and__3546__auto__))
{return v;
} else
{return and__3546__auto__;
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
{return cljs.core.PersistentArrayMap.EMPTY;

}
}
}
});
/**
* Returns a map of the HTML attributes/values. Assumes content will be a single node. Attribute names are returned as keywords.
*/
domina.attrs = (function attrs(content){var node = domina.single_node.call(null,content);var attrs__$1 = node.attributes;return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,((function (node,attrs__$1){
return (function (p1__23636_SHARP_){var attr = attrs__$1.item(p1__23636_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
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
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__23643_23649 = cljs.core.seq.call(null,styles);var chunk__23644_23650 = null;var count__23645_23651 = (0);var i__23646_23652 = (0);while(true){
if((i__23646_23652 < count__23645_23651))
{var vec__23647_23653 = cljs.core._nth.call(null,chunk__23644_23650,i__23646_23652);var name_23654 = cljs.core.nth.call(null,vec__23647_23653,(0),null);var value_23655 = cljs.core.nth.call(null,vec__23647_23653,(1),null);domina.set_style_BANG_.call(null,content,name_23654,value_23655);
{
var G__23656 = seq__23643_23649;
var G__23657 = chunk__23644_23650;
var G__23658 = count__23645_23651;
var G__23659 = (i__23646_23652 + (1));
seq__23643_23649 = G__23656;
chunk__23644_23650 = G__23657;
count__23645_23651 = G__23658;
i__23646_23652 = G__23659;
continue;
}
} else
{var temp__4126__auto___23660 = cljs.core.seq.call(null,seq__23643_23649);if(temp__4126__auto___23660)
{var seq__23643_23661__$1 = temp__4126__auto___23660;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23643_23661__$1))
{var c__4314__auto___23662 = cljs.core.chunk_first.call(null,seq__23643_23661__$1);{
var G__23663 = cljs.core.chunk_rest.call(null,seq__23643_23661__$1);
var G__23664 = c__4314__auto___23662;
var G__23665 = cljs.core.count.call(null,c__4314__auto___23662);
var G__23666 = (0);
seq__23643_23649 = G__23663;
chunk__23644_23650 = G__23664;
count__23645_23651 = G__23665;
i__23646_23652 = G__23666;
continue;
}
} else
{var vec__23648_23667 = cljs.core.first.call(null,seq__23643_23661__$1);var name_23668 = cljs.core.nth.call(null,vec__23648_23667,(0),null);var value_23669 = cljs.core.nth.call(null,vec__23648_23667,(1),null);domina.set_style_BANG_.call(null,content,name_23668,value_23669);
{
var G__23670 = cljs.core.next.call(null,seq__23643_23661__$1);
var G__23671 = null;
var G__23672 = (0);
var G__23673 = (0);
seq__23643_23649 = G__23670;
chunk__23644_23650 = G__23671;
count__23645_23651 = G__23672;
i__23646_23652 = G__23673;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__23680_23686 = cljs.core.seq.call(null,attrs);var chunk__23681_23687 = null;var count__23682_23688 = (0);var i__23683_23689 = (0);while(true){
if((i__23683_23689 < count__23682_23688))
{var vec__23684_23690 = cljs.core._nth.call(null,chunk__23681_23687,i__23683_23689);var name_23691 = cljs.core.nth.call(null,vec__23684_23690,(0),null);var value_23692 = cljs.core.nth.call(null,vec__23684_23690,(1),null);domina.set_attr_BANG_.call(null,content,name_23691,value_23692);
{
var G__23693 = seq__23680_23686;
var G__23694 = chunk__23681_23687;
var G__23695 = count__23682_23688;
var G__23696 = (i__23683_23689 + (1));
seq__23680_23686 = G__23693;
chunk__23681_23687 = G__23694;
count__23682_23688 = G__23695;
i__23683_23689 = G__23696;
continue;
}
} else
{var temp__4126__auto___23697 = cljs.core.seq.call(null,seq__23680_23686);if(temp__4126__auto___23697)
{var seq__23680_23698__$1 = temp__4126__auto___23697;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23680_23698__$1))
{var c__4314__auto___23699 = cljs.core.chunk_first.call(null,seq__23680_23698__$1);{
var G__23700 = cljs.core.chunk_rest.call(null,seq__23680_23698__$1);
var G__23701 = c__4314__auto___23699;
var G__23702 = cljs.core.count.call(null,c__4314__auto___23699);
var G__23703 = (0);
seq__23680_23686 = G__23700;
chunk__23681_23687 = G__23701;
count__23682_23688 = G__23702;
i__23683_23689 = G__23703;
continue;
}
} else
{var vec__23685_23704 = cljs.core.first.call(null,seq__23680_23698__$1);var name_23705 = cljs.core.nth.call(null,vec__23685_23704,(0),null);var value_23706 = cljs.core.nth.call(null,vec__23685_23704,(1),null);domina.set_attr_BANG_.call(null,content,name_23705,value_23706);
{
var G__23707 = cljs.core.next.call(null,seq__23680_23698__$1);
var G__23708 = null;
var G__23709 = (0);
var G__23710 = (0);
seq__23680_23686 = G__23707;
chunk__23681_23687 = G__23708;
count__23682_23688 = G__23709;
i__23683_23689 = G__23710;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__23715_23719 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__23716_23720 = null;var count__23717_23721 = (0);var i__23718_23722 = (0);while(true){
if((i__23718_23722 < count__23717_23721))
{var node_23723 = cljs.core._nth.call(null,chunk__23716_23720,i__23718_23722);goog.dom.classes.add(node_23723,class$);
{
var G__23724 = seq__23715_23719;
var G__23725 = chunk__23716_23720;
var G__23726 = count__23717_23721;
var G__23727 = (i__23718_23722 + (1));
seq__23715_23719 = G__23724;
chunk__23716_23720 = G__23725;
count__23717_23721 = G__23726;
i__23718_23722 = G__23727;
continue;
}
} else
{var temp__4126__auto___23728 = cljs.core.seq.call(null,seq__23715_23719);if(temp__4126__auto___23728)
{var seq__23715_23729__$1 = temp__4126__auto___23728;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23715_23729__$1))
{var c__4314__auto___23730 = cljs.core.chunk_first.call(null,seq__23715_23729__$1);{
var G__23731 = cljs.core.chunk_rest.call(null,seq__23715_23729__$1);
var G__23732 = c__4314__auto___23730;
var G__23733 = cljs.core.count.call(null,c__4314__auto___23730);
var G__23734 = (0);
seq__23715_23719 = G__23731;
chunk__23716_23720 = G__23732;
count__23717_23721 = G__23733;
i__23718_23722 = G__23734;
continue;
}
} else
{var node_23735 = cljs.core.first.call(null,seq__23715_23729__$1);goog.dom.classes.add(node_23735,class$);
{
var G__23736 = cljs.core.next.call(null,seq__23715_23729__$1);
var G__23737 = null;
var G__23738 = (0);
var G__23739 = (0);
seq__23715_23719 = G__23736;
chunk__23716_23720 = G__23737;
count__23717_23721 = G__23738;
i__23718_23722 = G__23739;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__23744_23748 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__23745_23749 = null;var count__23746_23750 = (0);var i__23747_23751 = (0);while(true){
if((i__23747_23751 < count__23746_23750))
{var node_23752 = cljs.core._nth.call(null,chunk__23745_23749,i__23747_23751);goog.dom.classes.remove(node_23752,class$);
{
var G__23753 = seq__23744_23748;
var G__23754 = chunk__23745_23749;
var G__23755 = count__23746_23750;
var G__23756 = (i__23747_23751 + (1));
seq__23744_23748 = G__23753;
chunk__23745_23749 = G__23754;
count__23746_23750 = G__23755;
i__23747_23751 = G__23756;
continue;
}
} else
{var temp__4126__auto___23757 = cljs.core.seq.call(null,seq__23744_23748);if(temp__4126__auto___23757)
{var seq__23744_23758__$1 = temp__4126__auto___23757;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23744_23758__$1))
{var c__4314__auto___23759 = cljs.core.chunk_first.call(null,seq__23744_23758__$1);{
var G__23760 = cljs.core.chunk_rest.call(null,seq__23744_23758__$1);
var G__23761 = c__4314__auto___23759;
var G__23762 = cljs.core.count.call(null,c__4314__auto___23759);
var G__23763 = (0);
seq__23744_23748 = G__23760;
chunk__23745_23749 = G__23761;
count__23746_23750 = G__23762;
i__23747_23751 = G__23763;
continue;
}
} else
{var node_23764 = cljs.core.first.call(null,seq__23744_23758__$1);goog.dom.classes.remove(node_23764,class$);
{
var G__23765 = cljs.core.next.call(null,seq__23744_23758__$1);
var G__23766 = null;
var G__23767 = (0);
var G__23768 = (0);
seq__23744_23748 = G__23765;
chunk__23745_23749 = G__23766;
count__23746_23750 = G__23767;
i__23747_23751 = G__23768;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__23773_23777 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__23774_23778 = null;var count__23775_23779 = (0);var i__23776_23780 = (0);while(true){
if((i__23776_23780 < count__23775_23779))
{var node_23781 = cljs.core._nth.call(null,chunk__23774_23778,i__23776_23780);goog.dom.classes.toggle(node_23781,class$);
{
var G__23782 = seq__23773_23777;
var G__23783 = chunk__23774_23778;
var G__23784 = count__23775_23779;
var G__23785 = (i__23776_23780 + (1));
seq__23773_23777 = G__23782;
chunk__23774_23778 = G__23783;
count__23775_23779 = G__23784;
i__23776_23780 = G__23785;
continue;
}
} else
{var temp__4126__auto___23786 = cljs.core.seq.call(null,seq__23773_23777);if(temp__4126__auto___23786)
{var seq__23773_23787__$1 = temp__4126__auto___23786;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23773_23787__$1))
{var c__4314__auto___23788 = cljs.core.chunk_first.call(null,seq__23773_23787__$1);{
var G__23789 = cljs.core.chunk_rest.call(null,seq__23773_23787__$1);
var G__23790 = c__4314__auto___23788;
var G__23791 = cljs.core.count.call(null,c__4314__auto___23788);
var G__23792 = (0);
seq__23773_23777 = G__23789;
chunk__23774_23778 = G__23790;
count__23775_23779 = G__23791;
i__23776_23780 = G__23792;
continue;
}
} else
{var node_23793 = cljs.core.first.call(null,seq__23773_23787__$1);goog.dom.classes.toggle(node_23793,class$);
{
var G__23794 = cljs.core.next.call(null,seq__23773_23787__$1);
var G__23795 = null;
var G__23796 = (0);
var G__23797 = (0);
seq__23773_23777 = G__23794;
chunk__23774_23778 = G__23795;
count__23775_23779 = G__23796;
i__23776_23780 = G__23797;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_23806__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__23802_23807 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__23803_23808 = null;var count__23804_23809 = (0);var i__23805_23810 = (0);while(true){
if((i__23805_23810 < count__23804_23809))
{var node_23811 = cljs.core._nth.call(null,chunk__23803_23808,i__23805_23810);goog.dom.classes.set(node_23811,classes_23806__$1);
{
var G__23812 = seq__23802_23807;
var G__23813 = chunk__23803_23808;
var G__23814 = count__23804_23809;
var G__23815 = (i__23805_23810 + (1));
seq__23802_23807 = G__23812;
chunk__23803_23808 = G__23813;
count__23804_23809 = G__23814;
i__23805_23810 = G__23815;
continue;
}
} else
{var temp__4126__auto___23816 = cljs.core.seq.call(null,seq__23802_23807);if(temp__4126__auto___23816)
{var seq__23802_23817__$1 = temp__4126__auto___23816;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23802_23817__$1))
{var c__4314__auto___23818 = cljs.core.chunk_first.call(null,seq__23802_23817__$1);{
var G__23819 = cljs.core.chunk_rest.call(null,seq__23802_23817__$1);
var G__23820 = c__4314__auto___23818;
var G__23821 = cljs.core.count.call(null,c__4314__auto___23818);
var G__23822 = (0);
seq__23802_23807 = G__23819;
chunk__23803_23808 = G__23820;
count__23804_23809 = G__23821;
i__23805_23810 = G__23822;
continue;
}
} else
{var node_23823 = cljs.core.first.call(null,seq__23802_23817__$1);goog.dom.classes.set(node_23823,classes_23806__$1);
{
var G__23824 = cljs.core.next.call(null,seq__23802_23817__$1);
var G__23825 = null;
var G__23826 = (0);
var G__23827 = (0);
seq__23802_23807 = G__23824;
chunk__23803_23808 = G__23825;
count__23804_23809 = G__23826;
i__23805_23810 = G__23827;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__23832_23836 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__23833_23837 = null;var count__23834_23838 = (0);var i__23835_23839 = (0);while(true){
if((i__23835_23839 < count__23834_23838))
{var node_23840 = cljs.core._nth.call(null,chunk__23833_23837,i__23835_23839);goog.dom.setTextContent(node_23840,value);
{
var G__23841 = seq__23832_23836;
var G__23842 = chunk__23833_23837;
var G__23843 = count__23834_23838;
var G__23844 = (i__23835_23839 + (1));
seq__23832_23836 = G__23841;
chunk__23833_23837 = G__23842;
count__23834_23838 = G__23843;
i__23835_23839 = G__23844;
continue;
}
} else
{var temp__4126__auto___23845 = cljs.core.seq.call(null,seq__23832_23836);if(temp__4126__auto___23845)
{var seq__23832_23846__$1 = temp__4126__auto___23845;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23832_23846__$1))
{var c__4314__auto___23847 = cljs.core.chunk_first.call(null,seq__23832_23846__$1);{
var G__23848 = cljs.core.chunk_rest.call(null,seq__23832_23846__$1);
var G__23849 = c__4314__auto___23847;
var G__23850 = cljs.core.count.call(null,c__4314__auto___23847);
var G__23851 = (0);
seq__23832_23836 = G__23848;
chunk__23833_23837 = G__23849;
count__23834_23838 = G__23850;
i__23835_23839 = G__23851;
continue;
}
} else
{var node_23852 = cljs.core.first.call(null,seq__23832_23846__$1);goog.dom.setTextContent(node_23852,value);
{
var G__23853 = cljs.core.next.call(null,seq__23832_23846__$1);
var G__23854 = null;
var G__23855 = (0);
var G__23856 = (0);
seq__23832_23836 = G__23853;
chunk__23833_23837 = G__23854;
count__23834_23838 = G__23855;
i__23835_23839 = G__23856;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__23861_23865 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__23862_23866 = null;var count__23863_23867 = (0);var i__23864_23868 = (0);while(true){
if((i__23864_23868 < count__23863_23867))
{var node_23869 = cljs.core._nth.call(null,chunk__23862_23866,i__23864_23868);goog.dom.forms.setValue(node_23869,value);
{
var G__23870 = seq__23861_23865;
var G__23871 = chunk__23862_23866;
var G__23872 = count__23863_23867;
var G__23873 = (i__23864_23868 + (1));
seq__23861_23865 = G__23870;
chunk__23862_23866 = G__23871;
count__23863_23867 = G__23872;
i__23864_23868 = G__23873;
continue;
}
} else
{var temp__4126__auto___23874 = cljs.core.seq.call(null,seq__23861_23865);if(temp__4126__auto___23874)
{var seq__23861_23875__$1 = temp__4126__auto___23874;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23861_23875__$1))
{var c__4314__auto___23876 = cljs.core.chunk_first.call(null,seq__23861_23875__$1);{
var G__23877 = cljs.core.chunk_rest.call(null,seq__23861_23875__$1);
var G__23878 = c__4314__auto___23876;
var G__23879 = cljs.core.count.call(null,c__4314__auto___23876);
var G__23880 = (0);
seq__23861_23865 = G__23877;
chunk__23862_23866 = G__23878;
count__23863_23867 = G__23879;
i__23864_23868 = G__23880;
continue;
}
} else
{var node_23881 = cljs.core.first.call(null,seq__23861_23875__$1);goog.dom.forms.setValue(node_23881,value);
{
var G__23882 = cljs.core.next.call(null,seq__23861_23875__$1);
var G__23883 = null;
var G__23884 = (0);
var G__23885 = (0);
seq__23861_23865 = G__23882;
chunk__23862_23866 = G__23883;
count__23863_23867 = G__23884;
i__23864_23868 = G__23885;
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
domina.set_inner_html_BANG_ = (function set_inner_html_BANG_(content,html_string){var allows_inner_html_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_no_inner_html,html_string));var leading_whitespace_QMARK_ = cljs.core.re_find.call(null,domina.re_leading_whitespace,html_string);var tag_name = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html_string)))).toLowerCase();var special_tag_QMARK_ = cljs.core.contains_QMARK_.call(null,domina.wrap_map,tag_name);if(cljs.core.truth_((function (){var and__3546__auto__ = allows_inner_html_QMARK_;if(and__3546__auto__)
{var and__3546__auto____$1 = (function (){var or__3558__auto__ = domina.support.leading_whitespace_QMARK_;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return cljs.core.not.call(null,leading_whitespace_QMARK_);
}
})();if(cljs.core.truth_(and__3546__auto____$1))
{return !(special_tag_QMARK_);
} else
{return and__3546__auto____$1;
}
} else
{return and__3546__auto__;
}
})()))
{var value_23896 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__23892_23897 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__23893_23898 = null;var count__23894_23899 = (0);var i__23895_23900 = (0);while(true){
if((i__23895_23900 < count__23894_23899))
{var node_23901 = cljs.core._nth.call(null,chunk__23893_23898,i__23895_23900);node_23901.innerHTML = value_23896;
{
var G__23902 = seq__23892_23897;
var G__23903 = chunk__23893_23898;
var G__23904 = count__23894_23899;
var G__23905 = (i__23895_23900 + (1));
seq__23892_23897 = G__23902;
chunk__23893_23898 = G__23903;
count__23894_23899 = G__23904;
i__23895_23900 = G__23905;
continue;
}
} else
{var temp__4126__auto___23906 = cljs.core.seq.call(null,seq__23892_23897);if(temp__4126__auto___23906)
{var seq__23892_23907__$1 = temp__4126__auto___23906;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23892_23907__$1))
{var c__4314__auto___23908 = cljs.core.chunk_first.call(null,seq__23892_23907__$1);{
var G__23909 = cljs.core.chunk_rest.call(null,seq__23892_23907__$1);
var G__23910 = c__4314__auto___23908;
var G__23911 = cljs.core.count.call(null,c__4314__auto___23908);
var G__23912 = (0);
seq__23892_23897 = G__23909;
chunk__23893_23898 = G__23910;
count__23894_23899 = G__23911;
i__23895_23900 = G__23912;
continue;
}
} else
{var node_23913 = cljs.core.first.call(null,seq__23892_23907__$1);node_23913.innerHTML = value_23896;
{
var G__23914 = cljs.core.next.call(null,seq__23892_23907__$1);
var G__23915 = null;
var G__23916 = (0);
var G__23917 = (0);
seq__23892_23897 = G__23914;
chunk__23893_23898 = G__23915;
count__23894_23899 = G__23916;
i__23895_23900 = G__23917;
continue;
}
}
} else
{}
}
break;
}
}catch (e23891){if((e23891 instanceof Error))
{var e_23918 = e23891;domina.replace_children_BANG_.call(null,content,value_23896);
} else
{throw e23891;

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
var get_data__3 = (function (node,key,bubble){var m = domina.single_node.call(null,node).__domina_data;var value = (cljs.core.truth_(m)?cljs.core.get.call(null,m,key):null);if(cljs.core.truth_((function (){var and__3546__auto__ = bubble;if(cljs.core.truth_(and__3546__auto__))
{return (value == null);
} else
{return and__3546__auto__;
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
domina.set_data_BANG_ = (function set_data_BANG_(node,key,value){var m = (function (){var or__3558__auto__ = domina.single_node.call(null,node).__domina_data;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__23925_23929 = cljs.core.seq.call(null,children);var chunk__23926_23930 = null;var count__23927_23931 = (0);var i__23928_23932 = (0);while(true){
if((i__23928_23932 < count__23927_23931))
{var child_23933 = cljs.core._nth.call(null,chunk__23926_23930,i__23928_23932);frag.appendChild(child_23933);
{
var G__23934 = seq__23925_23929;
var G__23935 = chunk__23926_23930;
var G__23936 = count__23927_23931;
var G__23937 = (i__23928_23932 + (1));
seq__23925_23929 = G__23934;
chunk__23926_23930 = G__23935;
count__23927_23931 = G__23936;
i__23928_23932 = G__23937;
continue;
}
} else
{var temp__4126__auto___23938 = cljs.core.seq.call(null,seq__23925_23929);if(temp__4126__auto___23938)
{var seq__23925_23939__$1 = temp__4126__auto___23938;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23925_23939__$1))
{var c__4314__auto___23940 = cljs.core.chunk_first.call(null,seq__23925_23939__$1);{
var G__23941 = cljs.core.chunk_rest.call(null,seq__23925_23939__$1);
var G__23942 = c__4314__auto___23940;
var G__23943 = cljs.core.count.call(null,c__4314__auto___23940);
var G__23944 = (0);
seq__23925_23929 = G__23941;
chunk__23926_23930 = G__23942;
count__23927_23931 = G__23943;
i__23928_23932 = G__23944;
continue;
}
} else
{var child_23945 = cljs.core.first.call(null,seq__23925_23939__$1);frag.appendChild(child_23945);
{
var G__23946 = cljs.core.next.call(null,seq__23925_23939__$1);
var G__23947 = null;
var G__23948 = (0);
var G__23949 = (0);
seq__23925_23929 = G__23946;
chunk__23926_23930 = G__23947;
count__23927_23931 = G__23948;
i__23928_23932 = G__23949;
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
return (function (p1__23919_SHARP_,p2__23920_SHARP_){return f.call(null,p1__23919_SHARP_,p2__23920_SHARP_);
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
domina.array_like_QMARK_ = (function array_like_QMARK_(obj){var and__3546__auto__ = obj;if(cljs.core.truth_(and__3546__auto__))
{var and__3546__auto____$1 = cljs.core.not.call(null,obj.nodeName);if(and__3546__auto____$1)
{return obj.length;
} else
{return and__3546__auto____$1;
}
} else
{return and__3546__auto__;
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
{if((function (){var G__23951 = list_thing;if(G__23951)
{var bit__4208__auto__ = (G__23951.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4208__auto__) || (G__23951.cljs$core$ISeqable$))
{return true;
} else
{if((!G__23951.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__23951);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__23951);
}
})())
{return cljs.core.seq.call(null,list_thing);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,list_thing)))
{return domina.lazy_nodelist.call(null,list_thing);
} else
{return cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [list_thing], null));

}
}
}
});
(domina.DomContent["_"] = true);
(domina.nodes["_"] = (function (content){if((content == null))
{return cljs.core.List.EMPTY;
} else
{if((function (){var G__23952 = content;if(G__23952)
{var bit__4208__auto__ = (G__23952.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4208__auto__) || (G__23952.cljs$core$ISeqable$))
{return true;
} else
{if((!G__23952.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__23952);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__23952);
}
})())
{return cljs.core.seq.call(null,content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content)))
{return domina.lazy_nodelist.call(null,content);
} else
{return cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [content], null));

}
}
}
}));
(domina.single_node["_"] = (function (content){if((content == null))
{return null;
} else
{if((function (){var G__23953 = content;if(G__23953)
{var bit__4208__auto__ = (G__23953.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4208__auto__) || (G__23953.cljs$core$ISeqable$))
{return true;
} else
{if((!G__23953.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__23953);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__23953);
}
})())
{return cljs.core.first.call(null,content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content)))
{return content.item((0));
} else
{return content;

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
