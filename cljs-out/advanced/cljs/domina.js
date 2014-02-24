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
var opt_wrapper_27699 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_27700 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<table>","</table>"], null);var cell_wrapper_27701 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["col",cljs.core.constant$keyword$238,"tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,"",""], null),table_section_wrapper_27700,table_section_wrapper_27700,opt_wrapper_27699,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<fieldset>","</fieldset>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<map>","</map>"], null),cell_wrapper_27701,table_section_wrapper_27700,cell_wrapper_27701,opt_wrapper_27699,table_section_wrapper_27700,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody>","</tbody></table>"], null),table_section_wrapper_27700]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not(cljs.core.re_find(domina.re_tbody,html));var tbody = (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3394__auto__ = div.firstChild;if(cljs.core.truth_(and__3394__auto__))
{return div.firstChild.childNodes;
} else
{return and__3394__auto__;
}
})():(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__27706 = cljs.core.seq(tbody);var chunk__27707 = null;var count__27708 = 0;var i__27709 = 0;while(true){
if((i__27709 < count__27708))
{var child = chunk__27707.cljs$core$IIndexed$_nth$arity$2(null,i__27709);if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.nodeName,"tbody")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__27710 = seq__27706;
var G__27711 = chunk__27707;
var G__27712 = count__27708;
var G__27713 = (i__27709 + 1);
seq__27706 = G__27710;
chunk__27707 = G__27711;
count__27708 = G__27712;
i__27709 = G__27713;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__27706);if(temp__4092__auto__)
{var seq__27706__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__27706__$1))
{var c__4148__auto__ = cljs.core.chunk_first(seq__27706__$1);{
var G__27714 = cljs.core.chunk_rest(seq__27706__$1);
var G__27715 = c__4148__auto__;
var G__27716 = cljs.core.count(c__4148__auto__);
var G__27717 = 0;
seq__27706 = G__27714;
chunk__27707 = G__27715;
count__27708 = G__27716;
i__27709 = G__27717;
continue;
}
} else
{var child = cljs.core.first(seq__27706__$1);if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.nodeName,"tbody")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__27718 = cljs.core.next(seq__27706__$1);
var G__27719 = null;
var G__27720 = 0;
var G__27721 = 0;
seq__27706 = G__27718;
chunk__27707 = G__27719;
count__27708 = G__27720;
i__27709 = G__27721;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace(html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = [cljs.core.str(cljs.core.second(cljs.core.re_find(domina.re_tag_name,html__$1)))].join('').toLowerCase();var vec__27723 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(domina.wrap_map,tag_name,cljs.core.constant$keyword$238.cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27723,0,null);var start_wrap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27723,1,null);var end_wrap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27723,2,null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');
return div;
})();var level = depth;while(true){
if((level > 0))
{{
var G__27724 = wrapper.lastChild;
var G__27725 = (level - 1);
wrapper = G__27724;
level = G__27725;
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
domina.DomContent = (function (){var obj27727 = {};return obj27727;
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
log_debug.cljs$lang$applyTo = (function (arglist__27728){
var mesg = cljs.core.seq(arglist__27728);
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
log.cljs$lang$applyTo = (function (arglist__27729){
var mesg = cljs.core.seq(arglist__27729);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__27730){
var contents = cljs.core.seq(arglist__27730);
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
domina.clone = (function clone(content){return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__27731_SHARP_){return p1__27731_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__27732_SHARP_,p2__27733_SHARP_){return goog.dom.insertChildAt(p1__27732_SHARP_,p2__27733_SHARP_,idx);
}),parent_content,child_content) : domina.apply_with_cloning.call(null,(function (p1__27732_SHARP_,p2__27733_SHARP_){return goog.dom.insertChildAt(p1__27732_SHARP_,p2__27733_SHARP_,idx);
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__27735_SHARP_,p2__27734_SHARP_){return goog.dom.insertSiblingBefore(p2__27734_SHARP_,p1__27735_SHARP_);
}),content,new_content) : domina.apply_with_cloning.call(null,(function (p1__27735_SHARP_,p2__27734_SHARP_){return goog.dom.insertSiblingBefore(p2__27734_SHARP_,p1__27735_SHARP_);
}),content,new_content));
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__27737_SHARP_,p2__27736_SHARP_){return goog.dom.insertSiblingAfter(p2__27736_SHARP_,p1__27737_SHARP_);
}),content,new_content) : domina.apply_with_cloning.call(null,(function (p1__27737_SHARP_,p2__27736_SHARP_){return goog.dom.insertSiblingAfter(p2__27736_SHARP_,p1__27737_SHARP_);
}),content,new_content));
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__27739_SHARP_,p2__27738_SHARP_){return goog.dom.replaceNode(p2__27738_SHARP_,p1__27739_SHARP_);
}),old_content,new_content) : domina.apply_with_cloning.call(null,(function (p1__27739_SHARP_,p2__27738_SHARP_){return goog.dom.replaceNode(p2__27738_SHARP_,p1__27739_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__27744_27748 = cljs.core.seq(domina.nodes(content));var chunk__27745_27749 = null;var count__27746_27750 = 0;var i__27747_27751 = 0;while(true){
if((i__27747_27751 < count__27746_27750))
{var n_27752 = chunk__27745_27749.cljs$core$IIndexed$_nth$arity$2(null,i__27747_27751);goog.style.setStyle(n_27752,cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__27753 = seq__27744_27748;
var G__27754 = chunk__27745_27749;
var G__27755 = count__27746_27750;
var G__27756 = (i__27747_27751 + 1);
seq__27744_27748 = G__27753;
chunk__27745_27749 = G__27754;
count__27746_27750 = G__27755;
i__27747_27751 = G__27756;
continue;
}
} else
{var temp__4092__auto___27757 = cljs.core.seq(seq__27744_27748);if(temp__4092__auto___27757)
{var seq__27744_27758__$1 = temp__4092__auto___27757;if(cljs.core.chunked_seq_QMARK_(seq__27744_27758__$1))
{var c__4148__auto___27759 = cljs.core.chunk_first(seq__27744_27758__$1);{
var G__27760 = cljs.core.chunk_rest(seq__27744_27758__$1);
var G__27761 = c__4148__auto___27759;
var G__27762 = cljs.core.count(c__4148__auto___27759);
var G__27763 = 0;
seq__27744_27748 = G__27760;
chunk__27745_27749 = G__27761;
count__27746_27750 = G__27762;
i__27747_27751 = G__27763;
continue;
}
} else
{var n_27764 = cljs.core.first(seq__27744_27758__$1);goog.style.setStyle(n_27764,cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__27765 = cljs.core.next(seq__27744_27758__$1);
var G__27766 = null;
var G__27767 = 0;
var G__27768 = 0;
seq__27744_27748 = G__27765;
chunk__27745_27749 = G__27766;
count__27746_27750 = G__27767;
i__27747_27751 = G__27768;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__27769){
var content = cljs.core.first(arglist__27769);
arglist__27769 = cljs.core.next(arglist__27769);
var name = cljs.core.first(arglist__27769);
var value = cljs.core.rest(arglist__27769);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__27774_27778 = cljs.core.seq(domina.nodes(content));var chunk__27775_27779 = null;var count__27776_27780 = 0;var i__27777_27781 = 0;while(true){
if((i__27777_27781 < count__27776_27780))
{var n_27782 = chunk__27775_27779.cljs$core$IIndexed$_nth$arity$2(null,i__27777_27781);n_27782.setAttribute(cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__27783 = seq__27774_27778;
var G__27784 = chunk__27775_27779;
var G__27785 = count__27776_27780;
var G__27786 = (i__27777_27781 + 1);
seq__27774_27778 = G__27783;
chunk__27775_27779 = G__27784;
count__27776_27780 = G__27785;
i__27777_27781 = G__27786;
continue;
}
} else
{var temp__4092__auto___27787 = cljs.core.seq(seq__27774_27778);if(temp__4092__auto___27787)
{var seq__27774_27788__$1 = temp__4092__auto___27787;if(cljs.core.chunked_seq_QMARK_(seq__27774_27788__$1))
{var c__4148__auto___27789 = cljs.core.chunk_first(seq__27774_27788__$1);{
var G__27790 = cljs.core.chunk_rest(seq__27774_27788__$1);
var G__27791 = c__4148__auto___27789;
var G__27792 = cljs.core.count(c__4148__auto___27789);
var G__27793 = 0;
seq__27774_27778 = G__27790;
chunk__27775_27779 = G__27791;
count__27776_27780 = G__27792;
i__27777_27781 = G__27793;
continue;
}
} else
{var n_27794 = cljs.core.first(seq__27774_27788__$1);n_27794.setAttribute(cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__27795 = cljs.core.next(seq__27774_27788__$1);
var G__27796 = null;
var G__27797 = 0;
var G__27798 = 0;
seq__27774_27778 = G__27795;
chunk__27775_27779 = G__27796;
count__27776_27780 = G__27797;
i__27777_27781 = G__27798;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__27799){
var content = cljs.core.first(arglist__27799);
arglist__27799 = cljs.core.next(arglist__27799);
var name = cljs.core.first(arglist__27799);
var value = cljs.core.rest(arglist__27799);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__27804_27808 = cljs.core.seq(domina.nodes(content));var chunk__27805_27809 = null;var count__27806_27810 = 0;var i__27807_27811 = 0;while(true){
if((i__27807_27811 < count__27806_27810))
{var n_27812 = chunk__27805_27809.cljs$core$IIndexed$_nth$arity$2(null,i__27807_27811);n_27812.removeAttribute(cljs.core.name(name));
{
var G__27813 = seq__27804_27808;
var G__27814 = chunk__27805_27809;
var G__27815 = count__27806_27810;
var G__27816 = (i__27807_27811 + 1);
seq__27804_27808 = G__27813;
chunk__27805_27809 = G__27814;
count__27806_27810 = G__27815;
i__27807_27811 = G__27816;
continue;
}
} else
{var temp__4092__auto___27817 = cljs.core.seq(seq__27804_27808);if(temp__4092__auto___27817)
{var seq__27804_27818__$1 = temp__4092__auto___27817;if(cljs.core.chunked_seq_QMARK_(seq__27804_27818__$1))
{var c__4148__auto___27819 = cljs.core.chunk_first(seq__27804_27818__$1);{
var G__27820 = cljs.core.chunk_rest(seq__27804_27818__$1);
var G__27821 = c__4148__auto___27819;
var G__27822 = cljs.core.count(c__4148__auto___27819);
var G__27823 = 0;
seq__27804_27808 = G__27820;
chunk__27805_27809 = G__27821;
count__27806_27810 = G__27822;
i__27807_27811 = G__27823;
continue;
}
} else
{var n_27824 = cljs.core.first(seq__27804_27818__$1);n_27824.removeAttribute(cljs.core.name(name));
{
var G__27825 = cljs.core.next(seq__27804_27818__$1);
var G__27826 = null;
var G__27827 = 0;
var G__27828 = 0;
seq__27804_27808 = G__27825;
chunk__27805_27809 = G__27826;
count__27806_27810 = G__27827;
i__27807_27811 = G__27828;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,pair){var vec__27830 = pair.split(/\s*:\s*/);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27830,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27830,1,null);if(cljs.core.truth_((function (){var and__3394__auto__ = k;if(cljs.core.truth_(and__3394__auto__))
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
domina.attrs = (function attrs(content){var node = domina.single_node(content);var attrs__$1 = node.attributes;return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.filter(cljs.core.complement(cljs.core.nil_QMARK_),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__27831_SHARP_){var attr = attrs__$1.item(p1__27831_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(null,value)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__27838_27844 = cljs.core.seq(styles);var chunk__27839_27845 = null;var count__27840_27846 = 0;var i__27841_27847 = 0;while(true){
if((i__27841_27847 < count__27840_27846))
{var vec__27842_27848 = chunk__27839_27845.cljs$core$IIndexed$_nth$arity$2(null,i__27841_27847);var name_27849 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27842_27848,0,null);var value_27850 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27842_27848,1,null);domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_27849,cljs.core.array_seq([value_27850], 0));
{
var G__27851 = seq__27838_27844;
var G__27852 = chunk__27839_27845;
var G__27853 = count__27840_27846;
var G__27854 = (i__27841_27847 + 1);
seq__27838_27844 = G__27851;
chunk__27839_27845 = G__27852;
count__27840_27846 = G__27853;
i__27841_27847 = G__27854;
continue;
}
} else
{var temp__4092__auto___27855 = cljs.core.seq(seq__27838_27844);if(temp__4092__auto___27855)
{var seq__27838_27856__$1 = temp__4092__auto___27855;if(cljs.core.chunked_seq_QMARK_(seq__27838_27856__$1))
{var c__4148__auto___27857 = cljs.core.chunk_first(seq__27838_27856__$1);{
var G__27858 = cljs.core.chunk_rest(seq__27838_27856__$1);
var G__27859 = c__4148__auto___27857;
var G__27860 = cljs.core.count(c__4148__auto___27857);
var G__27861 = 0;
seq__27838_27844 = G__27858;
chunk__27839_27845 = G__27859;
count__27840_27846 = G__27860;
i__27841_27847 = G__27861;
continue;
}
} else
{var vec__27843_27862 = cljs.core.first(seq__27838_27856__$1);var name_27863 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27843_27862,0,null);var value_27864 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27843_27862,1,null);domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_27863,cljs.core.array_seq([value_27864], 0));
{
var G__27865 = cljs.core.next(seq__27838_27856__$1);
var G__27866 = null;
var G__27867 = 0;
var G__27868 = 0;
seq__27838_27844 = G__27865;
chunk__27839_27845 = G__27866;
count__27840_27846 = G__27867;
i__27841_27847 = G__27868;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__27875_27881 = cljs.core.seq(attrs);var chunk__27876_27882 = null;var count__27877_27883 = 0;var i__27878_27884 = 0;while(true){
if((i__27878_27884 < count__27877_27883))
{var vec__27879_27885 = chunk__27876_27882.cljs$core$IIndexed$_nth$arity$2(null,i__27878_27884);var name_27886 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27879_27885,0,null);var value_27887 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27879_27885,1,null);domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_27886,cljs.core.array_seq([value_27887], 0));
{
var G__27888 = seq__27875_27881;
var G__27889 = chunk__27876_27882;
var G__27890 = count__27877_27883;
var G__27891 = (i__27878_27884 + 1);
seq__27875_27881 = G__27888;
chunk__27876_27882 = G__27889;
count__27877_27883 = G__27890;
i__27878_27884 = G__27891;
continue;
}
} else
{var temp__4092__auto___27892 = cljs.core.seq(seq__27875_27881);if(temp__4092__auto___27892)
{var seq__27875_27893__$1 = temp__4092__auto___27892;if(cljs.core.chunked_seq_QMARK_(seq__27875_27893__$1))
{var c__4148__auto___27894 = cljs.core.chunk_first(seq__27875_27893__$1);{
var G__27895 = cljs.core.chunk_rest(seq__27875_27893__$1);
var G__27896 = c__4148__auto___27894;
var G__27897 = cljs.core.count(c__4148__auto___27894);
var G__27898 = 0;
seq__27875_27881 = G__27895;
chunk__27876_27882 = G__27896;
count__27877_27883 = G__27897;
i__27878_27884 = G__27898;
continue;
}
} else
{var vec__27880_27899 = cljs.core.first(seq__27875_27893__$1);var name_27900 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27880_27899,0,null);var value_27901 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27880_27899,1,null);domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_27900,cljs.core.array_seq([value_27901], 0));
{
var G__27902 = cljs.core.next(seq__27875_27893__$1);
var G__27903 = null;
var G__27904 = 0;
var G__27905 = 0;
seq__27875_27881 = G__27902;
chunk__27876_27882 = G__27903;
count__27877_27883 = G__27904;
i__27878_27884 = G__27905;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__27910_27914 = cljs.core.seq(domina.nodes(content));var chunk__27911_27915 = null;var count__27912_27916 = 0;var i__27913_27917 = 0;while(true){
if((i__27913_27917 < count__27912_27916))
{var node_27918 = chunk__27911_27915.cljs$core$IIndexed$_nth$arity$2(null,i__27913_27917);goog.dom.classes.add(node_27918,class$);
{
var G__27919 = seq__27910_27914;
var G__27920 = chunk__27911_27915;
var G__27921 = count__27912_27916;
var G__27922 = (i__27913_27917 + 1);
seq__27910_27914 = G__27919;
chunk__27911_27915 = G__27920;
count__27912_27916 = G__27921;
i__27913_27917 = G__27922;
continue;
}
} else
{var temp__4092__auto___27923 = cljs.core.seq(seq__27910_27914);if(temp__4092__auto___27923)
{var seq__27910_27924__$1 = temp__4092__auto___27923;if(cljs.core.chunked_seq_QMARK_(seq__27910_27924__$1))
{var c__4148__auto___27925 = cljs.core.chunk_first(seq__27910_27924__$1);{
var G__27926 = cljs.core.chunk_rest(seq__27910_27924__$1);
var G__27927 = c__4148__auto___27925;
var G__27928 = cljs.core.count(c__4148__auto___27925);
var G__27929 = 0;
seq__27910_27914 = G__27926;
chunk__27911_27915 = G__27927;
count__27912_27916 = G__27928;
i__27913_27917 = G__27929;
continue;
}
} else
{var node_27930 = cljs.core.first(seq__27910_27924__$1);goog.dom.classes.add(node_27930,class$);
{
var G__27931 = cljs.core.next(seq__27910_27924__$1);
var G__27932 = null;
var G__27933 = 0;
var G__27934 = 0;
seq__27910_27914 = G__27931;
chunk__27911_27915 = G__27932;
count__27912_27916 = G__27933;
i__27913_27917 = G__27934;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__27939_27943 = cljs.core.seq(domina.nodes(content));var chunk__27940_27944 = null;var count__27941_27945 = 0;var i__27942_27946 = 0;while(true){
if((i__27942_27946 < count__27941_27945))
{var node_27947 = chunk__27940_27944.cljs$core$IIndexed$_nth$arity$2(null,i__27942_27946);goog.dom.classes.remove(node_27947,class$);
{
var G__27948 = seq__27939_27943;
var G__27949 = chunk__27940_27944;
var G__27950 = count__27941_27945;
var G__27951 = (i__27942_27946 + 1);
seq__27939_27943 = G__27948;
chunk__27940_27944 = G__27949;
count__27941_27945 = G__27950;
i__27942_27946 = G__27951;
continue;
}
} else
{var temp__4092__auto___27952 = cljs.core.seq(seq__27939_27943);if(temp__4092__auto___27952)
{var seq__27939_27953__$1 = temp__4092__auto___27952;if(cljs.core.chunked_seq_QMARK_(seq__27939_27953__$1))
{var c__4148__auto___27954 = cljs.core.chunk_first(seq__27939_27953__$1);{
var G__27955 = cljs.core.chunk_rest(seq__27939_27953__$1);
var G__27956 = c__4148__auto___27954;
var G__27957 = cljs.core.count(c__4148__auto___27954);
var G__27958 = 0;
seq__27939_27943 = G__27955;
chunk__27940_27944 = G__27956;
count__27941_27945 = G__27957;
i__27942_27946 = G__27958;
continue;
}
} else
{var node_27959 = cljs.core.first(seq__27939_27953__$1);goog.dom.classes.remove(node_27959,class$);
{
var G__27960 = cljs.core.next(seq__27939_27953__$1);
var G__27961 = null;
var G__27962 = 0;
var G__27963 = 0;
seq__27939_27943 = G__27960;
chunk__27940_27944 = G__27961;
count__27941_27945 = G__27962;
i__27942_27946 = G__27963;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__27968_27972 = cljs.core.seq(domina.nodes(content));var chunk__27969_27973 = null;var count__27970_27974 = 0;var i__27971_27975 = 0;while(true){
if((i__27971_27975 < count__27970_27974))
{var node_27976 = chunk__27969_27973.cljs$core$IIndexed$_nth$arity$2(null,i__27971_27975);goog.dom.classes.toggle(node_27976,class$);
{
var G__27977 = seq__27968_27972;
var G__27978 = chunk__27969_27973;
var G__27979 = count__27970_27974;
var G__27980 = (i__27971_27975 + 1);
seq__27968_27972 = G__27977;
chunk__27969_27973 = G__27978;
count__27970_27974 = G__27979;
i__27971_27975 = G__27980;
continue;
}
} else
{var temp__4092__auto___27981 = cljs.core.seq(seq__27968_27972);if(temp__4092__auto___27981)
{var seq__27968_27982__$1 = temp__4092__auto___27981;if(cljs.core.chunked_seq_QMARK_(seq__27968_27982__$1))
{var c__4148__auto___27983 = cljs.core.chunk_first(seq__27968_27982__$1);{
var G__27984 = cljs.core.chunk_rest(seq__27968_27982__$1);
var G__27985 = c__4148__auto___27983;
var G__27986 = cljs.core.count(c__4148__auto___27983);
var G__27987 = 0;
seq__27968_27972 = G__27984;
chunk__27969_27973 = G__27985;
count__27970_27974 = G__27986;
i__27971_27975 = G__27987;
continue;
}
} else
{var node_27988 = cljs.core.first(seq__27968_27982__$1);goog.dom.classes.toggle(node_27988,class$);
{
var G__27989 = cljs.core.next(seq__27968_27982__$1);
var G__27990 = null;
var G__27991 = 0;
var G__27992 = 0;
seq__27968_27972 = G__27989;
chunk__27969_27973 = G__27990;
count__27970_27974 = G__27991;
i__27971_27975 = G__27992;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_28001__$1 = ((cljs.core.coll_QMARK_(classes))?clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",classes):classes);var seq__27997_28002 = cljs.core.seq(domina.nodes(content));var chunk__27998_28003 = null;var count__27999_28004 = 0;var i__28000_28005 = 0;while(true){
if((i__28000_28005 < count__27999_28004))
{var node_28006 = chunk__27998_28003.cljs$core$IIndexed$_nth$arity$2(null,i__28000_28005);goog.dom.classes.set(node_28006,classes_28001__$1);
{
var G__28007 = seq__27997_28002;
var G__28008 = chunk__27998_28003;
var G__28009 = count__27999_28004;
var G__28010 = (i__28000_28005 + 1);
seq__27997_28002 = G__28007;
chunk__27998_28003 = G__28008;
count__27999_28004 = G__28009;
i__28000_28005 = G__28010;
continue;
}
} else
{var temp__4092__auto___28011 = cljs.core.seq(seq__27997_28002);if(temp__4092__auto___28011)
{var seq__27997_28012__$1 = temp__4092__auto___28011;if(cljs.core.chunked_seq_QMARK_(seq__27997_28012__$1))
{var c__4148__auto___28013 = cljs.core.chunk_first(seq__27997_28012__$1);{
var G__28014 = cljs.core.chunk_rest(seq__27997_28012__$1);
var G__28015 = c__4148__auto___28013;
var G__28016 = cljs.core.count(c__4148__auto___28013);
var G__28017 = 0;
seq__27997_28002 = G__28014;
chunk__27998_28003 = G__28015;
count__27999_28004 = G__28016;
i__28000_28005 = G__28017;
continue;
}
} else
{var node_28018 = cljs.core.first(seq__27997_28012__$1);goog.dom.classes.set(node_28018,classes_28001__$1);
{
var G__28019 = cljs.core.next(seq__27997_28012__$1);
var G__28020 = null;
var G__28021 = 0;
var G__28022 = 0;
seq__27997_28002 = G__28019;
chunk__27998_28003 = G__28020;
count__27999_28004 = G__28021;
i__28000_28005 = G__28022;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__28027_28031 = cljs.core.seq(domina.nodes(content));var chunk__28028_28032 = null;var count__28029_28033 = 0;var i__28030_28034 = 0;while(true){
if((i__28030_28034 < count__28029_28033))
{var node_28035 = chunk__28028_28032.cljs$core$IIndexed$_nth$arity$2(null,i__28030_28034);goog.dom.setTextContent(node_28035,value);
{
var G__28036 = seq__28027_28031;
var G__28037 = chunk__28028_28032;
var G__28038 = count__28029_28033;
var G__28039 = (i__28030_28034 + 1);
seq__28027_28031 = G__28036;
chunk__28028_28032 = G__28037;
count__28029_28033 = G__28038;
i__28030_28034 = G__28039;
continue;
}
} else
{var temp__4092__auto___28040 = cljs.core.seq(seq__28027_28031);if(temp__4092__auto___28040)
{var seq__28027_28041__$1 = temp__4092__auto___28040;if(cljs.core.chunked_seq_QMARK_(seq__28027_28041__$1))
{var c__4148__auto___28042 = cljs.core.chunk_first(seq__28027_28041__$1);{
var G__28043 = cljs.core.chunk_rest(seq__28027_28041__$1);
var G__28044 = c__4148__auto___28042;
var G__28045 = cljs.core.count(c__4148__auto___28042);
var G__28046 = 0;
seq__28027_28031 = G__28043;
chunk__28028_28032 = G__28044;
count__28029_28033 = G__28045;
i__28030_28034 = G__28046;
continue;
}
} else
{var node_28047 = cljs.core.first(seq__28027_28041__$1);goog.dom.setTextContent(node_28047,value);
{
var G__28048 = cljs.core.next(seq__28027_28041__$1);
var G__28049 = null;
var G__28050 = 0;
var G__28051 = 0;
seq__28027_28031 = G__28048;
chunk__28028_28032 = G__28049;
count__28029_28033 = G__28050;
i__28030_28034 = G__28051;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__28056_28060 = cljs.core.seq(domina.nodes(content));var chunk__28057_28061 = null;var count__28058_28062 = 0;var i__28059_28063 = 0;while(true){
if((i__28059_28063 < count__28058_28062))
{var node_28064 = chunk__28057_28061.cljs$core$IIndexed$_nth$arity$2(null,i__28059_28063);goog.dom.forms.setValue(node_28064,value);
{
var G__28065 = seq__28056_28060;
var G__28066 = chunk__28057_28061;
var G__28067 = count__28058_28062;
var G__28068 = (i__28059_28063 + 1);
seq__28056_28060 = G__28065;
chunk__28057_28061 = G__28066;
count__28058_28062 = G__28067;
i__28059_28063 = G__28068;
continue;
}
} else
{var temp__4092__auto___28069 = cljs.core.seq(seq__28056_28060);if(temp__4092__auto___28069)
{var seq__28056_28070__$1 = temp__4092__auto___28069;if(cljs.core.chunked_seq_QMARK_(seq__28056_28070__$1))
{var c__4148__auto___28071 = cljs.core.chunk_first(seq__28056_28070__$1);{
var G__28072 = cljs.core.chunk_rest(seq__28056_28070__$1);
var G__28073 = c__4148__auto___28071;
var G__28074 = cljs.core.count(c__4148__auto___28071);
var G__28075 = 0;
seq__28056_28060 = G__28072;
chunk__28057_28061 = G__28073;
count__28058_28062 = G__28074;
i__28059_28063 = G__28075;
continue;
}
} else
{var node_28076 = cljs.core.first(seq__28056_28070__$1);goog.dom.forms.setValue(node_28076,value);
{
var G__28077 = cljs.core.next(seq__28056_28070__$1);
var G__28078 = null;
var G__28079 = 0;
var G__28080 = 0;
seq__28056_28060 = G__28077;
chunk__28057_28061 = G__28078;
count__28058_28062 = G__28079;
i__28059_28063 = G__28080;
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
{var value_28091 = clojure.string.replace(html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__28087_28092 = cljs.core.seq(domina.nodes(content));var chunk__28088_28093 = null;var count__28089_28094 = 0;var i__28090_28095 = 0;while(true){
if((i__28090_28095 < count__28089_28094))
{var node_28096 = chunk__28088_28093.cljs$core$IIndexed$_nth$arity$2(null,i__28090_28095);node_28096.innerHTML = value_28091;
{
var G__28097 = seq__28087_28092;
var G__28098 = chunk__28088_28093;
var G__28099 = count__28089_28094;
var G__28100 = (i__28090_28095 + 1);
seq__28087_28092 = G__28097;
chunk__28088_28093 = G__28098;
count__28089_28094 = G__28099;
i__28090_28095 = G__28100;
continue;
}
} else
{var temp__4092__auto___28101 = cljs.core.seq(seq__28087_28092);if(temp__4092__auto___28101)
{var seq__28087_28102__$1 = temp__4092__auto___28101;if(cljs.core.chunked_seq_QMARK_(seq__28087_28102__$1))
{var c__4148__auto___28103 = cljs.core.chunk_first(seq__28087_28102__$1);{
var G__28104 = cljs.core.chunk_rest(seq__28087_28102__$1);
var G__28105 = c__4148__auto___28103;
var G__28106 = cljs.core.count(c__4148__auto___28103);
var G__28107 = 0;
seq__28087_28092 = G__28104;
chunk__28088_28093 = G__28105;
count__28089_28094 = G__28106;
i__28090_28095 = G__28107;
continue;
}
} else
{var node_28108 = cljs.core.first(seq__28087_28102__$1);node_28108.innerHTML = value_28091;
{
var G__28109 = cljs.core.next(seq__28087_28102__$1);
var G__28110 = null;
var G__28111 = 0;
var G__28112 = 0;
seq__28087_28092 = G__28109;
chunk__28088_28093 = G__28110;
count__28089_28094 = G__28111;
i__28090_28095 = G__28112;
continue;
}
}
} else
{}
}
break;
}
}catch (e28086){if((e28086 instanceof Error))
{var e_28113 = e28086;domina.replace_children_BANG_(content,value_28091);
} else
{if(cljs.core.constant$keyword$237)
{throw e28086;
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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes(parent_content);var children = domina.nodes(child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__28120_28124 = cljs.core.seq(children);var chunk__28121_28125 = null;var count__28122_28126 = 0;var i__28123_28127 = 0;while(true){
if((i__28123_28127 < count__28122_28126))
{var child_28128 = chunk__28121_28125.cljs$core$IIndexed$_nth$arity$2(null,i__28123_28127);frag.appendChild(child_28128);
{
var G__28129 = seq__28120_28124;
var G__28130 = chunk__28121_28125;
var G__28131 = count__28122_28126;
var G__28132 = (i__28123_28127 + 1);
seq__28120_28124 = G__28129;
chunk__28121_28125 = G__28130;
count__28122_28126 = G__28131;
i__28123_28127 = G__28132;
continue;
}
} else
{var temp__4092__auto___28133 = cljs.core.seq(seq__28120_28124);if(temp__4092__auto___28133)
{var seq__28120_28134__$1 = temp__4092__auto___28133;if(cljs.core.chunked_seq_QMARK_(seq__28120_28134__$1))
{var c__4148__auto___28135 = cljs.core.chunk_first(seq__28120_28134__$1);{
var G__28136 = cljs.core.chunk_rest(seq__28120_28134__$1);
var G__28137 = c__4148__auto___28135;
var G__28138 = cljs.core.count(c__4148__auto___28135);
var G__28139 = 0;
seq__28120_28124 = G__28136;
chunk__28121_28125 = G__28137;
count__28122_28126 = G__28138;
i__28123_28127 = G__28139;
continue;
}
} else
{var child_28140 = cljs.core.first(seq__28120_28134__$1);frag.appendChild(child_28140);
{
var G__28141 = cljs.core.next(seq__28120_28134__$1);
var G__28142 = null;
var G__28143 = 0;
var G__28144 = 0;
seq__28120_28124 = G__28141;
chunk__28121_28125 = G__28142;
count__28122_28126 = G__28143;
i__28123_28127 = G__28144;
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
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (p1__28114_SHARP_,p2__28115_SHARP_){return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(p1__28114_SHARP_,p2__28115_SHARP_) : f.call(null,p1__28114_SHARP_,p2__28115_SHARP_));
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
{if((function (){var G__28146 = list_thing;if(G__28146)
{var bit__4050__auto__ = (G__28146.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__28146.cljs$core$ISeqable$))
{return true;
} else
{if((!G__28146.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__28146);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__28146);
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
{if((function (){var G__28147 = content;if(G__28147)
{var bit__4050__auto__ = (G__28147.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__28147.cljs$core$ISeqable$))
{return true;
} else
{if((!G__28147.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__28147);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__28147);
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
{if((function (){var G__28148 = content;if(G__28148)
{var bit__4050__auto__ = (G__28148.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__28148.cljs$core$ISeqable$))
{return true;
} else
{if((!G__28148.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__28148);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__28148);
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
