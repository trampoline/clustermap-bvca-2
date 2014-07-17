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
var opt_wrapper_42565 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_42566 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<table>","</table>"], null);var cell_wrapper_42567 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["td","optgroup","tfoot","tr","area",cljs.core.constant$keyword$763,"option","legend","thead","col","caption","th","colgroup","tbody"],[cell_wrapper_42567,opt_wrapper_42565,table_section_wrapper_42566,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody>","</tbody></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<map>","</map>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"",""], null),opt_wrapper_42565,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<fieldset>","</fieldset>"], null),table_section_wrapper_42566,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),table_section_wrapper_42566,cell_wrapper_42567,table_section_wrapper_42566,table_section_wrapper_42566]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not(cljs.core.re_find(domina.re_tbody,html));var tbody = (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3531__auto__ = div.firstChild;if(cljs.core.truth_(and__3531__auto__))
{return div.firstChild.childNodes;
} else
{return and__3531__auto__;
}
})():(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__42572 = cljs.core.seq(tbody);var chunk__42573 = null;var count__42574 = (0);var i__42575 = (0);while(true){
if((i__42575 < count__42574))
{var child = chunk__42573.cljs$core$IIndexed$_nth$arity$2(null,i__42575);if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.nodeName,"tbody")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.childNodes.length,(0))))
{child.parentNode.removeChild(child);
} else
{}
{
var G__42576 = seq__42572;
var G__42577 = chunk__42573;
var G__42578 = count__42574;
var G__42579 = (i__42575 + (1));
seq__42572 = G__42576;
chunk__42573 = G__42577;
count__42574 = G__42578;
i__42575 = G__42579;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__42572);if(temp__4126__auto__)
{var seq__42572__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__42572__$1))
{var c__4299__auto__ = cljs.core.chunk_first(seq__42572__$1);{
var G__42580 = cljs.core.chunk_rest(seq__42572__$1);
var G__42581 = c__4299__auto__;
var G__42582 = cljs.core.count(c__4299__auto__);
var G__42583 = (0);
seq__42572 = G__42580;
chunk__42573 = G__42581;
count__42574 = G__42582;
i__42575 = G__42583;
continue;
}
} else
{var child = cljs.core.first(seq__42572__$1);if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.nodeName,"tbody")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.childNodes.length,(0))))
{child.parentNode.removeChild(child);
} else
{}
{
var G__42584 = cljs.core.next(seq__42572__$1);
var G__42585 = null;
var G__42586 = (0);
var G__42587 = (0);
seq__42572 = G__42584;
chunk__42573 = G__42585;
count__42574 = G__42586;
i__42575 = G__42587;
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
domina.restore_leading_whitespace_BANG_ = (function restore_leading_whitespace_BANG_(div,html){return div.insertBefore(document.createTextNode(cljs.core.first(cljs.core.re_find(domina.re_leading_whitespace,html))),div.firstChild);
});
/**
* takes an string of html and returns a NodeList of dom fragments
*/
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace(html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second(cljs.core.re_find(domina.re_tag_name,html__$1)))).toLowerCase();var vec__42589 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(domina.wrap_map,tag_name,cljs.core.constant$keyword$763.cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42589,(0),null);var start_wrap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42589,(1),null);var end_wrap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42589,(2),null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(start_wrap)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(html__$1)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(end_wrap));
return div;
})();var level = depth;while(true){
if((level > (0)))
{{
var G__42590 = wrapper.lastChild;
var G__42591 = (level - (1));
wrapper = G__42590;
level = G__42591;
continue;
}
} else
{return wrapper;
}
break;
}
})();if(cljs.core.truth_(domina.support.extraneous_tbody_QMARK_))
{domina.remove_extraneous_tbody_BANG_(div,html__$1,tag_name,start_wrap);
} else
{}
if(cljs.core.truth_((function (){var and__3531__auto__ = cljs.core.not(domina.support.leading_whitespace_QMARK_);if(and__3531__auto__)
{return cljs.core.re_find(domina.re_leading_whitespace,html__$1);
} else
{return and__3531__auto__;
}
})()))
{domina.restore_leading_whitespace_BANG_(div,html__$1);
} else
{}
return div.childNodes;
});
domina.string_to_dom = (function string_to_dom(s){if(cljs.core.truth_(cljs.core.re_find(domina.re_html,s)))
{return domina.html_to_dom(s);
} else
{return document.createTextNode(s);
}
});
domina.DomContent = (function (){var obj42593 = {};return obj42593;
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
{throw cljs.core.missing_protocol("DomContent.nodes",content);
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
{throw cljs.core.missing_protocol("DomContent.single-node",nodeseq);
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
{return !(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(window.console,undefined));
} else
{return and__3531__auto__;
}
})()))
{return console.log(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,mesg));
} else
{return null;
}
};
var log_debug = function (var_args){
var mesg = null;if (arguments.length > 0) {
  mesg = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return log_debug__delegate.call(this,mesg);};
log_debug.cljs$lang$maxFixedArity = 0;
log_debug.cljs$lang$applyTo = (function (arglist__42594){
var mesg = cljs.core.seq(arglist__42594);
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
{return console.log(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,mesg));
} else
{return null;
}
};
var log = function (var_args){
var mesg = null;if (arguments.length > 0) {
  mesg = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return log__delegate.call(this,mesg);};
log.cljs$lang$maxFixedArity = 0;
log.cljs$lang$applyTo = (function (arglist__42595){
var mesg = cljs.core.seq(arglist__42595);
return log__delegate(mesg);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
/**
* Returns content containing a single node by looking up the given ID
*/
domina.by_id = (function by_id(id){return goog.dom.getElement(cljs.core.name(id));
});
/**
* Returns content containing nodes which have the specified CSS class.
*/
domina.by_class = (function by_class(class_name){return (domina.normalize_seq.cljs$core$IFn$_invoke$arity$1 ? domina.normalize_seq.cljs$core$IFn$_invoke$arity$1(goog.dom.getElementsByClass(cljs.core.name(class_name))) : domina.normalize_seq.call(null,goog.dom.getElementsByClass(cljs.core.name(class_name))));
});
/**
* Gets all the child nodes of the elements in a content. Same as (xpath content '*') but more efficient.
*/
domina.children = (function children(content){return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$2(goog.dom.getChildren,domina.nodes(content)));
});
/**
* Returns the deepest common ancestor of the argument contents (which are presumed to be single nodes), or nil if they are from different documents.
* @param {...*} var_args
*/
domina.common_ancestor = (function() { 
var common_ancestor__delegate = function (contents){return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(goog.dom.findCommonAncestor,cljs.core.map.cljs$core$IFn$_invoke$arity$2(domina.single_node,contents));
};
var common_ancestor = function (var_args){
var contents = null;if (arguments.length > 0) {
  contents = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return common_ancestor__delegate.call(this,contents);};
common_ancestor.cljs$lang$maxFixedArity = 0;
common_ancestor.cljs$lang$applyTo = (function (arglist__42596){
var contents = cljs.core.seq(arglist__42596);
return common_ancestor__delegate(contents);
});
common_ancestor.cljs$core$IFn$_invoke$arity$variadic = common_ancestor__delegate;
return common_ancestor;
})()
;
/**
* Returns true if the first argument is an ancestor of the second argument. Presumes both arguments are single-node contents.
*/
domina.ancestor_QMARK_ = (function ancestor_QMARK_(ancestor_content,descendant_content){return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(domina.common_ancestor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([ancestor_content,descendant_content], 0)),domina.single_node(ancestor_content));
});
/**
* Returns a deep clone of content.
*/
domina.clone = (function clone(content){return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__42597_SHARP_){return p1__42597_SHARP_.cloneNode(true);
}),domina.nodes(content));
});
/**
* Given a parent and child contents, appends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.append_BANG_ = (function append_BANG_(parent_content,child_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3(goog.dom.appendChild,parent_content,child_content) : domina.apply_with_cloning.call(null,goog.dom.appendChild,parent_content,child_content));
return parent_content;
});
/**
* Given a parent and child contents, appends each of the children to all of the parents at the specified index. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__42598_SHARP_,p2__42599_SHARP_){return goog.dom.insertChildAt(p1__42598_SHARP_,p2__42599_SHARP_,idx);
}),parent_content,child_content) : domina.apply_with_cloning.call(null,(function (p1__42598_SHARP_,p2__42599_SHARP_){return goog.dom.insertChildAt(p1__42598_SHARP_,p2__42599_SHARP_,idx);
}),parent_content,child_content));
return parent_content;
});
/**
* Given a parent and child contents, prepends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.prepend_BANG_ = (function prepend_BANG_(parent_content,child_content){domina.insert_BANG_(parent_content,child_content,(0));
return parent_content;
});
/**
* Given a content and some new content, inserts the new content immediately before the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__42601_SHARP_,p2__42600_SHARP_){return goog.dom.insertSiblingBefore(p2__42600_SHARP_,p1__42601_SHARP_);
}),content,new_content) : domina.apply_with_cloning.call(null,(function (p1__42601_SHARP_,p2__42600_SHARP_){return goog.dom.insertSiblingBefore(p2__42600_SHARP_,p1__42601_SHARP_);
}),content,new_content));
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__42603_SHARP_,p2__42602_SHARP_){return goog.dom.insertSiblingAfter(p2__42602_SHARP_,p1__42603_SHARP_);
}),content,new_content) : domina.apply_with_cloning.call(null,(function (p1__42603_SHARP_,p2__42602_SHARP_){return goog.dom.insertSiblingAfter(p2__42602_SHARP_,p1__42603_SHARP_);
}),content,new_content));
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__42605_SHARP_,p2__42604_SHARP_){return goog.dom.replaceNode(p2__42604_SHARP_,p1__42605_SHARP_);
}),old_content,new_content) : domina.apply_with_cloning.call(null,(function (p1__42605_SHARP_,p2__42604_SHARP_){return goog.dom.replaceNode(p2__42604_SHARP_,p1__42605_SHARP_);
}),old_content,new_content));
return old_content;
});
/**
* Removes all the nodes in a content from the DOM and returns them.
*/
domina.detach_BANG_ = (function detach_BANG_(content){return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(goog.dom.removeNode,domina.nodes(content)));
});
/**
* Removes all the nodes in a content from the DOM. Returns nil.
*/
domina.destroy_BANG_ = (function destroy_BANG_(content){return cljs.core.dorun.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(goog.dom.removeNode,domina.nodes(content)));
});
/**
* Removes all the child nodes in a content from the DOM. Returns the original content.
*/
domina.destroy_children_BANG_ = (function destroy_children_BANG_(content){cljs.core.dorun.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(goog.dom.removeChildren,domina.nodes(content)));
return content;
});
/**
* Gets the value of a CSS property. Assumes content will be a single node. Name may be a string or keyword. Returns nil if there is no value set for the style.
*/
domina.style = (function style(content,name){var s = goog.style.getStyle(domina.single_node(content),cljs.core.name(name));if(cljs.core.truth_(clojure.string.blank_QMARK_(s)))
{return null;
} else
{return s;
}
});
/**
* Gets the value of an HTML attribute. Assumes content will be a single node. Name may be a stirng or keyword. Returns nil if there is no value set for the style.
*/
domina.attr = (function attr(content,name){return domina.single_node(content).getAttribute(cljs.core.name(name));
});
/**
* Sets the value of a CSS property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
* @param {...*} var_args
*/
domina.set_style_BANG_ = (function() { 
var set_style_BANG___delegate = function (content,name,value){var seq__42610_42614 = cljs.core.seq(domina.nodes(content));var chunk__42611_42615 = null;var count__42612_42616 = (0);var i__42613_42617 = (0);while(true){
if((i__42613_42617 < count__42612_42616))
{var n_42618 = chunk__42611_42615.cljs$core$IIndexed$_nth$arity$2(null,i__42613_42617);goog.style.setStyle(n_42618,cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__42619 = seq__42610_42614;
var G__42620 = chunk__42611_42615;
var G__42621 = count__42612_42616;
var G__42622 = (i__42613_42617 + (1));
seq__42610_42614 = G__42619;
chunk__42611_42615 = G__42620;
count__42612_42616 = G__42621;
i__42613_42617 = G__42622;
continue;
}
} else
{var temp__4126__auto___42623 = cljs.core.seq(seq__42610_42614);if(temp__4126__auto___42623)
{var seq__42610_42624__$1 = temp__4126__auto___42623;if(cljs.core.chunked_seq_QMARK_(seq__42610_42624__$1))
{var c__4299__auto___42625 = cljs.core.chunk_first(seq__42610_42624__$1);{
var G__42626 = cljs.core.chunk_rest(seq__42610_42624__$1);
var G__42627 = c__4299__auto___42625;
var G__42628 = cljs.core.count(c__4299__auto___42625);
var G__42629 = (0);
seq__42610_42614 = G__42626;
chunk__42611_42615 = G__42627;
count__42612_42616 = G__42628;
i__42613_42617 = G__42629;
continue;
}
} else
{var n_42630 = cljs.core.first(seq__42610_42624__$1);goog.style.setStyle(n_42630,cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__42631 = cljs.core.next(seq__42610_42624__$1);
var G__42632 = null;
var G__42633 = (0);
var G__42634 = (0);
seq__42610_42614 = G__42631;
chunk__42611_42615 = G__42632;
count__42612_42616 = G__42633;
i__42613_42617 = G__42634;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__42635){
var content = cljs.core.first(arglist__42635);
arglist__42635 = cljs.core.next(arglist__42635);
var name = cljs.core.first(arglist__42635);
var value = cljs.core.rest(arglist__42635);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__42640_42644 = cljs.core.seq(domina.nodes(content));var chunk__42641_42645 = null;var count__42642_42646 = (0);var i__42643_42647 = (0);while(true){
if((i__42643_42647 < count__42642_42646))
{var n_42648 = chunk__42641_42645.cljs$core$IIndexed$_nth$arity$2(null,i__42643_42647);n_42648.setAttribute(cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__42649 = seq__42640_42644;
var G__42650 = chunk__42641_42645;
var G__42651 = count__42642_42646;
var G__42652 = (i__42643_42647 + (1));
seq__42640_42644 = G__42649;
chunk__42641_42645 = G__42650;
count__42642_42646 = G__42651;
i__42643_42647 = G__42652;
continue;
}
} else
{var temp__4126__auto___42653 = cljs.core.seq(seq__42640_42644);if(temp__4126__auto___42653)
{var seq__42640_42654__$1 = temp__4126__auto___42653;if(cljs.core.chunked_seq_QMARK_(seq__42640_42654__$1))
{var c__4299__auto___42655 = cljs.core.chunk_first(seq__42640_42654__$1);{
var G__42656 = cljs.core.chunk_rest(seq__42640_42654__$1);
var G__42657 = c__4299__auto___42655;
var G__42658 = cljs.core.count(c__4299__auto___42655);
var G__42659 = (0);
seq__42640_42644 = G__42656;
chunk__42641_42645 = G__42657;
count__42642_42646 = G__42658;
i__42643_42647 = G__42659;
continue;
}
} else
{var n_42660 = cljs.core.first(seq__42640_42654__$1);n_42660.setAttribute(cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__42661 = cljs.core.next(seq__42640_42654__$1);
var G__42662 = null;
var G__42663 = (0);
var G__42664 = (0);
seq__42640_42644 = G__42661;
chunk__42641_42645 = G__42662;
count__42642_42646 = G__42663;
i__42643_42647 = G__42664;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__42665){
var content = cljs.core.first(arglist__42665);
arglist__42665 = cljs.core.next(arglist__42665);
var name = cljs.core.first(arglist__42665);
var value = cljs.core.rest(arglist__42665);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__42670_42674 = cljs.core.seq(domina.nodes(content));var chunk__42671_42675 = null;var count__42672_42676 = (0);var i__42673_42677 = (0);while(true){
if((i__42673_42677 < count__42672_42676))
{var n_42678 = chunk__42671_42675.cljs$core$IIndexed$_nth$arity$2(null,i__42673_42677);n_42678.removeAttribute(cljs.core.name(name));
{
var G__42679 = seq__42670_42674;
var G__42680 = chunk__42671_42675;
var G__42681 = count__42672_42676;
var G__42682 = (i__42673_42677 + (1));
seq__42670_42674 = G__42679;
chunk__42671_42675 = G__42680;
count__42672_42676 = G__42681;
i__42673_42677 = G__42682;
continue;
}
} else
{var temp__4126__auto___42683 = cljs.core.seq(seq__42670_42674);if(temp__4126__auto___42683)
{var seq__42670_42684__$1 = temp__4126__auto___42683;if(cljs.core.chunked_seq_QMARK_(seq__42670_42684__$1))
{var c__4299__auto___42685 = cljs.core.chunk_first(seq__42670_42684__$1);{
var G__42686 = cljs.core.chunk_rest(seq__42670_42684__$1);
var G__42687 = c__4299__auto___42685;
var G__42688 = cljs.core.count(c__4299__auto___42685);
var G__42689 = (0);
seq__42670_42674 = G__42686;
chunk__42671_42675 = G__42687;
count__42672_42676 = G__42688;
i__42673_42677 = G__42689;
continue;
}
} else
{var n_42690 = cljs.core.first(seq__42670_42684__$1);n_42690.removeAttribute(cljs.core.name(name));
{
var G__42691 = cljs.core.next(seq__42670_42684__$1);
var G__42692 = null;
var G__42693 = (0);
var G__42694 = (0);
seq__42670_42674 = G__42691;
chunk__42671_42675 = G__42692;
count__42672_42676 = G__42693;
i__42673_42677 = G__42694;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,pair){var vec__42696 = pair.split(/\s*:\s*/);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42696,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42696,(1),null);if(cljs.core.truth_((function (){var and__3531__auto__ = k;if(cljs.core.truth_(and__3531__auto__))
{return v;
} else
{return and__3531__auto__;
}
})()))
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k.toLowerCase()),v);
} else
{return acc;
}
}),cljs.core.PersistentArrayMap.EMPTY,style.split(/\s*;\s*/));
});
/**
* Returns a map of the CSS styles/values. Assumes content will be a single node. Style names are returned as keywords.
*/
domina.styles = (function styles(content){var style = domina.attr(content,"style");if(typeof style === 'string')
{return domina.parse_style_attributes(style);
} else
{if((style == null))
{return cljs.core.PersistentArrayMap.EMPTY;
} else
{if(cljs.core.truth_(style.cssText))
{return domina.parse_style_attributes(style.cssText);
} else
{if(cljs.core.constant$keyword$762)
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
domina.attrs = (function attrs(content){var node = domina.single_node(content);var attrs__$1 = node.attributes;return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.filter(cljs.core.complement(cljs.core.nil_QMARK_),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (node,attrs__$1){
return (function (p1__42697_SHARP_){var attr = attrs__$1.item(p1__42697_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(null,value)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
});})(node,attrs__$1))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__42704_42710 = cljs.core.seq(styles);var chunk__42705_42711 = null;var count__42706_42712 = (0);var i__42707_42713 = (0);while(true){
if((i__42707_42713 < count__42706_42712))
{var vec__42708_42714 = chunk__42705_42711.cljs$core$IIndexed$_nth$arity$2(null,i__42707_42713);var name_42715 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42708_42714,(0),null);var value_42716 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42708_42714,(1),null);domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_42715,cljs.core.array_seq([value_42716], 0));
{
var G__42717 = seq__42704_42710;
var G__42718 = chunk__42705_42711;
var G__42719 = count__42706_42712;
var G__42720 = (i__42707_42713 + (1));
seq__42704_42710 = G__42717;
chunk__42705_42711 = G__42718;
count__42706_42712 = G__42719;
i__42707_42713 = G__42720;
continue;
}
} else
{var temp__4126__auto___42721 = cljs.core.seq(seq__42704_42710);if(temp__4126__auto___42721)
{var seq__42704_42722__$1 = temp__4126__auto___42721;if(cljs.core.chunked_seq_QMARK_(seq__42704_42722__$1))
{var c__4299__auto___42723 = cljs.core.chunk_first(seq__42704_42722__$1);{
var G__42724 = cljs.core.chunk_rest(seq__42704_42722__$1);
var G__42725 = c__4299__auto___42723;
var G__42726 = cljs.core.count(c__4299__auto___42723);
var G__42727 = (0);
seq__42704_42710 = G__42724;
chunk__42705_42711 = G__42725;
count__42706_42712 = G__42726;
i__42707_42713 = G__42727;
continue;
}
} else
{var vec__42709_42728 = cljs.core.first(seq__42704_42722__$1);var name_42729 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42709_42728,(0),null);var value_42730 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42709_42728,(1),null);domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_42729,cljs.core.array_seq([value_42730], 0));
{
var G__42731 = cljs.core.next(seq__42704_42722__$1);
var G__42732 = null;
var G__42733 = (0);
var G__42734 = (0);
seq__42704_42710 = G__42731;
chunk__42705_42711 = G__42732;
count__42706_42712 = G__42733;
i__42707_42713 = G__42734;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__42741_42747 = cljs.core.seq(attrs);var chunk__42742_42748 = null;var count__42743_42749 = (0);var i__42744_42750 = (0);while(true){
if((i__42744_42750 < count__42743_42749))
{var vec__42745_42751 = chunk__42742_42748.cljs$core$IIndexed$_nth$arity$2(null,i__42744_42750);var name_42752 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42745_42751,(0),null);var value_42753 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42745_42751,(1),null);domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_42752,cljs.core.array_seq([value_42753], 0));
{
var G__42754 = seq__42741_42747;
var G__42755 = chunk__42742_42748;
var G__42756 = count__42743_42749;
var G__42757 = (i__42744_42750 + (1));
seq__42741_42747 = G__42754;
chunk__42742_42748 = G__42755;
count__42743_42749 = G__42756;
i__42744_42750 = G__42757;
continue;
}
} else
{var temp__4126__auto___42758 = cljs.core.seq(seq__42741_42747);if(temp__4126__auto___42758)
{var seq__42741_42759__$1 = temp__4126__auto___42758;if(cljs.core.chunked_seq_QMARK_(seq__42741_42759__$1))
{var c__4299__auto___42760 = cljs.core.chunk_first(seq__42741_42759__$1);{
var G__42761 = cljs.core.chunk_rest(seq__42741_42759__$1);
var G__42762 = c__4299__auto___42760;
var G__42763 = cljs.core.count(c__4299__auto___42760);
var G__42764 = (0);
seq__42741_42747 = G__42761;
chunk__42742_42748 = G__42762;
count__42743_42749 = G__42763;
i__42744_42750 = G__42764;
continue;
}
} else
{var vec__42746_42765 = cljs.core.first(seq__42741_42759__$1);var name_42766 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42746_42765,(0),null);var value_42767 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42746_42765,(1),null);domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_42766,cljs.core.array_seq([value_42767], 0));
{
var G__42768 = cljs.core.next(seq__42741_42759__$1);
var G__42769 = null;
var G__42770 = (0);
var G__42771 = (0);
seq__42741_42747 = G__42768;
chunk__42742_42748 = G__42769;
count__42743_42749 = G__42770;
i__42744_42750 = G__42771;
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
domina.has_class_QMARK_ = (function has_class_QMARK_(content,class$){return goog.dom.classes.has(domina.single_node(content),class$);
});
/**
* Adds the specified CSS class to each node in the content.
*/
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__42776_42780 = cljs.core.seq(domina.nodes(content));var chunk__42777_42781 = null;var count__42778_42782 = (0);var i__42779_42783 = (0);while(true){
if((i__42779_42783 < count__42778_42782))
{var node_42784 = chunk__42777_42781.cljs$core$IIndexed$_nth$arity$2(null,i__42779_42783);goog.dom.classes.add(node_42784,class$);
{
var G__42785 = seq__42776_42780;
var G__42786 = chunk__42777_42781;
var G__42787 = count__42778_42782;
var G__42788 = (i__42779_42783 + (1));
seq__42776_42780 = G__42785;
chunk__42777_42781 = G__42786;
count__42778_42782 = G__42787;
i__42779_42783 = G__42788;
continue;
}
} else
{var temp__4126__auto___42789 = cljs.core.seq(seq__42776_42780);if(temp__4126__auto___42789)
{var seq__42776_42790__$1 = temp__4126__auto___42789;if(cljs.core.chunked_seq_QMARK_(seq__42776_42790__$1))
{var c__4299__auto___42791 = cljs.core.chunk_first(seq__42776_42790__$1);{
var G__42792 = cljs.core.chunk_rest(seq__42776_42790__$1);
var G__42793 = c__4299__auto___42791;
var G__42794 = cljs.core.count(c__4299__auto___42791);
var G__42795 = (0);
seq__42776_42780 = G__42792;
chunk__42777_42781 = G__42793;
count__42778_42782 = G__42794;
i__42779_42783 = G__42795;
continue;
}
} else
{var node_42796 = cljs.core.first(seq__42776_42790__$1);goog.dom.classes.add(node_42796,class$);
{
var G__42797 = cljs.core.next(seq__42776_42790__$1);
var G__42798 = null;
var G__42799 = (0);
var G__42800 = (0);
seq__42776_42780 = G__42797;
chunk__42777_42781 = G__42798;
count__42778_42782 = G__42799;
i__42779_42783 = G__42800;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__42805_42809 = cljs.core.seq(domina.nodes(content));var chunk__42806_42810 = null;var count__42807_42811 = (0);var i__42808_42812 = (0);while(true){
if((i__42808_42812 < count__42807_42811))
{var node_42813 = chunk__42806_42810.cljs$core$IIndexed$_nth$arity$2(null,i__42808_42812);goog.dom.classes.remove(node_42813,class$);
{
var G__42814 = seq__42805_42809;
var G__42815 = chunk__42806_42810;
var G__42816 = count__42807_42811;
var G__42817 = (i__42808_42812 + (1));
seq__42805_42809 = G__42814;
chunk__42806_42810 = G__42815;
count__42807_42811 = G__42816;
i__42808_42812 = G__42817;
continue;
}
} else
{var temp__4126__auto___42818 = cljs.core.seq(seq__42805_42809);if(temp__4126__auto___42818)
{var seq__42805_42819__$1 = temp__4126__auto___42818;if(cljs.core.chunked_seq_QMARK_(seq__42805_42819__$1))
{var c__4299__auto___42820 = cljs.core.chunk_first(seq__42805_42819__$1);{
var G__42821 = cljs.core.chunk_rest(seq__42805_42819__$1);
var G__42822 = c__4299__auto___42820;
var G__42823 = cljs.core.count(c__4299__auto___42820);
var G__42824 = (0);
seq__42805_42809 = G__42821;
chunk__42806_42810 = G__42822;
count__42807_42811 = G__42823;
i__42808_42812 = G__42824;
continue;
}
} else
{var node_42825 = cljs.core.first(seq__42805_42819__$1);goog.dom.classes.remove(node_42825,class$);
{
var G__42826 = cljs.core.next(seq__42805_42819__$1);
var G__42827 = null;
var G__42828 = (0);
var G__42829 = (0);
seq__42805_42809 = G__42826;
chunk__42806_42810 = G__42827;
count__42807_42811 = G__42828;
i__42808_42812 = G__42829;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__42834_42838 = cljs.core.seq(domina.nodes(content));var chunk__42835_42839 = null;var count__42836_42840 = (0);var i__42837_42841 = (0);while(true){
if((i__42837_42841 < count__42836_42840))
{var node_42842 = chunk__42835_42839.cljs$core$IIndexed$_nth$arity$2(null,i__42837_42841);goog.dom.classes.toggle(node_42842,class$);
{
var G__42843 = seq__42834_42838;
var G__42844 = chunk__42835_42839;
var G__42845 = count__42836_42840;
var G__42846 = (i__42837_42841 + (1));
seq__42834_42838 = G__42843;
chunk__42835_42839 = G__42844;
count__42836_42840 = G__42845;
i__42837_42841 = G__42846;
continue;
}
} else
{var temp__4126__auto___42847 = cljs.core.seq(seq__42834_42838);if(temp__4126__auto___42847)
{var seq__42834_42848__$1 = temp__4126__auto___42847;if(cljs.core.chunked_seq_QMARK_(seq__42834_42848__$1))
{var c__4299__auto___42849 = cljs.core.chunk_first(seq__42834_42848__$1);{
var G__42850 = cljs.core.chunk_rest(seq__42834_42848__$1);
var G__42851 = c__4299__auto___42849;
var G__42852 = cljs.core.count(c__4299__auto___42849);
var G__42853 = (0);
seq__42834_42838 = G__42850;
chunk__42835_42839 = G__42851;
count__42836_42840 = G__42852;
i__42837_42841 = G__42853;
continue;
}
} else
{var node_42854 = cljs.core.first(seq__42834_42848__$1);goog.dom.classes.toggle(node_42854,class$);
{
var G__42855 = cljs.core.next(seq__42834_42848__$1);
var G__42856 = null;
var G__42857 = (0);
var G__42858 = (0);
seq__42834_42838 = G__42855;
chunk__42835_42839 = G__42856;
count__42836_42840 = G__42857;
i__42837_42841 = G__42858;
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
domina.classes = (function classes(content){return cljs.core.seq(goog.dom.classes.get(domina.single_node(content)));
});
/**
* Sets the class attribute of the content nodes to classes, which can
* be either a class attribute string or a seq of classname strings.
*/
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_42867__$1 = ((cljs.core.coll_QMARK_(classes))?clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",classes):classes);var seq__42863_42868 = cljs.core.seq(domina.nodes(content));var chunk__42864_42869 = null;var count__42865_42870 = (0);var i__42866_42871 = (0);while(true){
if((i__42866_42871 < count__42865_42870))
{var node_42872 = chunk__42864_42869.cljs$core$IIndexed$_nth$arity$2(null,i__42866_42871);goog.dom.classes.set(node_42872,classes_42867__$1);
{
var G__42873 = seq__42863_42868;
var G__42874 = chunk__42864_42869;
var G__42875 = count__42865_42870;
var G__42876 = (i__42866_42871 + (1));
seq__42863_42868 = G__42873;
chunk__42864_42869 = G__42874;
count__42865_42870 = G__42875;
i__42866_42871 = G__42876;
continue;
}
} else
{var temp__4126__auto___42877 = cljs.core.seq(seq__42863_42868);if(temp__4126__auto___42877)
{var seq__42863_42878__$1 = temp__4126__auto___42877;if(cljs.core.chunked_seq_QMARK_(seq__42863_42878__$1))
{var c__4299__auto___42879 = cljs.core.chunk_first(seq__42863_42878__$1);{
var G__42880 = cljs.core.chunk_rest(seq__42863_42878__$1);
var G__42881 = c__4299__auto___42879;
var G__42882 = cljs.core.count(c__4299__auto___42879);
var G__42883 = (0);
seq__42863_42868 = G__42880;
chunk__42864_42869 = G__42881;
count__42865_42870 = G__42882;
i__42866_42871 = G__42883;
continue;
}
} else
{var node_42884 = cljs.core.first(seq__42863_42878__$1);goog.dom.classes.set(node_42884,classes_42867__$1);
{
var G__42885 = cljs.core.next(seq__42863_42878__$1);
var G__42886 = null;
var G__42887 = (0);
var G__42888 = (0);
seq__42863_42868 = G__42885;
chunk__42864_42869 = G__42886;
count__42865_42870 = G__42887;
i__42866_42871 = G__42888;
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
domina.text = (function text(content){return goog.string.trim(goog.dom.getTextContent(domina.single_node(content)));
});
/**
* Sets the text value of all the nodes in the given content.
*/
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__42893_42897 = cljs.core.seq(domina.nodes(content));var chunk__42894_42898 = null;var count__42895_42899 = (0);var i__42896_42900 = (0);while(true){
if((i__42896_42900 < count__42895_42899))
{var node_42901 = chunk__42894_42898.cljs$core$IIndexed$_nth$arity$2(null,i__42896_42900);goog.dom.setTextContent(node_42901,value);
{
var G__42902 = seq__42893_42897;
var G__42903 = chunk__42894_42898;
var G__42904 = count__42895_42899;
var G__42905 = (i__42896_42900 + (1));
seq__42893_42897 = G__42902;
chunk__42894_42898 = G__42903;
count__42895_42899 = G__42904;
i__42896_42900 = G__42905;
continue;
}
} else
{var temp__4126__auto___42906 = cljs.core.seq(seq__42893_42897);if(temp__4126__auto___42906)
{var seq__42893_42907__$1 = temp__4126__auto___42906;if(cljs.core.chunked_seq_QMARK_(seq__42893_42907__$1))
{var c__4299__auto___42908 = cljs.core.chunk_first(seq__42893_42907__$1);{
var G__42909 = cljs.core.chunk_rest(seq__42893_42907__$1);
var G__42910 = c__4299__auto___42908;
var G__42911 = cljs.core.count(c__4299__auto___42908);
var G__42912 = (0);
seq__42893_42897 = G__42909;
chunk__42894_42898 = G__42910;
count__42895_42899 = G__42911;
i__42896_42900 = G__42912;
continue;
}
} else
{var node_42913 = cljs.core.first(seq__42893_42907__$1);goog.dom.setTextContent(node_42913,value);
{
var G__42914 = cljs.core.next(seq__42893_42907__$1);
var G__42915 = null;
var G__42916 = (0);
var G__42917 = (0);
seq__42893_42897 = G__42914;
chunk__42894_42898 = G__42915;
count__42895_42899 = G__42916;
i__42896_42900 = G__42917;
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
domina.value = (function value(content){return goog.dom.forms.getValue(domina.single_node(content));
});
/**
* Sets the value of all the nodes (presumably form fields) in the given content.
*/
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__42922_42926 = cljs.core.seq(domina.nodes(content));var chunk__42923_42927 = null;var count__42924_42928 = (0);var i__42925_42929 = (0);while(true){
if((i__42925_42929 < count__42924_42928))
{var node_42930 = chunk__42923_42927.cljs$core$IIndexed$_nth$arity$2(null,i__42925_42929);goog.dom.forms.setValue(node_42930,value);
{
var G__42931 = seq__42922_42926;
var G__42932 = chunk__42923_42927;
var G__42933 = count__42924_42928;
var G__42934 = (i__42925_42929 + (1));
seq__42922_42926 = G__42931;
chunk__42923_42927 = G__42932;
count__42924_42928 = G__42933;
i__42925_42929 = G__42934;
continue;
}
} else
{var temp__4126__auto___42935 = cljs.core.seq(seq__42922_42926);if(temp__4126__auto___42935)
{var seq__42922_42936__$1 = temp__4126__auto___42935;if(cljs.core.chunked_seq_QMARK_(seq__42922_42936__$1))
{var c__4299__auto___42937 = cljs.core.chunk_first(seq__42922_42936__$1);{
var G__42938 = cljs.core.chunk_rest(seq__42922_42936__$1);
var G__42939 = c__4299__auto___42937;
var G__42940 = cljs.core.count(c__4299__auto___42937);
var G__42941 = (0);
seq__42922_42926 = G__42938;
chunk__42923_42927 = G__42939;
count__42924_42928 = G__42940;
i__42925_42929 = G__42941;
continue;
}
} else
{var node_42942 = cljs.core.first(seq__42922_42936__$1);goog.dom.forms.setValue(node_42942,value);
{
var G__42943 = cljs.core.next(seq__42922_42936__$1);
var G__42944 = null;
var G__42945 = (0);
var G__42946 = (0);
seq__42922_42926 = G__42943;
chunk__42923_42927 = G__42944;
count__42924_42928 = G__42945;
i__42925_42929 = G__42946;
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
domina.html = (function html(content){return domina.single_node(content).innerHTML;
});
domina.replace_children_BANG_ = (function replace_children_BANG_(content,inner_content){return domina.append_BANG_(domina.destroy_children_BANG_(content),inner_content);
});
domina.set_inner_html_BANG_ = (function set_inner_html_BANG_(content,html_string){var allows_inner_html_QMARK_ = cljs.core.not(cljs.core.re_find(domina.re_no_inner_html,html_string));var leading_whitespace_QMARK_ = cljs.core.re_find(domina.re_leading_whitespace,html_string);var tag_name = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second(cljs.core.re_find(domina.re_tag_name,html_string)))).toLowerCase();var special_tag_QMARK_ = cljs.core.contains_QMARK_(domina.wrap_map,tag_name);if(cljs.core.truth_((function (){var and__3531__auto__ = allows_inner_html_QMARK_;if(and__3531__auto__)
{var and__3531__auto____$1 = (function (){var or__3543__auto__ = domina.support.leading_whitespace_QMARK_;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return cljs.core.not(leading_whitespace_QMARK_);
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
{var value_42957 = clojure.string.replace(html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__42953_42958 = cljs.core.seq(domina.nodes(content));var chunk__42954_42959 = null;var count__42955_42960 = (0);var i__42956_42961 = (0);while(true){
if((i__42956_42961 < count__42955_42960))
{var node_42962 = chunk__42954_42959.cljs$core$IIndexed$_nth$arity$2(null,i__42956_42961);node_42962.innerHTML = value_42957;
{
var G__42963 = seq__42953_42958;
var G__42964 = chunk__42954_42959;
var G__42965 = count__42955_42960;
var G__42966 = (i__42956_42961 + (1));
seq__42953_42958 = G__42963;
chunk__42954_42959 = G__42964;
count__42955_42960 = G__42965;
i__42956_42961 = G__42966;
continue;
}
} else
{var temp__4126__auto___42967 = cljs.core.seq(seq__42953_42958);if(temp__4126__auto___42967)
{var seq__42953_42968__$1 = temp__4126__auto___42967;if(cljs.core.chunked_seq_QMARK_(seq__42953_42968__$1))
{var c__4299__auto___42969 = cljs.core.chunk_first(seq__42953_42968__$1);{
var G__42970 = cljs.core.chunk_rest(seq__42953_42968__$1);
var G__42971 = c__4299__auto___42969;
var G__42972 = cljs.core.count(c__4299__auto___42969);
var G__42973 = (0);
seq__42953_42958 = G__42970;
chunk__42954_42959 = G__42971;
count__42955_42960 = G__42972;
i__42956_42961 = G__42973;
continue;
}
} else
{var node_42974 = cljs.core.first(seq__42953_42968__$1);node_42974.innerHTML = value_42957;
{
var G__42975 = cljs.core.next(seq__42953_42968__$1);
var G__42976 = null;
var G__42977 = (0);
var G__42978 = (0);
seq__42953_42958 = G__42975;
chunk__42954_42959 = G__42976;
count__42955_42960 = G__42977;
i__42956_42961 = G__42978;
continue;
}
}
} else
{}
}
break;
}
}catch (e42952){if((e42952 instanceof Error))
{var e_42979 = e42952;domina.replace_children_BANG_(content,value_42957);
} else
{if(cljs.core.constant$keyword$762)
{throw e42952;
} else
{}
}
}} else
{domina.replace_children_BANG_(content,html_string);
}
return content;
});
/**
* Sets the innerHTML value for all the nodes in the given content.
*/
domina.set_html_BANG_ = (function set_html_BANG_(content,inner_content){if(typeof inner_content === 'string')
{return domina.set_inner_html_BANG_(content,inner_content);
} else
{return domina.replace_children_BANG_(content,inner_content);
}
});
/**
* Returns data associated with a node for a given key. Assumes
* content is a single node. If the bubble parameter is set to true,
* will search parent nodes if the key is not found.
*/
domina.get_data = (function() {
var get_data = null;
var get_data__2 = (function (node,key){return get_data.cljs$core$IFn$_invoke$arity$3(node,key,false);
});
var get_data__3 = (function (node,key,bubble){var m = domina.single_node(node).__domina_data;var value = (cljs.core.truth_(m)?cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,key):null);if(cljs.core.truth_((function (){var and__3531__auto__ = bubble;if(cljs.core.truth_(and__3531__auto__))
{return (value == null);
} else
{return and__3531__auto__;
}
})()))
{var temp__4126__auto__ = domina.single_node(node).parentNode;if(cljs.core.truth_(temp__4126__auto__))
{var parent = temp__4126__auto__;return get_data.cljs$core$IFn$_invoke$arity$3(parent,key,true);
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
domina.set_data_BANG_ = (function set_data_BANG_(node,key,value){var m = (function (){var or__3543__auto__ = domina.single_node(node).__domina_data;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
})();return domina.single_node(node).__domina_data = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,key,value);
});
/**
* Takes a two-arg function, a reference DomContent and new
* DomContent. Applies the function for each reference / content
* combination. Uses clones of the new content for each additional
* parent after the first.
*/
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes(parent_content);var children = domina.nodes(child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__42986_42990 = cljs.core.seq(children);var chunk__42987_42991 = null;var count__42988_42992 = (0);var i__42989_42993 = (0);while(true){
if((i__42989_42993 < count__42988_42992))
{var child_42994 = chunk__42987_42991.cljs$core$IIndexed$_nth$arity$2(null,i__42989_42993);frag.appendChild(child_42994);
{
var G__42995 = seq__42986_42990;
var G__42996 = chunk__42987_42991;
var G__42997 = count__42988_42992;
var G__42998 = (i__42989_42993 + (1));
seq__42986_42990 = G__42995;
chunk__42987_42991 = G__42996;
count__42988_42992 = G__42997;
i__42989_42993 = G__42998;
continue;
}
} else
{var temp__4126__auto___42999 = cljs.core.seq(seq__42986_42990);if(temp__4126__auto___42999)
{var seq__42986_43000__$1 = temp__4126__auto___42999;if(cljs.core.chunked_seq_QMARK_(seq__42986_43000__$1))
{var c__4299__auto___43001 = cljs.core.chunk_first(seq__42986_43000__$1);{
var G__43002 = cljs.core.chunk_rest(seq__42986_43000__$1);
var G__43003 = c__4299__auto___43001;
var G__43004 = cljs.core.count(c__4299__auto___43001);
var G__43005 = (0);
seq__42986_42990 = G__43002;
chunk__42987_42991 = G__43003;
count__42988_42992 = G__43004;
i__42989_42993 = G__43005;
continue;
}
} else
{var child_43006 = cljs.core.first(seq__42986_43000__$1);frag.appendChild(child_43006);
{
var G__43007 = cljs.core.next(seq__42986_43000__$1);
var G__43008 = null;
var G__43009 = (0);
var G__43010 = (0);
seq__42986_42990 = G__43007;
chunk__42987_42991 = G__43008;
count__42988_42992 = G__43009;
i__42989_42993 = G__43010;
continue;
}
}
} else
{}
}
break;
}
return frag;
})();var other_children = cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$2((cljs.core.count(parents) - (1)),((function (parents,children,first_child){
return (function (){return first_child.cloneNode(true);
});})(parents,children,first_child))
));if(cljs.core.seq(parents))
{(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(cljs.core.first(parents),first_child) : f.call(null,cljs.core.first(parents),first_child));
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (parents,children,first_child,other_children){
return (function (p1__42980_SHARP_,p2__42981_SHARP_){return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(p1__42980_SHARP_,p2__42981_SHARP_) : f.call(null,p1__42980_SHARP_,p2__42981_SHARP_));
});})(parents,children,first_child,other_children))
,cljs.core.rest(parents),other_children));
} else
{return null;
}
});
domina.lazy_nl_via_item = (function() {
var lazy_nl_via_item = null;
var lazy_nl_via_item__1 = (function (nl){return lazy_nl_via_item.cljs$core$IFn$_invoke$arity$2(nl,(0));
});
var lazy_nl_via_item__2 = (function (nl,n){if((n < nl.length))
{return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons(nl.item(n),lazy_nl_via_item.cljs$core$IFn$_invoke$arity$2(nl,(n + (1))));
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
var lazy_nl_via_array_ref__1 = (function (nl){return lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$2(nl,(0));
});
var lazy_nl_via_array_ref__2 = (function (nl,n){if((n < nl.length))
{return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons((nl[n]),lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$2(nl,(n + (1))));
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
{return domina.lazy_nl_via_item.cljs$core$IFn$_invoke$arity$1(nl);
} else
{return domina.lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$1(nl);
}
});
domina.array_like_QMARK_ = (function array_like_QMARK_(obj){var and__3531__auto__ = obj;if(cljs.core.truth_(and__3531__auto__))
{var and__3531__auto____$1 = cljs.core.not(obj.nodeName);if(and__3531__auto____$1)
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
{if((function (){var G__43012 = list_thing;if(G__43012)
{var bit__4193__auto__ = (G__43012.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4193__auto__) || (G__43012.cljs$core$ISeqable$))
{return true;
} else
{if((!G__43012.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__43012);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__43012);
}
})())
{return cljs.core.seq(list_thing);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_(list_thing)))
{return domina.lazy_nodelist(list_thing);
} else
{if(cljs.core.constant$keyword$763)
{return cljs.core.seq(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [list_thing], null));
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
{if((function (){var G__43013 = content;if(G__43013)
{var bit__4193__auto__ = (G__43013.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4193__auto__) || (G__43013.cljs$core$ISeqable$))
{return true;
} else
{if((!G__43013.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__43013);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__43013);
}
})())
{return cljs.core.seq(content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_(content)))
{return domina.lazy_nodelist(content);
} else
{if(cljs.core.constant$keyword$763)
{return cljs.core.seq(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [content], null));
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
{if((function (){var G__43014 = content;if(G__43014)
{var bit__4193__auto__ = (G__43014.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4193__auto__) || (G__43014.cljs$core$ISeqable$))
{return true;
} else
{if((!G__43014.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__43014);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__43014);
}
})())
{return cljs.core.first(content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_(content)))
{return content.item((0));
} else
{if(cljs.core.constant$keyword$763)
{return content;
} else
{return null;
}
}
}
}
}));
(domina.DomContent["string"] = true);
(domina.nodes["string"] = (function (s){return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(domina.nodes(domina.string_to_dom(s)));
}));
(domina.single_node["string"] = (function (s){return domina.single_node(domina.string_to_dom(s));
}));
if(cljs.core.truth_((typeof NodeList != 'undefined')))
{NodeList.prototype.cljs$core$ISeqable$ = true;
NodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){var nodelist__$1 = this;return domina.lazy_nodelist(nodelist__$1);
});
NodeList.prototype.cljs$core$IIndexed$ = true;
NodeList.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (nodelist,n){var nodelist__$1 = this;return nodelist__$1.item(n);
});
NodeList.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (nodelist,n,not_found){var nodelist__$1 = this;if((nodelist__$1.length <= n))
{return not_found;
} else
{return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(nodelist__$1,n);
}
});
NodeList.prototype.cljs$core$ICounted$ = true;
NodeList.prototype.cljs$core$ICounted$_count$arity$1 = (function (nodelist){var nodelist__$1 = this;return nodelist__$1.length;
});
} else
{}
if(cljs.core.truth_((typeof StaticNodeList != 'undefined')))
{StaticNodeList.prototype.cljs$core$ISeqable$ = true;
StaticNodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){var nodelist__$1 = this;return domina.lazy_nodelist(nodelist__$1);
});
StaticNodeList.prototype.cljs$core$IIndexed$ = true;
StaticNodeList.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (nodelist,n){var nodelist__$1 = this;return nodelist__$1.item(n);
});
StaticNodeList.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (nodelist,n,not_found){var nodelist__$1 = this;if((nodelist__$1.length <= n))
{return not_found;
} else
{return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(nodelist__$1,n);
}
});
StaticNodeList.prototype.cljs$core$ICounted$ = true;
StaticNodeList.prototype.cljs$core$ICounted$_count$arity$1 = (function (nodelist){var nodelist__$1 = this;return nodelist__$1.length;
});
} else
{}
if(cljs.core.truth_((typeof HTMLCollection != 'undefined')))
{HTMLCollection.prototype.cljs$core$ISeqable$ = true;
HTMLCollection.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){var coll__$1 = this;return domina.lazy_nodelist(coll__$1);
});
HTMLCollection.prototype.cljs$core$IIndexed$ = true;
HTMLCollection.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){var coll__$1 = this;return coll__$1.item(n);
});
HTMLCollection.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){var coll__$1 = this;if((coll__$1.length <= n))
{return not_found;
} else
{return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(coll__$1,n);
}
});
HTMLCollection.prototype.cljs$core$ICounted$ = true;
HTMLCollection.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){var coll__$1 = this;return coll__$1.length;
});
} else
{}
