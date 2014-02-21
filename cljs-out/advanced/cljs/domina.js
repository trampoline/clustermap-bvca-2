// Compiled by ClojureScript 0.0-2138
goog.provide('domina');
goog.require('cljs.core');
goog.require('goog.dom.classes');
goog.require('domina.support');
goog.require('goog.dom.classes');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.string');
goog.require('goog.dom.xml');
goog.require('goog.dom');
goog.require('goog.dom.forms');
goog.require('goog.dom');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('goog.style');
goog.require('clojure.string');
goog.require('goog.dom.xml');
goog.require('goog.style');
goog.require('goog.dom.forms');
goog.require('domina.support');
goog.require('goog.events');
goog.require('cljs.core');
domina.re_html = /<|&#?\w+;/;
domina.re_leading_whitespace = /^\s+/;
domina.re_xhtml_tag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/i;
domina.re_tag_name = /<([\w:]+)/;
domina.re_no_inner_html = /<(?:script|style)/i;
domina.re_tbody = /<tbody/i;
var opt_wrapper_27747 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_27748 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<table>","</table>"], null);var cell_wrapper_27749 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["col",cljs.core.constant$keyword$238,"tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,"",""], null),table_section_wrapper_27748,table_section_wrapper_27748,opt_wrapper_27747,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<fieldset>","</fieldset>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<map>","</map>"], null),cell_wrapper_27749,table_section_wrapper_27748,cell_wrapper_27749,opt_wrapper_27747,table_section_wrapper_27748,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody>","</tbody></table>"], null),table_section_wrapper_27748]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not(cljs.core.re_find(domina.re_tbody,html));var tbody = (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3394__auto__ = div.firstChild;if(cljs.core.truth_(and__3394__auto__))
{return div.firstChild.childNodes;
} else
{return and__3394__auto__;
}
})():(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__27754 = cljs.core.seq(tbody);var chunk__27755 = null;var count__27756 = 0;var i__27757 = 0;while(true){
if((i__27757 < count__27756))
{var child = chunk__27755.cljs$core$IIndexed$_nth$arity$2(null,i__27757);if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.nodeName,"tbody")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__27758 = seq__27754;
var G__27759 = chunk__27755;
var G__27760 = count__27756;
var G__27761 = (i__27757 + 1);
seq__27754 = G__27758;
chunk__27755 = G__27759;
count__27756 = G__27760;
i__27757 = G__27761;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__27754);if(temp__4092__auto__)
{var seq__27754__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__27754__$1))
{var c__4148__auto__ = cljs.core.chunk_first(seq__27754__$1);{
var G__27762 = cljs.core.chunk_rest(seq__27754__$1);
var G__27763 = c__4148__auto__;
var G__27764 = cljs.core.count(c__4148__auto__);
var G__27765 = 0;
seq__27754 = G__27762;
chunk__27755 = G__27763;
count__27756 = G__27764;
i__27757 = G__27765;
continue;
}
} else
{var child = cljs.core.first(seq__27754__$1);if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.nodeName,"tbody")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__27766 = cljs.core.next(seq__27754__$1);
var G__27767 = null;
var G__27768 = 0;
var G__27769 = 0;
seq__27754 = G__27766;
chunk__27755 = G__27767;
count__27756 = G__27768;
i__27757 = G__27769;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace(html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = [cljs.core.str(cljs.core.second(cljs.core.re_find(domina.re_tag_name,html__$1)))].join('').toLowerCase();var vec__27771 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(domina.wrap_map,tag_name,cljs.core.constant$keyword$238.cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27771,0,null);var start_wrap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27771,1,null);var end_wrap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27771,2,null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');
return div;
})();var level = depth;while(true){
if((level > 0))
{{
var G__27772 = wrapper.lastChild;
var G__27773 = (level - 1);
wrapper = G__27772;
level = G__27773;
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
if(cljs.core.truth_((function (){var and__3394__auto__ = cljs.core.not(domina.support.leading_whitespace_QMARK_);if(and__3394__auto__)
{return cljs.core.re_find(domina.re_leading_whitespace,html__$1);
} else
{return and__3394__auto__;
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
domina.DomContent = (function (){var obj27775 = {};return obj27775;
})();
domina.nodes = (function nodes(content){if((function (){var and__3394__auto__ = content;if(and__3394__auto__)
{return content.domina$DomContent$nodes$arity$1;
} else
{return and__3394__auto__;
}
})())
{return content.domina$DomContent$nodes$arity$1(content);
} else
{var x__4027__auto__ = (((content == null))?null:content);return (function (){var or__3406__auto__ = (domina.nodes[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (domina.nodes["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol("DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){if((function (){var and__3394__auto__ = nodeseq;if(and__3394__auto__)
{return nodeseq.domina$DomContent$single_node$arity$1;
} else
{return and__3394__auto__;
}
})())
{return nodeseq.domina$DomContent$single_node$arity$1(nodeseq);
} else
{var x__4027__auto__ = (((nodeseq == null))?null:nodeseq);return (function (){var or__3406__auto__ = (domina.single_node[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (domina.single_node["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
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
var log_debug__delegate = function (mesg){if(cljs.core.truth_((function (){var and__3394__auto__ = domina._STAR_debug_STAR_;if(cljs.core.truth_(and__3394__auto__))
{return !(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(window.console,undefined));
} else
{return and__3394__auto__;
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
log_debug.cljs$lang$applyTo = (function (arglist__27776){
var mesg = cljs.core.seq(arglist__27776);
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
log.cljs$lang$applyTo = (function (arglist__27777){
var mesg = cljs.core.seq(arglist__27777);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__27778){
var contents = cljs.core.seq(arglist__27778);
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
domina.clone = (function clone(content){return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__27779_SHARP_){return p1__27779_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__27780_SHARP_,p2__27781_SHARP_){return goog.dom.insertChildAt(p1__27780_SHARP_,p2__27781_SHARP_,idx);
}),parent_content,child_content) : domina.apply_with_cloning.call(null,(function (p1__27780_SHARP_,p2__27781_SHARP_){return goog.dom.insertChildAt(p1__27780_SHARP_,p2__27781_SHARP_,idx);
}),parent_content,child_content));
return parent_content;
});
/**
* Given a parent and child contents, prepends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.prepend_BANG_ = (function prepend_BANG_(parent_content,child_content){domina.insert_BANG_(parent_content,child_content,0);
return parent_content;
});
/**
* Given a content and some new content, inserts the new content immediately before the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__27783_SHARP_,p2__27782_SHARP_){return goog.dom.insertSiblingBefore(p2__27782_SHARP_,p1__27783_SHARP_);
}),content,new_content) : domina.apply_with_cloning.call(null,(function (p1__27783_SHARP_,p2__27782_SHARP_){return goog.dom.insertSiblingBefore(p2__27782_SHARP_,p1__27783_SHARP_);
}),content,new_content));
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__27785_SHARP_,p2__27784_SHARP_){return goog.dom.insertSiblingAfter(p2__27784_SHARP_,p1__27785_SHARP_);
}),content,new_content) : domina.apply_with_cloning.call(null,(function (p1__27785_SHARP_,p2__27784_SHARP_){return goog.dom.insertSiblingAfter(p2__27784_SHARP_,p1__27785_SHARP_);
}),content,new_content));
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__27787_SHARP_,p2__27786_SHARP_){return goog.dom.replaceNode(p2__27786_SHARP_,p1__27787_SHARP_);
}),old_content,new_content) : domina.apply_with_cloning.call(null,(function (p1__27787_SHARP_,p2__27786_SHARP_){return goog.dom.replaceNode(p2__27786_SHARP_,p1__27787_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__27792_27796 = cljs.core.seq(domina.nodes(content));var chunk__27793_27797 = null;var count__27794_27798 = 0;var i__27795_27799 = 0;while(true){
if((i__27795_27799 < count__27794_27798))
{var n_27800 = chunk__27793_27797.cljs$core$IIndexed$_nth$arity$2(null,i__27795_27799);goog.style.setStyle(n_27800,cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__27801 = seq__27792_27796;
var G__27802 = chunk__27793_27797;
var G__27803 = count__27794_27798;
var G__27804 = (i__27795_27799 + 1);
seq__27792_27796 = G__27801;
chunk__27793_27797 = G__27802;
count__27794_27798 = G__27803;
i__27795_27799 = G__27804;
continue;
}
} else
{var temp__4092__auto___27805 = cljs.core.seq(seq__27792_27796);if(temp__4092__auto___27805)
{var seq__27792_27806__$1 = temp__4092__auto___27805;if(cljs.core.chunked_seq_QMARK_(seq__27792_27806__$1))
{var c__4148__auto___27807 = cljs.core.chunk_first(seq__27792_27806__$1);{
var G__27808 = cljs.core.chunk_rest(seq__27792_27806__$1);
var G__27809 = c__4148__auto___27807;
var G__27810 = cljs.core.count(c__4148__auto___27807);
var G__27811 = 0;
seq__27792_27796 = G__27808;
chunk__27793_27797 = G__27809;
count__27794_27798 = G__27810;
i__27795_27799 = G__27811;
continue;
}
} else
{var n_27812 = cljs.core.first(seq__27792_27806__$1);goog.style.setStyle(n_27812,cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__27813 = cljs.core.next(seq__27792_27806__$1);
var G__27814 = null;
var G__27815 = 0;
var G__27816 = 0;
seq__27792_27796 = G__27813;
chunk__27793_27797 = G__27814;
count__27794_27798 = G__27815;
i__27795_27799 = G__27816;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__27817){
var content = cljs.core.first(arglist__27817);
arglist__27817 = cljs.core.next(arglist__27817);
var name = cljs.core.first(arglist__27817);
var value = cljs.core.rest(arglist__27817);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__27822_27826 = cljs.core.seq(domina.nodes(content));var chunk__27823_27827 = null;var count__27824_27828 = 0;var i__27825_27829 = 0;while(true){
if((i__27825_27829 < count__27824_27828))
{var n_27830 = chunk__27823_27827.cljs$core$IIndexed$_nth$arity$2(null,i__27825_27829);n_27830.setAttribute(cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__27831 = seq__27822_27826;
var G__27832 = chunk__27823_27827;
var G__27833 = count__27824_27828;
var G__27834 = (i__27825_27829 + 1);
seq__27822_27826 = G__27831;
chunk__27823_27827 = G__27832;
count__27824_27828 = G__27833;
i__27825_27829 = G__27834;
continue;
}
} else
{var temp__4092__auto___27835 = cljs.core.seq(seq__27822_27826);if(temp__4092__auto___27835)
{var seq__27822_27836__$1 = temp__4092__auto___27835;if(cljs.core.chunked_seq_QMARK_(seq__27822_27836__$1))
{var c__4148__auto___27837 = cljs.core.chunk_first(seq__27822_27836__$1);{
var G__27838 = cljs.core.chunk_rest(seq__27822_27836__$1);
var G__27839 = c__4148__auto___27837;
var G__27840 = cljs.core.count(c__4148__auto___27837);
var G__27841 = 0;
seq__27822_27826 = G__27838;
chunk__27823_27827 = G__27839;
count__27824_27828 = G__27840;
i__27825_27829 = G__27841;
continue;
}
} else
{var n_27842 = cljs.core.first(seq__27822_27836__$1);n_27842.setAttribute(cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__27843 = cljs.core.next(seq__27822_27836__$1);
var G__27844 = null;
var G__27845 = 0;
var G__27846 = 0;
seq__27822_27826 = G__27843;
chunk__27823_27827 = G__27844;
count__27824_27828 = G__27845;
i__27825_27829 = G__27846;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__27847){
var content = cljs.core.first(arglist__27847);
arglist__27847 = cljs.core.next(arglist__27847);
var name = cljs.core.first(arglist__27847);
var value = cljs.core.rest(arglist__27847);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__27852_27856 = cljs.core.seq(domina.nodes(content));var chunk__27853_27857 = null;var count__27854_27858 = 0;var i__27855_27859 = 0;while(true){
if((i__27855_27859 < count__27854_27858))
{var n_27860 = chunk__27853_27857.cljs$core$IIndexed$_nth$arity$2(null,i__27855_27859);n_27860.removeAttribute(cljs.core.name(name));
{
var G__27861 = seq__27852_27856;
var G__27862 = chunk__27853_27857;
var G__27863 = count__27854_27858;
var G__27864 = (i__27855_27859 + 1);
seq__27852_27856 = G__27861;
chunk__27853_27857 = G__27862;
count__27854_27858 = G__27863;
i__27855_27859 = G__27864;
continue;
}
} else
{var temp__4092__auto___27865 = cljs.core.seq(seq__27852_27856);if(temp__4092__auto___27865)
{var seq__27852_27866__$1 = temp__4092__auto___27865;if(cljs.core.chunked_seq_QMARK_(seq__27852_27866__$1))
{var c__4148__auto___27867 = cljs.core.chunk_first(seq__27852_27866__$1);{
var G__27868 = cljs.core.chunk_rest(seq__27852_27866__$1);
var G__27869 = c__4148__auto___27867;
var G__27870 = cljs.core.count(c__4148__auto___27867);
var G__27871 = 0;
seq__27852_27856 = G__27868;
chunk__27853_27857 = G__27869;
count__27854_27858 = G__27870;
i__27855_27859 = G__27871;
continue;
}
} else
{var n_27872 = cljs.core.first(seq__27852_27866__$1);n_27872.removeAttribute(cljs.core.name(name));
{
var G__27873 = cljs.core.next(seq__27852_27866__$1);
var G__27874 = null;
var G__27875 = 0;
var G__27876 = 0;
seq__27852_27856 = G__27873;
chunk__27853_27857 = G__27874;
count__27854_27858 = G__27875;
i__27855_27859 = G__27876;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,pair){var vec__27878 = pair.split(/\s*:\s*/);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27878,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27878,1,null);if(cljs.core.truth_((function (){var and__3394__auto__ = k;if(cljs.core.truth_(and__3394__auto__))
{return v;
} else
{return and__3394__auto__;
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
{if(cljs.core.constant$keyword$237)
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
domina.attrs = (function attrs(content){var node = domina.single_node(content);var attrs__$1 = node.attributes;return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.filter(cljs.core.complement(cljs.core.nil_QMARK_),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__27879_SHARP_){var attr = attrs__$1.item(p1__27879_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(null,value)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__27886_27892 = cljs.core.seq(styles);var chunk__27887_27893 = null;var count__27888_27894 = 0;var i__27889_27895 = 0;while(true){
if((i__27889_27895 < count__27888_27894))
{var vec__27890_27896 = chunk__27887_27893.cljs$core$IIndexed$_nth$arity$2(null,i__27889_27895);var name_27897 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27890_27896,0,null);var value_27898 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27890_27896,1,null);domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_27897,cljs.core.array_seq([value_27898], 0));
{
var G__27899 = seq__27886_27892;
var G__27900 = chunk__27887_27893;
var G__27901 = count__27888_27894;
var G__27902 = (i__27889_27895 + 1);
seq__27886_27892 = G__27899;
chunk__27887_27893 = G__27900;
count__27888_27894 = G__27901;
i__27889_27895 = G__27902;
continue;
}
} else
{var temp__4092__auto___27903 = cljs.core.seq(seq__27886_27892);if(temp__4092__auto___27903)
{var seq__27886_27904__$1 = temp__4092__auto___27903;if(cljs.core.chunked_seq_QMARK_(seq__27886_27904__$1))
{var c__4148__auto___27905 = cljs.core.chunk_first(seq__27886_27904__$1);{
var G__27906 = cljs.core.chunk_rest(seq__27886_27904__$1);
var G__27907 = c__4148__auto___27905;
var G__27908 = cljs.core.count(c__4148__auto___27905);
var G__27909 = 0;
seq__27886_27892 = G__27906;
chunk__27887_27893 = G__27907;
count__27888_27894 = G__27908;
i__27889_27895 = G__27909;
continue;
}
} else
{var vec__27891_27910 = cljs.core.first(seq__27886_27904__$1);var name_27911 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27891_27910,0,null);var value_27912 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27891_27910,1,null);domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_27911,cljs.core.array_seq([value_27912], 0));
{
var G__27913 = cljs.core.next(seq__27886_27904__$1);
var G__27914 = null;
var G__27915 = 0;
var G__27916 = 0;
seq__27886_27892 = G__27913;
chunk__27887_27893 = G__27914;
count__27888_27894 = G__27915;
i__27889_27895 = G__27916;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__27923_27929 = cljs.core.seq(attrs);var chunk__27924_27930 = null;var count__27925_27931 = 0;var i__27926_27932 = 0;while(true){
if((i__27926_27932 < count__27925_27931))
{var vec__27927_27933 = chunk__27924_27930.cljs$core$IIndexed$_nth$arity$2(null,i__27926_27932);var name_27934 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27927_27933,0,null);var value_27935 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27927_27933,1,null);domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_27934,cljs.core.array_seq([value_27935], 0));
{
var G__27936 = seq__27923_27929;
var G__27937 = chunk__27924_27930;
var G__27938 = count__27925_27931;
var G__27939 = (i__27926_27932 + 1);
seq__27923_27929 = G__27936;
chunk__27924_27930 = G__27937;
count__27925_27931 = G__27938;
i__27926_27932 = G__27939;
continue;
}
} else
{var temp__4092__auto___27940 = cljs.core.seq(seq__27923_27929);if(temp__4092__auto___27940)
{var seq__27923_27941__$1 = temp__4092__auto___27940;if(cljs.core.chunked_seq_QMARK_(seq__27923_27941__$1))
{var c__4148__auto___27942 = cljs.core.chunk_first(seq__27923_27941__$1);{
var G__27943 = cljs.core.chunk_rest(seq__27923_27941__$1);
var G__27944 = c__4148__auto___27942;
var G__27945 = cljs.core.count(c__4148__auto___27942);
var G__27946 = 0;
seq__27923_27929 = G__27943;
chunk__27924_27930 = G__27944;
count__27925_27931 = G__27945;
i__27926_27932 = G__27946;
continue;
}
} else
{var vec__27928_27947 = cljs.core.first(seq__27923_27941__$1);var name_27948 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27928_27947,0,null);var value_27949 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27928_27947,1,null);domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_27948,cljs.core.array_seq([value_27949], 0));
{
var G__27950 = cljs.core.next(seq__27923_27941__$1);
var G__27951 = null;
var G__27952 = 0;
var G__27953 = 0;
seq__27923_27929 = G__27950;
chunk__27924_27930 = G__27951;
count__27925_27931 = G__27952;
i__27926_27932 = G__27953;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__27958_27962 = cljs.core.seq(domina.nodes(content));var chunk__27959_27963 = null;var count__27960_27964 = 0;var i__27961_27965 = 0;while(true){
if((i__27961_27965 < count__27960_27964))
{var node_27966 = chunk__27959_27963.cljs$core$IIndexed$_nth$arity$2(null,i__27961_27965);goog.dom.classes.add(node_27966,class$);
{
var G__27967 = seq__27958_27962;
var G__27968 = chunk__27959_27963;
var G__27969 = count__27960_27964;
var G__27970 = (i__27961_27965 + 1);
seq__27958_27962 = G__27967;
chunk__27959_27963 = G__27968;
count__27960_27964 = G__27969;
i__27961_27965 = G__27970;
continue;
}
} else
{var temp__4092__auto___27971 = cljs.core.seq(seq__27958_27962);if(temp__4092__auto___27971)
{var seq__27958_27972__$1 = temp__4092__auto___27971;if(cljs.core.chunked_seq_QMARK_(seq__27958_27972__$1))
{var c__4148__auto___27973 = cljs.core.chunk_first(seq__27958_27972__$1);{
var G__27974 = cljs.core.chunk_rest(seq__27958_27972__$1);
var G__27975 = c__4148__auto___27973;
var G__27976 = cljs.core.count(c__4148__auto___27973);
var G__27977 = 0;
seq__27958_27962 = G__27974;
chunk__27959_27963 = G__27975;
count__27960_27964 = G__27976;
i__27961_27965 = G__27977;
continue;
}
} else
{var node_27978 = cljs.core.first(seq__27958_27972__$1);goog.dom.classes.add(node_27978,class$);
{
var G__27979 = cljs.core.next(seq__27958_27972__$1);
var G__27980 = null;
var G__27981 = 0;
var G__27982 = 0;
seq__27958_27962 = G__27979;
chunk__27959_27963 = G__27980;
count__27960_27964 = G__27981;
i__27961_27965 = G__27982;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__27987_27991 = cljs.core.seq(domina.nodes(content));var chunk__27988_27992 = null;var count__27989_27993 = 0;var i__27990_27994 = 0;while(true){
if((i__27990_27994 < count__27989_27993))
{var node_27995 = chunk__27988_27992.cljs$core$IIndexed$_nth$arity$2(null,i__27990_27994);goog.dom.classes.remove(node_27995,class$);
{
var G__27996 = seq__27987_27991;
var G__27997 = chunk__27988_27992;
var G__27998 = count__27989_27993;
var G__27999 = (i__27990_27994 + 1);
seq__27987_27991 = G__27996;
chunk__27988_27992 = G__27997;
count__27989_27993 = G__27998;
i__27990_27994 = G__27999;
continue;
}
} else
{var temp__4092__auto___28000 = cljs.core.seq(seq__27987_27991);if(temp__4092__auto___28000)
{var seq__27987_28001__$1 = temp__4092__auto___28000;if(cljs.core.chunked_seq_QMARK_(seq__27987_28001__$1))
{var c__4148__auto___28002 = cljs.core.chunk_first(seq__27987_28001__$1);{
var G__28003 = cljs.core.chunk_rest(seq__27987_28001__$1);
var G__28004 = c__4148__auto___28002;
var G__28005 = cljs.core.count(c__4148__auto___28002);
var G__28006 = 0;
seq__27987_27991 = G__28003;
chunk__27988_27992 = G__28004;
count__27989_27993 = G__28005;
i__27990_27994 = G__28006;
continue;
}
} else
{var node_28007 = cljs.core.first(seq__27987_28001__$1);goog.dom.classes.remove(node_28007,class$);
{
var G__28008 = cljs.core.next(seq__27987_28001__$1);
var G__28009 = null;
var G__28010 = 0;
var G__28011 = 0;
seq__27987_27991 = G__28008;
chunk__27988_27992 = G__28009;
count__27989_27993 = G__28010;
i__27990_27994 = G__28011;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__28016_28020 = cljs.core.seq(domina.nodes(content));var chunk__28017_28021 = null;var count__28018_28022 = 0;var i__28019_28023 = 0;while(true){
if((i__28019_28023 < count__28018_28022))
{var node_28024 = chunk__28017_28021.cljs$core$IIndexed$_nth$arity$2(null,i__28019_28023);goog.dom.classes.toggle(node_28024,class$);
{
var G__28025 = seq__28016_28020;
var G__28026 = chunk__28017_28021;
var G__28027 = count__28018_28022;
var G__28028 = (i__28019_28023 + 1);
seq__28016_28020 = G__28025;
chunk__28017_28021 = G__28026;
count__28018_28022 = G__28027;
i__28019_28023 = G__28028;
continue;
}
} else
{var temp__4092__auto___28029 = cljs.core.seq(seq__28016_28020);if(temp__4092__auto___28029)
{var seq__28016_28030__$1 = temp__4092__auto___28029;if(cljs.core.chunked_seq_QMARK_(seq__28016_28030__$1))
{var c__4148__auto___28031 = cljs.core.chunk_first(seq__28016_28030__$1);{
var G__28032 = cljs.core.chunk_rest(seq__28016_28030__$1);
var G__28033 = c__4148__auto___28031;
var G__28034 = cljs.core.count(c__4148__auto___28031);
var G__28035 = 0;
seq__28016_28020 = G__28032;
chunk__28017_28021 = G__28033;
count__28018_28022 = G__28034;
i__28019_28023 = G__28035;
continue;
}
} else
{var node_28036 = cljs.core.first(seq__28016_28030__$1);goog.dom.classes.toggle(node_28036,class$);
{
var G__28037 = cljs.core.next(seq__28016_28030__$1);
var G__28038 = null;
var G__28039 = 0;
var G__28040 = 0;
seq__28016_28020 = G__28037;
chunk__28017_28021 = G__28038;
count__28018_28022 = G__28039;
i__28019_28023 = G__28040;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_28049__$1 = ((cljs.core.coll_QMARK_(classes))?clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",classes):classes);var seq__28045_28050 = cljs.core.seq(domina.nodes(content));var chunk__28046_28051 = null;var count__28047_28052 = 0;var i__28048_28053 = 0;while(true){
if((i__28048_28053 < count__28047_28052))
{var node_28054 = chunk__28046_28051.cljs$core$IIndexed$_nth$arity$2(null,i__28048_28053);goog.dom.classes.set(node_28054,classes_28049__$1);
{
var G__28055 = seq__28045_28050;
var G__28056 = chunk__28046_28051;
var G__28057 = count__28047_28052;
var G__28058 = (i__28048_28053 + 1);
seq__28045_28050 = G__28055;
chunk__28046_28051 = G__28056;
count__28047_28052 = G__28057;
i__28048_28053 = G__28058;
continue;
}
} else
{var temp__4092__auto___28059 = cljs.core.seq(seq__28045_28050);if(temp__4092__auto___28059)
{var seq__28045_28060__$1 = temp__4092__auto___28059;if(cljs.core.chunked_seq_QMARK_(seq__28045_28060__$1))
{var c__4148__auto___28061 = cljs.core.chunk_first(seq__28045_28060__$1);{
var G__28062 = cljs.core.chunk_rest(seq__28045_28060__$1);
var G__28063 = c__4148__auto___28061;
var G__28064 = cljs.core.count(c__4148__auto___28061);
var G__28065 = 0;
seq__28045_28050 = G__28062;
chunk__28046_28051 = G__28063;
count__28047_28052 = G__28064;
i__28048_28053 = G__28065;
continue;
}
} else
{var node_28066 = cljs.core.first(seq__28045_28060__$1);goog.dom.classes.set(node_28066,classes_28049__$1);
{
var G__28067 = cljs.core.next(seq__28045_28060__$1);
var G__28068 = null;
var G__28069 = 0;
var G__28070 = 0;
seq__28045_28050 = G__28067;
chunk__28046_28051 = G__28068;
count__28047_28052 = G__28069;
i__28048_28053 = G__28070;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__28075_28079 = cljs.core.seq(domina.nodes(content));var chunk__28076_28080 = null;var count__28077_28081 = 0;var i__28078_28082 = 0;while(true){
if((i__28078_28082 < count__28077_28081))
{var node_28083 = chunk__28076_28080.cljs$core$IIndexed$_nth$arity$2(null,i__28078_28082);goog.dom.setTextContent(node_28083,value);
{
var G__28084 = seq__28075_28079;
var G__28085 = chunk__28076_28080;
var G__28086 = count__28077_28081;
var G__28087 = (i__28078_28082 + 1);
seq__28075_28079 = G__28084;
chunk__28076_28080 = G__28085;
count__28077_28081 = G__28086;
i__28078_28082 = G__28087;
continue;
}
} else
{var temp__4092__auto___28088 = cljs.core.seq(seq__28075_28079);if(temp__4092__auto___28088)
{var seq__28075_28089__$1 = temp__4092__auto___28088;if(cljs.core.chunked_seq_QMARK_(seq__28075_28089__$1))
{var c__4148__auto___28090 = cljs.core.chunk_first(seq__28075_28089__$1);{
var G__28091 = cljs.core.chunk_rest(seq__28075_28089__$1);
var G__28092 = c__4148__auto___28090;
var G__28093 = cljs.core.count(c__4148__auto___28090);
var G__28094 = 0;
seq__28075_28079 = G__28091;
chunk__28076_28080 = G__28092;
count__28077_28081 = G__28093;
i__28078_28082 = G__28094;
continue;
}
} else
{var node_28095 = cljs.core.first(seq__28075_28089__$1);goog.dom.setTextContent(node_28095,value);
{
var G__28096 = cljs.core.next(seq__28075_28089__$1);
var G__28097 = null;
var G__28098 = 0;
var G__28099 = 0;
seq__28075_28079 = G__28096;
chunk__28076_28080 = G__28097;
count__28077_28081 = G__28098;
i__28078_28082 = G__28099;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__28104_28108 = cljs.core.seq(domina.nodes(content));var chunk__28105_28109 = null;var count__28106_28110 = 0;var i__28107_28111 = 0;while(true){
if((i__28107_28111 < count__28106_28110))
{var node_28112 = chunk__28105_28109.cljs$core$IIndexed$_nth$arity$2(null,i__28107_28111);goog.dom.forms.setValue(node_28112,value);
{
var G__28113 = seq__28104_28108;
var G__28114 = chunk__28105_28109;
var G__28115 = count__28106_28110;
var G__28116 = (i__28107_28111 + 1);
seq__28104_28108 = G__28113;
chunk__28105_28109 = G__28114;
count__28106_28110 = G__28115;
i__28107_28111 = G__28116;
continue;
}
} else
{var temp__4092__auto___28117 = cljs.core.seq(seq__28104_28108);if(temp__4092__auto___28117)
{var seq__28104_28118__$1 = temp__4092__auto___28117;if(cljs.core.chunked_seq_QMARK_(seq__28104_28118__$1))
{var c__4148__auto___28119 = cljs.core.chunk_first(seq__28104_28118__$1);{
var G__28120 = cljs.core.chunk_rest(seq__28104_28118__$1);
var G__28121 = c__4148__auto___28119;
var G__28122 = cljs.core.count(c__4148__auto___28119);
var G__28123 = 0;
seq__28104_28108 = G__28120;
chunk__28105_28109 = G__28121;
count__28106_28110 = G__28122;
i__28107_28111 = G__28123;
continue;
}
} else
{var node_28124 = cljs.core.first(seq__28104_28118__$1);goog.dom.forms.setValue(node_28124,value);
{
var G__28125 = cljs.core.next(seq__28104_28118__$1);
var G__28126 = null;
var G__28127 = 0;
var G__28128 = 0;
seq__28104_28108 = G__28125;
chunk__28105_28109 = G__28126;
count__28106_28110 = G__28127;
i__28107_28111 = G__28128;
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
domina.set_inner_html_BANG_ = (function set_inner_html_BANG_(content,html_string){var allows_inner_html_QMARK_ = cljs.core.not(cljs.core.re_find(domina.re_no_inner_html,html_string));var leading_whitespace_QMARK_ = cljs.core.re_find(domina.re_leading_whitespace,html_string);var tag_name = [cljs.core.str(cljs.core.second(cljs.core.re_find(domina.re_tag_name,html_string)))].join('').toLowerCase();var special_tag_QMARK_ = cljs.core.contains_QMARK_(domina.wrap_map,tag_name);if(cljs.core.truth_((function (){var and__3394__auto__ = allows_inner_html_QMARK_;if(and__3394__auto__)
{var and__3394__auto____$1 = (function (){var or__3406__auto__ = domina.support.leading_whitespace_QMARK_;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return cljs.core.not(leading_whitespace_QMARK_);
}
})();if(cljs.core.truth_(and__3394__auto____$1))
{return !(special_tag_QMARK_);
} else
{return and__3394__auto____$1;
}
} else
{return and__3394__auto__;
}
})()))
{var value_28139 = clojure.string.replace(html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__28135_28140 = cljs.core.seq(domina.nodes(content));var chunk__28136_28141 = null;var count__28137_28142 = 0;var i__28138_28143 = 0;while(true){
if((i__28138_28143 < count__28137_28142))
{var node_28144 = chunk__28136_28141.cljs$core$IIndexed$_nth$arity$2(null,i__28138_28143);node_28144.innerHTML = value_28139;
{
var G__28145 = seq__28135_28140;
var G__28146 = chunk__28136_28141;
var G__28147 = count__28137_28142;
var G__28148 = (i__28138_28143 + 1);
seq__28135_28140 = G__28145;
chunk__28136_28141 = G__28146;
count__28137_28142 = G__28147;
i__28138_28143 = G__28148;
continue;
}
} else
{var temp__4092__auto___28149 = cljs.core.seq(seq__28135_28140);if(temp__4092__auto___28149)
{var seq__28135_28150__$1 = temp__4092__auto___28149;if(cljs.core.chunked_seq_QMARK_(seq__28135_28150__$1))
{var c__4148__auto___28151 = cljs.core.chunk_first(seq__28135_28150__$1);{
var G__28152 = cljs.core.chunk_rest(seq__28135_28150__$1);
var G__28153 = c__4148__auto___28151;
var G__28154 = cljs.core.count(c__4148__auto___28151);
var G__28155 = 0;
seq__28135_28140 = G__28152;
chunk__28136_28141 = G__28153;
count__28137_28142 = G__28154;
i__28138_28143 = G__28155;
continue;
}
} else
{var node_28156 = cljs.core.first(seq__28135_28150__$1);node_28156.innerHTML = value_28139;
{
var G__28157 = cljs.core.next(seq__28135_28150__$1);
var G__28158 = null;
var G__28159 = 0;
var G__28160 = 0;
seq__28135_28140 = G__28157;
chunk__28136_28141 = G__28158;
count__28137_28142 = G__28159;
i__28138_28143 = G__28160;
continue;
}
}
} else
{}
}
break;
}
}catch (e28134){if((e28134 instanceof Error))
{var e_28161 = e28134;domina.replace_children_BANG_(content,value_28139);
} else
{if(cljs.core.constant$keyword$237)
{throw e28134;
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
var get_data__3 = (function (node,key,bubble){var m = domina.single_node(node).__domina_data;var value = (cljs.core.truth_(m)?cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,key):null);if(cljs.core.truth_((function (){var and__3394__auto__ = bubble;if(cljs.core.truth_(and__3394__auto__))
{return (value == null);
} else
{return and__3394__auto__;
}
})()))
{var temp__4092__auto__ = domina.single_node(node).parentNode;if(cljs.core.truth_(temp__4092__auto__))
{var parent = temp__4092__auto__;return get_data.cljs$core$IFn$_invoke$arity$3(parent,key,true);
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
domina.set_data_BANG_ = (function set_data_BANG_(node,key,value){var m = (function (){var or__3406__auto__ = domina.single_node(node).__domina_data;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes(parent_content);var children = domina.nodes(child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__28168_28172 = cljs.core.seq(children);var chunk__28169_28173 = null;var count__28170_28174 = 0;var i__28171_28175 = 0;while(true){
if((i__28171_28175 < count__28170_28174))
{var child_28176 = chunk__28169_28173.cljs$core$IIndexed$_nth$arity$2(null,i__28171_28175);frag.appendChild(child_28176);
{
var G__28177 = seq__28168_28172;
var G__28178 = chunk__28169_28173;
var G__28179 = count__28170_28174;
var G__28180 = (i__28171_28175 + 1);
seq__28168_28172 = G__28177;
chunk__28169_28173 = G__28178;
count__28170_28174 = G__28179;
i__28171_28175 = G__28180;
continue;
}
} else
{var temp__4092__auto___28181 = cljs.core.seq(seq__28168_28172);if(temp__4092__auto___28181)
{var seq__28168_28182__$1 = temp__4092__auto___28181;if(cljs.core.chunked_seq_QMARK_(seq__28168_28182__$1))
{var c__4148__auto___28183 = cljs.core.chunk_first(seq__28168_28182__$1);{
var G__28184 = cljs.core.chunk_rest(seq__28168_28182__$1);
var G__28185 = c__4148__auto___28183;
var G__28186 = cljs.core.count(c__4148__auto___28183);
var G__28187 = 0;
seq__28168_28172 = G__28184;
chunk__28169_28173 = G__28185;
count__28170_28174 = G__28186;
i__28171_28175 = G__28187;
continue;
}
} else
{var child_28188 = cljs.core.first(seq__28168_28182__$1);frag.appendChild(child_28188);
{
var G__28189 = cljs.core.next(seq__28168_28182__$1);
var G__28190 = null;
var G__28191 = 0;
var G__28192 = 0;
seq__28168_28172 = G__28189;
chunk__28169_28173 = G__28190;
count__28170_28174 = G__28191;
i__28171_28175 = G__28192;
continue;
}
}
} else
{}
}
break;
}
return frag;
})();var other_children = cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$2((cljs.core.count(parents) - 1),((function (parents,children,first_child){
return (function (){return first_child.cloneNode(true);
});})(parents,children,first_child))
));if(cljs.core.seq(parents))
{(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(cljs.core.first(parents),first_child) : f.call(null,cljs.core.first(parents),first_child));
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (p1__28162_SHARP_,p2__28163_SHARP_){return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(p1__28162_SHARP_,p2__28163_SHARP_) : f.call(null,p1__28162_SHARP_,p2__28163_SHARP_));
}),cljs.core.rest(parents),other_children));
} else
{return null;
}
});
domina.lazy_nl_via_item = (function() {
var lazy_nl_via_item = null;
var lazy_nl_via_item__1 = (function (nl){return lazy_nl_via_item.cljs$core$IFn$_invoke$arity$2(nl,0);
});
var lazy_nl_via_item__2 = (function (nl,n){if((n < nl.length))
{return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons(nl.item(n),lazy_nl_via_item.cljs$core$IFn$_invoke$arity$2(nl,(n + 1)));
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
var lazy_nl_via_array_ref__1 = (function (nl){return lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$2(nl,0);
});
var lazy_nl_via_array_ref__2 = (function (nl,n){if((n < nl.length))
{return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons((nl[n]),lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$2(nl,(n + 1)));
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
domina.array_like_QMARK_ = (function array_like_QMARK_(obj){var and__3394__auto__ = obj;if(cljs.core.truth_(and__3394__auto__))
{var and__3394__auto____$1 = cljs.core.not(obj.nodeName);if(and__3394__auto____$1)
{return obj.length;
} else
{return and__3394__auto____$1;
}
} else
{return and__3394__auto__;
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
{if((function (){var G__28194 = list_thing;if(G__28194)
{var bit__4050__auto__ = (G__28194.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__28194.cljs$core$ISeqable$))
{return true;
} else
{if((!G__28194.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__28194);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__28194);
}
})())
{return cljs.core.seq(list_thing);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_(list_thing)))
{return domina.lazy_nodelist(list_thing);
} else
{if(cljs.core.constant$keyword$238)
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
{if((function (){var G__28195 = content;if(G__28195)
{var bit__4050__auto__ = (G__28195.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__28195.cljs$core$ISeqable$))
{return true;
} else
{if((!G__28195.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__28195);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__28195);
}
})())
{return cljs.core.seq(content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_(content)))
{return domina.lazy_nodelist(content);
} else
{if(cljs.core.constant$keyword$238)
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
{if((function (){var G__28196 = content;if(G__28196)
{var bit__4050__auto__ = (G__28196.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__28196.cljs$core$ISeqable$))
{return true;
} else
{if((!G__28196.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__28196);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__28196);
}
})())
{return cljs.core.first(content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_(content)))
{return content.item(0);
} else
{if(cljs.core.constant$keyword$238)
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
