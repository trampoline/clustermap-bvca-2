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
var opt_wrapper_29518 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_29519 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<table>","</table>"], null);var cell_wrapper_29520 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["td","optgroup","tfoot","tr","area",new cljs.core.Keyword(null,"default","default",-1987822328),"option","legend","thead","col","caption","th","colgroup","tbody"],[cell_wrapper_29520,opt_wrapper_29518,table_section_wrapper_29519,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody>","</tbody></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<map>","</map>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"",""], null),opt_wrapper_29518,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<fieldset>","</fieldset>"], null),table_section_wrapper_29519,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),table_section_wrapper_29519,cell_wrapper_29520,table_section_wrapper_29519,table_section_wrapper_29519]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3531__auto__ = div.firstChild;if(cljs.core.truth_(and__3531__auto__))
{return div.firstChild.childNodes;
} else
{return and__3531__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__29525 = cljs.core.seq.call(null,tbody);var chunk__29526 = null;var count__29527 = (0);var i__29528 = (0);while(true){
if((i__29528 < count__29527))
{var child = cljs.core._nth.call(null,chunk__29526,i__29528);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0))))
{child.parentNode.removeChild(child);
} else
{}
{
var G__29529 = seq__29525;
var G__29530 = chunk__29526;
var G__29531 = count__29527;
var G__29532 = (i__29528 + (1));
seq__29525 = G__29529;
chunk__29526 = G__29530;
count__29527 = G__29531;
i__29528 = G__29532;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__29525);if(temp__4126__auto__)
{var seq__29525__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__29525__$1))
{var c__4299__auto__ = cljs.core.chunk_first.call(null,seq__29525__$1);{
var G__29533 = cljs.core.chunk_rest.call(null,seq__29525__$1);
var G__29534 = c__4299__auto__;
var G__29535 = cljs.core.count.call(null,c__4299__auto__);
var G__29536 = (0);
seq__29525 = G__29533;
chunk__29526 = G__29534;
count__29527 = G__29535;
i__29528 = G__29536;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__29525__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0))))
{child.parentNode.removeChild(child);
} else
{}
{
var G__29537 = cljs.core.next.call(null,seq__29525__$1);
var G__29538 = null;
var G__29539 = (0);
var G__29540 = (0);
seq__29525 = G__29537;
chunk__29526 = G__29538;
count__29527 = G__29539;
i__29528 = G__29540;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))).toLowerCase();var vec__29542 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__29542,(0),null);var start_wrap = cljs.core.nth.call(null,vec__29542,(1),null);var end_wrap = cljs.core.nth.call(null,vec__29542,(2),null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(start_wrap)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(html__$1)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(end_wrap));
return div;
})();var level = depth;while(true){
if((level > (0)))
{{
var G__29543 = wrapper.lastChild;
var G__29544 = (level - (1));
wrapper = G__29543;
level = G__29544;
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
domina.DomContent = (function (){var obj29546 = {};return obj29546;
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
log_debug.cljs$lang$applyTo = (function (arglist__29547){
var mesg = cljs.core.seq(arglist__29547);
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
log.cljs$lang$applyTo = (function (arglist__29548){
var mesg = cljs.core.seq(arglist__29548);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__29549){
var contents = cljs.core.seq(arglist__29549);
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
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__29550_SHARP_){return p1__29550_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__29551_SHARP_,p2__29552_SHARP_){return goog.dom.insertChildAt(p1__29551_SHARP_,p2__29552_SHARP_,idx);
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__29554_SHARP_,p2__29553_SHARP_){return goog.dom.insertSiblingBefore(p2__29553_SHARP_,p1__29554_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__29556_SHARP_,p2__29555_SHARP_){return goog.dom.insertSiblingAfter(p2__29555_SHARP_,p1__29556_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__29558_SHARP_,p2__29557_SHARP_){return goog.dom.replaceNode(p2__29557_SHARP_,p1__29558_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__29563_29567 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__29564_29568 = null;var count__29565_29569 = (0);var i__29566_29570 = (0);while(true){
if((i__29566_29570 < count__29565_29569))
{var n_29571 = cljs.core._nth.call(null,chunk__29564_29568,i__29566_29570);goog.style.setStyle(n_29571,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__29572 = seq__29563_29567;
var G__29573 = chunk__29564_29568;
var G__29574 = count__29565_29569;
var G__29575 = (i__29566_29570 + (1));
seq__29563_29567 = G__29572;
chunk__29564_29568 = G__29573;
count__29565_29569 = G__29574;
i__29566_29570 = G__29575;
continue;
}
} else
{var temp__4126__auto___29576 = cljs.core.seq.call(null,seq__29563_29567);if(temp__4126__auto___29576)
{var seq__29563_29577__$1 = temp__4126__auto___29576;if(cljs.core.chunked_seq_QMARK_.call(null,seq__29563_29577__$1))
{var c__4299__auto___29578 = cljs.core.chunk_first.call(null,seq__29563_29577__$1);{
var G__29579 = cljs.core.chunk_rest.call(null,seq__29563_29577__$1);
var G__29580 = c__4299__auto___29578;
var G__29581 = cljs.core.count.call(null,c__4299__auto___29578);
var G__29582 = (0);
seq__29563_29567 = G__29579;
chunk__29564_29568 = G__29580;
count__29565_29569 = G__29581;
i__29566_29570 = G__29582;
continue;
}
} else
{var n_29583 = cljs.core.first.call(null,seq__29563_29577__$1);goog.style.setStyle(n_29583,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__29584 = cljs.core.next.call(null,seq__29563_29577__$1);
var G__29585 = null;
var G__29586 = (0);
var G__29587 = (0);
seq__29563_29567 = G__29584;
chunk__29564_29568 = G__29585;
count__29565_29569 = G__29586;
i__29566_29570 = G__29587;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__29588){
var content = cljs.core.first(arglist__29588);
arglist__29588 = cljs.core.next(arglist__29588);
var name = cljs.core.first(arglist__29588);
var value = cljs.core.rest(arglist__29588);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__29593_29597 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__29594_29598 = null;var count__29595_29599 = (0);var i__29596_29600 = (0);while(true){
if((i__29596_29600 < count__29595_29599))
{var n_29601 = cljs.core._nth.call(null,chunk__29594_29598,i__29596_29600);n_29601.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__29602 = seq__29593_29597;
var G__29603 = chunk__29594_29598;
var G__29604 = count__29595_29599;
var G__29605 = (i__29596_29600 + (1));
seq__29593_29597 = G__29602;
chunk__29594_29598 = G__29603;
count__29595_29599 = G__29604;
i__29596_29600 = G__29605;
continue;
}
} else
{var temp__4126__auto___29606 = cljs.core.seq.call(null,seq__29593_29597);if(temp__4126__auto___29606)
{var seq__29593_29607__$1 = temp__4126__auto___29606;if(cljs.core.chunked_seq_QMARK_.call(null,seq__29593_29607__$1))
{var c__4299__auto___29608 = cljs.core.chunk_first.call(null,seq__29593_29607__$1);{
var G__29609 = cljs.core.chunk_rest.call(null,seq__29593_29607__$1);
var G__29610 = c__4299__auto___29608;
var G__29611 = cljs.core.count.call(null,c__4299__auto___29608);
var G__29612 = (0);
seq__29593_29597 = G__29609;
chunk__29594_29598 = G__29610;
count__29595_29599 = G__29611;
i__29596_29600 = G__29612;
continue;
}
} else
{var n_29613 = cljs.core.first.call(null,seq__29593_29607__$1);n_29613.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__29614 = cljs.core.next.call(null,seq__29593_29607__$1);
var G__29615 = null;
var G__29616 = (0);
var G__29617 = (0);
seq__29593_29597 = G__29614;
chunk__29594_29598 = G__29615;
count__29595_29599 = G__29616;
i__29596_29600 = G__29617;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__29618){
var content = cljs.core.first(arglist__29618);
arglist__29618 = cljs.core.next(arglist__29618);
var name = cljs.core.first(arglist__29618);
var value = cljs.core.rest(arglist__29618);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__29623_29627 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__29624_29628 = null;var count__29625_29629 = (0);var i__29626_29630 = (0);while(true){
if((i__29626_29630 < count__29625_29629))
{var n_29631 = cljs.core._nth.call(null,chunk__29624_29628,i__29626_29630);n_29631.removeAttribute(cljs.core.name.call(null,name));
{
var G__29632 = seq__29623_29627;
var G__29633 = chunk__29624_29628;
var G__29634 = count__29625_29629;
var G__29635 = (i__29626_29630 + (1));
seq__29623_29627 = G__29632;
chunk__29624_29628 = G__29633;
count__29625_29629 = G__29634;
i__29626_29630 = G__29635;
continue;
}
} else
{var temp__4126__auto___29636 = cljs.core.seq.call(null,seq__29623_29627);if(temp__4126__auto___29636)
{var seq__29623_29637__$1 = temp__4126__auto___29636;if(cljs.core.chunked_seq_QMARK_.call(null,seq__29623_29637__$1))
{var c__4299__auto___29638 = cljs.core.chunk_first.call(null,seq__29623_29637__$1);{
var G__29639 = cljs.core.chunk_rest.call(null,seq__29623_29637__$1);
var G__29640 = c__4299__auto___29638;
var G__29641 = cljs.core.count.call(null,c__4299__auto___29638);
var G__29642 = (0);
seq__29623_29627 = G__29639;
chunk__29624_29628 = G__29640;
count__29625_29629 = G__29641;
i__29626_29630 = G__29642;
continue;
}
} else
{var n_29643 = cljs.core.first.call(null,seq__29623_29637__$1);n_29643.removeAttribute(cljs.core.name.call(null,name));
{
var G__29644 = cljs.core.next.call(null,seq__29623_29637__$1);
var G__29645 = null;
var G__29646 = (0);
var G__29647 = (0);
seq__29623_29627 = G__29644;
chunk__29624_29628 = G__29645;
count__29625_29629 = G__29646;
i__29626_29630 = G__29647;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__29649 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__29649,(0),null);var v = cljs.core.nth.call(null,vec__29649,(1),null);if(cljs.core.truth_((function (){var and__3531__auto__ = k;if(cljs.core.truth_(and__3531__auto__))
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
return (function (p1__29650_SHARP_){var attr = attrs__$1.item(p1__29650_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
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
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__29657_29663 = cljs.core.seq.call(null,styles);var chunk__29658_29664 = null;var count__29659_29665 = (0);var i__29660_29666 = (0);while(true){
if((i__29660_29666 < count__29659_29665))
{var vec__29661_29667 = cljs.core._nth.call(null,chunk__29658_29664,i__29660_29666);var name_29668 = cljs.core.nth.call(null,vec__29661_29667,(0),null);var value_29669 = cljs.core.nth.call(null,vec__29661_29667,(1),null);domina.set_style_BANG_.call(null,content,name_29668,value_29669);
{
var G__29670 = seq__29657_29663;
var G__29671 = chunk__29658_29664;
var G__29672 = count__29659_29665;
var G__29673 = (i__29660_29666 + (1));
seq__29657_29663 = G__29670;
chunk__29658_29664 = G__29671;
count__29659_29665 = G__29672;
i__29660_29666 = G__29673;
continue;
}
} else
{var temp__4126__auto___29674 = cljs.core.seq.call(null,seq__29657_29663);if(temp__4126__auto___29674)
{var seq__29657_29675__$1 = temp__4126__auto___29674;if(cljs.core.chunked_seq_QMARK_.call(null,seq__29657_29675__$1))
{var c__4299__auto___29676 = cljs.core.chunk_first.call(null,seq__29657_29675__$1);{
var G__29677 = cljs.core.chunk_rest.call(null,seq__29657_29675__$1);
var G__29678 = c__4299__auto___29676;
var G__29679 = cljs.core.count.call(null,c__4299__auto___29676);
var G__29680 = (0);
seq__29657_29663 = G__29677;
chunk__29658_29664 = G__29678;
count__29659_29665 = G__29679;
i__29660_29666 = G__29680;
continue;
}
} else
{var vec__29662_29681 = cljs.core.first.call(null,seq__29657_29675__$1);var name_29682 = cljs.core.nth.call(null,vec__29662_29681,(0),null);var value_29683 = cljs.core.nth.call(null,vec__29662_29681,(1),null);domina.set_style_BANG_.call(null,content,name_29682,value_29683);
{
var G__29684 = cljs.core.next.call(null,seq__29657_29675__$1);
var G__29685 = null;
var G__29686 = (0);
var G__29687 = (0);
seq__29657_29663 = G__29684;
chunk__29658_29664 = G__29685;
count__29659_29665 = G__29686;
i__29660_29666 = G__29687;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__29694_29700 = cljs.core.seq.call(null,attrs);var chunk__29695_29701 = null;var count__29696_29702 = (0);var i__29697_29703 = (0);while(true){
if((i__29697_29703 < count__29696_29702))
{var vec__29698_29704 = cljs.core._nth.call(null,chunk__29695_29701,i__29697_29703);var name_29705 = cljs.core.nth.call(null,vec__29698_29704,(0),null);var value_29706 = cljs.core.nth.call(null,vec__29698_29704,(1),null);domina.set_attr_BANG_.call(null,content,name_29705,value_29706);
{
var G__29707 = seq__29694_29700;
var G__29708 = chunk__29695_29701;
var G__29709 = count__29696_29702;
var G__29710 = (i__29697_29703 + (1));
seq__29694_29700 = G__29707;
chunk__29695_29701 = G__29708;
count__29696_29702 = G__29709;
i__29697_29703 = G__29710;
continue;
}
} else
{var temp__4126__auto___29711 = cljs.core.seq.call(null,seq__29694_29700);if(temp__4126__auto___29711)
{var seq__29694_29712__$1 = temp__4126__auto___29711;if(cljs.core.chunked_seq_QMARK_.call(null,seq__29694_29712__$1))
{var c__4299__auto___29713 = cljs.core.chunk_first.call(null,seq__29694_29712__$1);{
var G__29714 = cljs.core.chunk_rest.call(null,seq__29694_29712__$1);
var G__29715 = c__4299__auto___29713;
var G__29716 = cljs.core.count.call(null,c__4299__auto___29713);
var G__29717 = (0);
seq__29694_29700 = G__29714;
chunk__29695_29701 = G__29715;
count__29696_29702 = G__29716;
i__29697_29703 = G__29717;
continue;
}
} else
{var vec__29699_29718 = cljs.core.first.call(null,seq__29694_29712__$1);var name_29719 = cljs.core.nth.call(null,vec__29699_29718,(0),null);var value_29720 = cljs.core.nth.call(null,vec__29699_29718,(1),null);domina.set_attr_BANG_.call(null,content,name_29719,value_29720);
{
var G__29721 = cljs.core.next.call(null,seq__29694_29712__$1);
var G__29722 = null;
var G__29723 = (0);
var G__29724 = (0);
seq__29694_29700 = G__29721;
chunk__29695_29701 = G__29722;
count__29696_29702 = G__29723;
i__29697_29703 = G__29724;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__29729_29733 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__29730_29734 = null;var count__29731_29735 = (0);var i__29732_29736 = (0);while(true){
if((i__29732_29736 < count__29731_29735))
{var node_29737 = cljs.core._nth.call(null,chunk__29730_29734,i__29732_29736);goog.dom.classes.add(node_29737,class$);
{
var G__29738 = seq__29729_29733;
var G__29739 = chunk__29730_29734;
var G__29740 = count__29731_29735;
var G__29741 = (i__29732_29736 + (1));
seq__29729_29733 = G__29738;
chunk__29730_29734 = G__29739;
count__29731_29735 = G__29740;
i__29732_29736 = G__29741;
continue;
}
} else
{var temp__4126__auto___29742 = cljs.core.seq.call(null,seq__29729_29733);if(temp__4126__auto___29742)
{var seq__29729_29743__$1 = temp__4126__auto___29742;if(cljs.core.chunked_seq_QMARK_.call(null,seq__29729_29743__$1))
{var c__4299__auto___29744 = cljs.core.chunk_first.call(null,seq__29729_29743__$1);{
var G__29745 = cljs.core.chunk_rest.call(null,seq__29729_29743__$1);
var G__29746 = c__4299__auto___29744;
var G__29747 = cljs.core.count.call(null,c__4299__auto___29744);
var G__29748 = (0);
seq__29729_29733 = G__29745;
chunk__29730_29734 = G__29746;
count__29731_29735 = G__29747;
i__29732_29736 = G__29748;
continue;
}
} else
{var node_29749 = cljs.core.first.call(null,seq__29729_29743__$1);goog.dom.classes.add(node_29749,class$);
{
var G__29750 = cljs.core.next.call(null,seq__29729_29743__$1);
var G__29751 = null;
var G__29752 = (0);
var G__29753 = (0);
seq__29729_29733 = G__29750;
chunk__29730_29734 = G__29751;
count__29731_29735 = G__29752;
i__29732_29736 = G__29753;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__29758_29762 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__29759_29763 = null;var count__29760_29764 = (0);var i__29761_29765 = (0);while(true){
if((i__29761_29765 < count__29760_29764))
{var node_29766 = cljs.core._nth.call(null,chunk__29759_29763,i__29761_29765);goog.dom.classes.remove(node_29766,class$);
{
var G__29767 = seq__29758_29762;
var G__29768 = chunk__29759_29763;
var G__29769 = count__29760_29764;
var G__29770 = (i__29761_29765 + (1));
seq__29758_29762 = G__29767;
chunk__29759_29763 = G__29768;
count__29760_29764 = G__29769;
i__29761_29765 = G__29770;
continue;
}
} else
{var temp__4126__auto___29771 = cljs.core.seq.call(null,seq__29758_29762);if(temp__4126__auto___29771)
{var seq__29758_29772__$1 = temp__4126__auto___29771;if(cljs.core.chunked_seq_QMARK_.call(null,seq__29758_29772__$1))
{var c__4299__auto___29773 = cljs.core.chunk_first.call(null,seq__29758_29772__$1);{
var G__29774 = cljs.core.chunk_rest.call(null,seq__29758_29772__$1);
var G__29775 = c__4299__auto___29773;
var G__29776 = cljs.core.count.call(null,c__4299__auto___29773);
var G__29777 = (0);
seq__29758_29762 = G__29774;
chunk__29759_29763 = G__29775;
count__29760_29764 = G__29776;
i__29761_29765 = G__29777;
continue;
}
} else
{var node_29778 = cljs.core.first.call(null,seq__29758_29772__$1);goog.dom.classes.remove(node_29778,class$);
{
var G__29779 = cljs.core.next.call(null,seq__29758_29772__$1);
var G__29780 = null;
var G__29781 = (0);
var G__29782 = (0);
seq__29758_29762 = G__29779;
chunk__29759_29763 = G__29780;
count__29760_29764 = G__29781;
i__29761_29765 = G__29782;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__29787_29791 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__29788_29792 = null;var count__29789_29793 = (0);var i__29790_29794 = (0);while(true){
if((i__29790_29794 < count__29789_29793))
{var node_29795 = cljs.core._nth.call(null,chunk__29788_29792,i__29790_29794);goog.dom.classes.toggle(node_29795,class$);
{
var G__29796 = seq__29787_29791;
var G__29797 = chunk__29788_29792;
var G__29798 = count__29789_29793;
var G__29799 = (i__29790_29794 + (1));
seq__29787_29791 = G__29796;
chunk__29788_29792 = G__29797;
count__29789_29793 = G__29798;
i__29790_29794 = G__29799;
continue;
}
} else
{var temp__4126__auto___29800 = cljs.core.seq.call(null,seq__29787_29791);if(temp__4126__auto___29800)
{var seq__29787_29801__$1 = temp__4126__auto___29800;if(cljs.core.chunked_seq_QMARK_.call(null,seq__29787_29801__$1))
{var c__4299__auto___29802 = cljs.core.chunk_first.call(null,seq__29787_29801__$1);{
var G__29803 = cljs.core.chunk_rest.call(null,seq__29787_29801__$1);
var G__29804 = c__4299__auto___29802;
var G__29805 = cljs.core.count.call(null,c__4299__auto___29802);
var G__29806 = (0);
seq__29787_29791 = G__29803;
chunk__29788_29792 = G__29804;
count__29789_29793 = G__29805;
i__29790_29794 = G__29806;
continue;
}
} else
{var node_29807 = cljs.core.first.call(null,seq__29787_29801__$1);goog.dom.classes.toggle(node_29807,class$);
{
var G__29808 = cljs.core.next.call(null,seq__29787_29801__$1);
var G__29809 = null;
var G__29810 = (0);
var G__29811 = (0);
seq__29787_29791 = G__29808;
chunk__29788_29792 = G__29809;
count__29789_29793 = G__29810;
i__29790_29794 = G__29811;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_29820__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__29816_29821 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__29817_29822 = null;var count__29818_29823 = (0);var i__29819_29824 = (0);while(true){
if((i__29819_29824 < count__29818_29823))
{var node_29825 = cljs.core._nth.call(null,chunk__29817_29822,i__29819_29824);goog.dom.classes.set(node_29825,classes_29820__$1);
{
var G__29826 = seq__29816_29821;
var G__29827 = chunk__29817_29822;
var G__29828 = count__29818_29823;
var G__29829 = (i__29819_29824 + (1));
seq__29816_29821 = G__29826;
chunk__29817_29822 = G__29827;
count__29818_29823 = G__29828;
i__29819_29824 = G__29829;
continue;
}
} else
{var temp__4126__auto___29830 = cljs.core.seq.call(null,seq__29816_29821);if(temp__4126__auto___29830)
{var seq__29816_29831__$1 = temp__4126__auto___29830;if(cljs.core.chunked_seq_QMARK_.call(null,seq__29816_29831__$1))
{var c__4299__auto___29832 = cljs.core.chunk_first.call(null,seq__29816_29831__$1);{
var G__29833 = cljs.core.chunk_rest.call(null,seq__29816_29831__$1);
var G__29834 = c__4299__auto___29832;
var G__29835 = cljs.core.count.call(null,c__4299__auto___29832);
var G__29836 = (0);
seq__29816_29821 = G__29833;
chunk__29817_29822 = G__29834;
count__29818_29823 = G__29835;
i__29819_29824 = G__29836;
continue;
}
} else
{var node_29837 = cljs.core.first.call(null,seq__29816_29831__$1);goog.dom.classes.set(node_29837,classes_29820__$1);
{
var G__29838 = cljs.core.next.call(null,seq__29816_29831__$1);
var G__29839 = null;
var G__29840 = (0);
var G__29841 = (0);
seq__29816_29821 = G__29838;
chunk__29817_29822 = G__29839;
count__29818_29823 = G__29840;
i__29819_29824 = G__29841;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__29846_29850 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__29847_29851 = null;var count__29848_29852 = (0);var i__29849_29853 = (0);while(true){
if((i__29849_29853 < count__29848_29852))
{var node_29854 = cljs.core._nth.call(null,chunk__29847_29851,i__29849_29853);goog.dom.setTextContent(node_29854,value);
{
var G__29855 = seq__29846_29850;
var G__29856 = chunk__29847_29851;
var G__29857 = count__29848_29852;
var G__29858 = (i__29849_29853 + (1));
seq__29846_29850 = G__29855;
chunk__29847_29851 = G__29856;
count__29848_29852 = G__29857;
i__29849_29853 = G__29858;
continue;
}
} else
{var temp__4126__auto___29859 = cljs.core.seq.call(null,seq__29846_29850);if(temp__4126__auto___29859)
{var seq__29846_29860__$1 = temp__4126__auto___29859;if(cljs.core.chunked_seq_QMARK_.call(null,seq__29846_29860__$1))
{var c__4299__auto___29861 = cljs.core.chunk_first.call(null,seq__29846_29860__$1);{
var G__29862 = cljs.core.chunk_rest.call(null,seq__29846_29860__$1);
var G__29863 = c__4299__auto___29861;
var G__29864 = cljs.core.count.call(null,c__4299__auto___29861);
var G__29865 = (0);
seq__29846_29850 = G__29862;
chunk__29847_29851 = G__29863;
count__29848_29852 = G__29864;
i__29849_29853 = G__29865;
continue;
}
} else
{var node_29866 = cljs.core.first.call(null,seq__29846_29860__$1);goog.dom.setTextContent(node_29866,value);
{
var G__29867 = cljs.core.next.call(null,seq__29846_29860__$1);
var G__29868 = null;
var G__29869 = (0);
var G__29870 = (0);
seq__29846_29850 = G__29867;
chunk__29847_29851 = G__29868;
count__29848_29852 = G__29869;
i__29849_29853 = G__29870;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__29875_29879 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__29876_29880 = null;var count__29877_29881 = (0);var i__29878_29882 = (0);while(true){
if((i__29878_29882 < count__29877_29881))
{var node_29883 = cljs.core._nth.call(null,chunk__29876_29880,i__29878_29882);goog.dom.forms.setValue(node_29883,value);
{
var G__29884 = seq__29875_29879;
var G__29885 = chunk__29876_29880;
var G__29886 = count__29877_29881;
var G__29887 = (i__29878_29882 + (1));
seq__29875_29879 = G__29884;
chunk__29876_29880 = G__29885;
count__29877_29881 = G__29886;
i__29878_29882 = G__29887;
continue;
}
} else
{var temp__4126__auto___29888 = cljs.core.seq.call(null,seq__29875_29879);if(temp__4126__auto___29888)
{var seq__29875_29889__$1 = temp__4126__auto___29888;if(cljs.core.chunked_seq_QMARK_.call(null,seq__29875_29889__$1))
{var c__4299__auto___29890 = cljs.core.chunk_first.call(null,seq__29875_29889__$1);{
var G__29891 = cljs.core.chunk_rest.call(null,seq__29875_29889__$1);
var G__29892 = c__4299__auto___29890;
var G__29893 = cljs.core.count.call(null,c__4299__auto___29890);
var G__29894 = (0);
seq__29875_29879 = G__29891;
chunk__29876_29880 = G__29892;
count__29877_29881 = G__29893;
i__29878_29882 = G__29894;
continue;
}
} else
{var node_29895 = cljs.core.first.call(null,seq__29875_29889__$1);goog.dom.forms.setValue(node_29895,value);
{
var G__29896 = cljs.core.next.call(null,seq__29875_29889__$1);
var G__29897 = null;
var G__29898 = (0);
var G__29899 = (0);
seq__29875_29879 = G__29896;
chunk__29876_29880 = G__29897;
count__29877_29881 = G__29898;
i__29878_29882 = G__29899;
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
{var value_29910 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__29906_29911 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__29907_29912 = null;var count__29908_29913 = (0);var i__29909_29914 = (0);while(true){
if((i__29909_29914 < count__29908_29913))
{var node_29915 = cljs.core._nth.call(null,chunk__29907_29912,i__29909_29914);node_29915.innerHTML = value_29910;
{
var G__29916 = seq__29906_29911;
var G__29917 = chunk__29907_29912;
var G__29918 = count__29908_29913;
var G__29919 = (i__29909_29914 + (1));
seq__29906_29911 = G__29916;
chunk__29907_29912 = G__29917;
count__29908_29913 = G__29918;
i__29909_29914 = G__29919;
continue;
}
} else
{var temp__4126__auto___29920 = cljs.core.seq.call(null,seq__29906_29911);if(temp__4126__auto___29920)
{var seq__29906_29921__$1 = temp__4126__auto___29920;if(cljs.core.chunked_seq_QMARK_.call(null,seq__29906_29921__$1))
{var c__4299__auto___29922 = cljs.core.chunk_first.call(null,seq__29906_29921__$1);{
var G__29923 = cljs.core.chunk_rest.call(null,seq__29906_29921__$1);
var G__29924 = c__4299__auto___29922;
var G__29925 = cljs.core.count.call(null,c__4299__auto___29922);
var G__29926 = (0);
seq__29906_29911 = G__29923;
chunk__29907_29912 = G__29924;
count__29908_29913 = G__29925;
i__29909_29914 = G__29926;
continue;
}
} else
{var node_29927 = cljs.core.first.call(null,seq__29906_29921__$1);node_29927.innerHTML = value_29910;
{
var G__29928 = cljs.core.next.call(null,seq__29906_29921__$1);
var G__29929 = null;
var G__29930 = (0);
var G__29931 = (0);
seq__29906_29911 = G__29928;
chunk__29907_29912 = G__29929;
count__29908_29913 = G__29930;
i__29909_29914 = G__29931;
continue;
}
}
} else
{}
}
break;
}
}catch (e29905){if((e29905 instanceof Error))
{var e_29932 = e29905;domina.replace_children_BANG_.call(null,content,value_29910);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e29905;
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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__29939_29943 = cljs.core.seq.call(null,children);var chunk__29940_29944 = null;var count__29941_29945 = (0);var i__29942_29946 = (0);while(true){
if((i__29942_29946 < count__29941_29945))
{var child_29947 = cljs.core._nth.call(null,chunk__29940_29944,i__29942_29946);frag.appendChild(child_29947);
{
var G__29948 = seq__29939_29943;
var G__29949 = chunk__29940_29944;
var G__29950 = count__29941_29945;
var G__29951 = (i__29942_29946 + (1));
seq__29939_29943 = G__29948;
chunk__29940_29944 = G__29949;
count__29941_29945 = G__29950;
i__29942_29946 = G__29951;
continue;
}
} else
{var temp__4126__auto___29952 = cljs.core.seq.call(null,seq__29939_29943);if(temp__4126__auto___29952)
{var seq__29939_29953__$1 = temp__4126__auto___29952;if(cljs.core.chunked_seq_QMARK_.call(null,seq__29939_29953__$1))
{var c__4299__auto___29954 = cljs.core.chunk_first.call(null,seq__29939_29953__$1);{
var G__29955 = cljs.core.chunk_rest.call(null,seq__29939_29953__$1);
var G__29956 = c__4299__auto___29954;
var G__29957 = cljs.core.count.call(null,c__4299__auto___29954);
var G__29958 = (0);
seq__29939_29943 = G__29955;
chunk__29940_29944 = G__29956;
count__29941_29945 = G__29957;
i__29942_29946 = G__29958;
continue;
}
} else
{var child_29959 = cljs.core.first.call(null,seq__29939_29953__$1);frag.appendChild(child_29959);
{
var G__29960 = cljs.core.next.call(null,seq__29939_29953__$1);
var G__29961 = null;
var G__29962 = (0);
var G__29963 = (0);
seq__29939_29943 = G__29960;
chunk__29940_29944 = G__29961;
count__29941_29945 = G__29962;
i__29942_29946 = G__29963;
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
return (function (p1__29933_SHARP_,p2__29934_SHARP_){return f.call(null,p1__29933_SHARP_,p2__29934_SHARP_);
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
{if((function (){var G__29965 = list_thing;if(G__29965)
{var bit__4193__auto__ = (G__29965.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4193__auto__) || (G__29965.cljs$core$ISeqable$))
{return true;
} else
{if((!G__29965.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__29965);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__29965);
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
{if((function (){var G__29966 = content;if(G__29966)
{var bit__4193__auto__ = (G__29966.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4193__auto__) || (G__29966.cljs$core$ISeqable$))
{return true;
} else
{if((!G__29966.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__29966);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__29966);
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
{if((function (){var G__29967 = content;if(G__29967)
{var bit__4193__auto__ = (G__29967.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4193__auto__) || (G__29967.cljs$core$ISeqable$))
{return true;
} else
{if((!G__29967.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__29967);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__29967);
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
