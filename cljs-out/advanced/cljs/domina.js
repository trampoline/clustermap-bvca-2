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
var opt_wrapper_27487 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_27488 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<table>","</table>"], null);var cell_wrapper_27489 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["col",cljs.core.constant$keyword$224,"tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,"",""], null),table_section_wrapper_27488,table_section_wrapper_27488,opt_wrapper_27487,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<fieldset>","</fieldset>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<map>","</map>"], null),cell_wrapper_27489,table_section_wrapper_27488,cell_wrapper_27489,opt_wrapper_27487,table_section_wrapper_27488,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody>","</tbody></table>"], null),table_section_wrapper_27488]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not(cljs.core.re_find(domina.re_tbody,html));var tbody = (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3394__auto__ = div.firstChild;if(cljs.core.truth_(and__3394__auto__))
{return div.firstChild.childNodes;
} else
{return and__3394__auto__;
}
})():(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__27494 = cljs.core.seq(tbody);var chunk__27495 = null;var count__27496 = 0;var i__27497 = 0;while(true){
if((i__27497 < count__27496))
{var child = chunk__27495.cljs$core$IIndexed$_nth$arity$2(null,i__27497);if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.nodeName,"tbody")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__27498 = seq__27494;
var G__27499 = chunk__27495;
var G__27500 = count__27496;
var G__27501 = (i__27497 + 1);
seq__27494 = G__27498;
chunk__27495 = G__27499;
count__27496 = G__27500;
i__27497 = G__27501;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__27494);if(temp__4092__auto__)
{var seq__27494__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__27494__$1))
{var c__4148__auto__ = cljs.core.chunk_first(seq__27494__$1);{
var G__27502 = cljs.core.chunk_rest(seq__27494__$1);
var G__27503 = c__4148__auto__;
var G__27504 = cljs.core.count(c__4148__auto__);
var G__27505 = 0;
seq__27494 = G__27502;
chunk__27495 = G__27503;
count__27496 = G__27504;
i__27497 = G__27505;
continue;
}
} else
{var child = cljs.core.first(seq__27494__$1);if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.nodeName,"tbody")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__27506 = cljs.core.next(seq__27494__$1);
var G__27507 = null;
var G__27508 = 0;
var G__27509 = 0;
seq__27494 = G__27506;
chunk__27495 = G__27507;
count__27496 = G__27508;
i__27497 = G__27509;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace(html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = [cljs.core.str(cljs.core.second(cljs.core.re_find(domina.re_tag_name,html__$1)))].join('').toLowerCase();var vec__27511 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(domina.wrap_map,tag_name,cljs.core.constant$keyword$224.cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27511,0,null);var start_wrap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27511,1,null);var end_wrap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27511,2,null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');
return div;
})();var level = depth;while(true){
if((level > 0))
{{
var G__27512 = wrapper.lastChild;
var G__27513 = (level - 1);
wrapper = G__27512;
level = G__27513;
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
domina.DomContent = (function (){var obj27515 = {};return obj27515;
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
log_debug.cljs$lang$applyTo = (function (arglist__27516){
var mesg = cljs.core.seq(arglist__27516);
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
log.cljs$lang$applyTo = (function (arglist__27517){
var mesg = cljs.core.seq(arglist__27517);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__27518){
var contents = cljs.core.seq(arglist__27518);
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
domina.clone = (function clone(content){return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__27519_SHARP_){return p1__27519_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__27520_SHARP_,p2__27521_SHARP_){return goog.dom.insertChildAt(p1__27520_SHARP_,p2__27521_SHARP_,idx);
}),parent_content,child_content) : domina.apply_with_cloning.call(null,(function (p1__27520_SHARP_,p2__27521_SHARP_){return goog.dom.insertChildAt(p1__27520_SHARP_,p2__27521_SHARP_,idx);
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__27523_SHARP_,p2__27522_SHARP_){return goog.dom.insertSiblingBefore(p2__27522_SHARP_,p1__27523_SHARP_);
}),content,new_content) : domina.apply_with_cloning.call(null,(function (p1__27523_SHARP_,p2__27522_SHARP_){return goog.dom.insertSiblingBefore(p2__27522_SHARP_,p1__27523_SHARP_);
}),content,new_content));
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__27525_SHARP_,p2__27524_SHARP_){return goog.dom.insertSiblingAfter(p2__27524_SHARP_,p1__27525_SHARP_);
}),content,new_content) : domina.apply_with_cloning.call(null,(function (p1__27525_SHARP_,p2__27524_SHARP_){return goog.dom.insertSiblingAfter(p2__27524_SHARP_,p1__27525_SHARP_);
}),content,new_content));
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__27527_SHARP_,p2__27526_SHARP_){return goog.dom.replaceNode(p2__27526_SHARP_,p1__27527_SHARP_);
}),old_content,new_content) : domina.apply_with_cloning.call(null,(function (p1__27527_SHARP_,p2__27526_SHARP_){return goog.dom.replaceNode(p2__27526_SHARP_,p1__27527_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__27532_27536 = cljs.core.seq(domina.nodes(content));var chunk__27533_27537 = null;var count__27534_27538 = 0;var i__27535_27539 = 0;while(true){
if((i__27535_27539 < count__27534_27538))
{var n_27540 = chunk__27533_27537.cljs$core$IIndexed$_nth$arity$2(null,i__27535_27539);goog.style.setStyle(n_27540,cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__27541 = seq__27532_27536;
var G__27542 = chunk__27533_27537;
var G__27543 = count__27534_27538;
var G__27544 = (i__27535_27539 + 1);
seq__27532_27536 = G__27541;
chunk__27533_27537 = G__27542;
count__27534_27538 = G__27543;
i__27535_27539 = G__27544;
continue;
}
} else
{var temp__4092__auto___27545 = cljs.core.seq(seq__27532_27536);if(temp__4092__auto___27545)
{var seq__27532_27546__$1 = temp__4092__auto___27545;if(cljs.core.chunked_seq_QMARK_(seq__27532_27546__$1))
{var c__4148__auto___27547 = cljs.core.chunk_first(seq__27532_27546__$1);{
var G__27548 = cljs.core.chunk_rest(seq__27532_27546__$1);
var G__27549 = c__4148__auto___27547;
var G__27550 = cljs.core.count(c__4148__auto___27547);
var G__27551 = 0;
seq__27532_27536 = G__27548;
chunk__27533_27537 = G__27549;
count__27534_27538 = G__27550;
i__27535_27539 = G__27551;
continue;
}
} else
{var n_27552 = cljs.core.first(seq__27532_27546__$1);goog.style.setStyle(n_27552,cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__27553 = cljs.core.next(seq__27532_27546__$1);
var G__27554 = null;
var G__27555 = 0;
var G__27556 = 0;
seq__27532_27536 = G__27553;
chunk__27533_27537 = G__27554;
count__27534_27538 = G__27555;
i__27535_27539 = G__27556;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__27557){
var content = cljs.core.first(arglist__27557);
arglist__27557 = cljs.core.next(arglist__27557);
var name = cljs.core.first(arglist__27557);
var value = cljs.core.rest(arglist__27557);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__27562_27566 = cljs.core.seq(domina.nodes(content));var chunk__27563_27567 = null;var count__27564_27568 = 0;var i__27565_27569 = 0;while(true){
if((i__27565_27569 < count__27564_27568))
{var n_27570 = chunk__27563_27567.cljs$core$IIndexed$_nth$arity$2(null,i__27565_27569);n_27570.setAttribute(cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__27571 = seq__27562_27566;
var G__27572 = chunk__27563_27567;
var G__27573 = count__27564_27568;
var G__27574 = (i__27565_27569 + 1);
seq__27562_27566 = G__27571;
chunk__27563_27567 = G__27572;
count__27564_27568 = G__27573;
i__27565_27569 = G__27574;
continue;
}
} else
{var temp__4092__auto___27575 = cljs.core.seq(seq__27562_27566);if(temp__4092__auto___27575)
{var seq__27562_27576__$1 = temp__4092__auto___27575;if(cljs.core.chunked_seq_QMARK_(seq__27562_27576__$1))
{var c__4148__auto___27577 = cljs.core.chunk_first(seq__27562_27576__$1);{
var G__27578 = cljs.core.chunk_rest(seq__27562_27576__$1);
var G__27579 = c__4148__auto___27577;
var G__27580 = cljs.core.count(c__4148__auto___27577);
var G__27581 = 0;
seq__27562_27566 = G__27578;
chunk__27563_27567 = G__27579;
count__27564_27568 = G__27580;
i__27565_27569 = G__27581;
continue;
}
} else
{var n_27582 = cljs.core.first(seq__27562_27576__$1);n_27582.setAttribute(cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__27583 = cljs.core.next(seq__27562_27576__$1);
var G__27584 = null;
var G__27585 = 0;
var G__27586 = 0;
seq__27562_27566 = G__27583;
chunk__27563_27567 = G__27584;
count__27564_27568 = G__27585;
i__27565_27569 = G__27586;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__27587){
var content = cljs.core.first(arglist__27587);
arglist__27587 = cljs.core.next(arglist__27587);
var name = cljs.core.first(arglist__27587);
var value = cljs.core.rest(arglist__27587);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__27592_27596 = cljs.core.seq(domina.nodes(content));var chunk__27593_27597 = null;var count__27594_27598 = 0;var i__27595_27599 = 0;while(true){
if((i__27595_27599 < count__27594_27598))
{var n_27600 = chunk__27593_27597.cljs$core$IIndexed$_nth$arity$2(null,i__27595_27599);n_27600.removeAttribute(cljs.core.name(name));
{
var G__27601 = seq__27592_27596;
var G__27602 = chunk__27593_27597;
var G__27603 = count__27594_27598;
var G__27604 = (i__27595_27599 + 1);
seq__27592_27596 = G__27601;
chunk__27593_27597 = G__27602;
count__27594_27598 = G__27603;
i__27595_27599 = G__27604;
continue;
}
} else
{var temp__4092__auto___27605 = cljs.core.seq(seq__27592_27596);if(temp__4092__auto___27605)
{var seq__27592_27606__$1 = temp__4092__auto___27605;if(cljs.core.chunked_seq_QMARK_(seq__27592_27606__$1))
{var c__4148__auto___27607 = cljs.core.chunk_first(seq__27592_27606__$1);{
var G__27608 = cljs.core.chunk_rest(seq__27592_27606__$1);
var G__27609 = c__4148__auto___27607;
var G__27610 = cljs.core.count(c__4148__auto___27607);
var G__27611 = 0;
seq__27592_27596 = G__27608;
chunk__27593_27597 = G__27609;
count__27594_27598 = G__27610;
i__27595_27599 = G__27611;
continue;
}
} else
{var n_27612 = cljs.core.first(seq__27592_27606__$1);n_27612.removeAttribute(cljs.core.name(name));
{
var G__27613 = cljs.core.next(seq__27592_27606__$1);
var G__27614 = null;
var G__27615 = 0;
var G__27616 = 0;
seq__27592_27596 = G__27613;
chunk__27593_27597 = G__27614;
count__27594_27598 = G__27615;
i__27595_27599 = G__27616;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,pair){var vec__27618 = pair.split(/\s*:\s*/);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27618,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27618,1,null);if(cljs.core.truth_((function (){var and__3394__auto__ = k;if(cljs.core.truth_(and__3394__auto__))
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
{if(cljs.core.constant$keyword$223)
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
domina.attrs = (function attrs(content){var node = domina.single_node(content);var attrs__$1 = node.attributes;return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.filter(cljs.core.complement(cljs.core.nil_QMARK_),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__27619_SHARP_){var attr = attrs__$1.item(p1__27619_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(null,value)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__27626_27632 = cljs.core.seq(styles);var chunk__27627_27633 = null;var count__27628_27634 = 0;var i__27629_27635 = 0;while(true){
if((i__27629_27635 < count__27628_27634))
{var vec__27630_27636 = chunk__27627_27633.cljs$core$IIndexed$_nth$arity$2(null,i__27629_27635);var name_27637 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27630_27636,0,null);var value_27638 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27630_27636,1,null);domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_27637,cljs.core.array_seq([value_27638], 0));
{
var G__27639 = seq__27626_27632;
var G__27640 = chunk__27627_27633;
var G__27641 = count__27628_27634;
var G__27642 = (i__27629_27635 + 1);
seq__27626_27632 = G__27639;
chunk__27627_27633 = G__27640;
count__27628_27634 = G__27641;
i__27629_27635 = G__27642;
continue;
}
} else
{var temp__4092__auto___27643 = cljs.core.seq(seq__27626_27632);if(temp__4092__auto___27643)
{var seq__27626_27644__$1 = temp__4092__auto___27643;if(cljs.core.chunked_seq_QMARK_(seq__27626_27644__$1))
{var c__4148__auto___27645 = cljs.core.chunk_first(seq__27626_27644__$1);{
var G__27646 = cljs.core.chunk_rest(seq__27626_27644__$1);
var G__27647 = c__4148__auto___27645;
var G__27648 = cljs.core.count(c__4148__auto___27645);
var G__27649 = 0;
seq__27626_27632 = G__27646;
chunk__27627_27633 = G__27647;
count__27628_27634 = G__27648;
i__27629_27635 = G__27649;
continue;
}
} else
{var vec__27631_27650 = cljs.core.first(seq__27626_27644__$1);var name_27651 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27631_27650,0,null);var value_27652 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27631_27650,1,null);domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_27651,cljs.core.array_seq([value_27652], 0));
{
var G__27653 = cljs.core.next(seq__27626_27644__$1);
var G__27654 = null;
var G__27655 = 0;
var G__27656 = 0;
seq__27626_27632 = G__27653;
chunk__27627_27633 = G__27654;
count__27628_27634 = G__27655;
i__27629_27635 = G__27656;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__27663_27669 = cljs.core.seq(attrs);var chunk__27664_27670 = null;var count__27665_27671 = 0;var i__27666_27672 = 0;while(true){
if((i__27666_27672 < count__27665_27671))
{var vec__27667_27673 = chunk__27664_27670.cljs$core$IIndexed$_nth$arity$2(null,i__27666_27672);var name_27674 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27667_27673,0,null);var value_27675 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27667_27673,1,null);domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_27674,cljs.core.array_seq([value_27675], 0));
{
var G__27676 = seq__27663_27669;
var G__27677 = chunk__27664_27670;
var G__27678 = count__27665_27671;
var G__27679 = (i__27666_27672 + 1);
seq__27663_27669 = G__27676;
chunk__27664_27670 = G__27677;
count__27665_27671 = G__27678;
i__27666_27672 = G__27679;
continue;
}
} else
{var temp__4092__auto___27680 = cljs.core.seq(seq__27663_27669);if(temp__4092__auto___27680)
{var seq__27663_27681__$1 = temp__4092__auto___27680;if(cljs.core.chunked_seq_QMARK_(seq__27663_27681__$1))
{var c__4148__auto___27682 = cljs.core.chunk_first(seq__27663_27681__$1);{
var G__27683 = cljs.core.chunk_rest(seq__27663_27681__$1);
var G__27684 = c__4148__auto___27682;
var G__27685 = cljs.core.count(c__4148__auto___27682);
var G__27686 = 0;
seq__27663_27669 = G__27683;
chunk__27664_27670 = G__27684;
count__27665_27671 = G__27685;
i__27666_27672 = G__27686;
continue;
}
} else
{var vec__27668_27687 = cljs.core.first(seq__27663_27681__$1);var name_27688 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27668_27687,0,null);var value_27689 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27668_27687,1,null);domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_27688,cljs.core.array_seq([value_27689], 0));
{
var G__27690 = cljs.core.next(seq__27663_27681__$1);
var G__27691 = null;
var G__27692 = 0;
var G__27693 = 0;
seq__27663_27669 = G__27690;
chunk__27664_27670 = G__27691;
count__27665_27671 = G__27692;
i__27666_27672 = G__27693;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__27698_27702 = cljs.core.seq(domina.nodes(content));var chunk__27699_27703 = null;var count__27700_27704 = 0;var i__27701_27705 = 0;while(true){
if((i__27701_27705 < count__27700_27704))
{var node_27706 = chunk__27699_27703.cljs$core$IIndexed$_nth$arity$2(null,i__27701_27705);goog.dom.classes.add(node_27706,class$);
{
var G__27707 = seq__27698_27702;
var G__27708 = chunk__27699_27703;
var G__27709 = count__27700_27704;
var G__27710 = (i__27701_27705 + 1);
seq__27698_27702 = G__27707;
chunk__27699_27703 = G__27708;
count__27700_27704 = G__27709;
i__27701_27705 = G__27710;
continue;
}
} else
{var temp__4092__auto___27711 = cljs.core.seq(seq__27698_27702);if(temp__4092__auto___27711)
{var seq__27698_27712__$1 = temp__4092__auto___27711;if(cljs.core.chunked_seq_QMARK_(seq__27698_27712__$1))
{var c__4148__auto___27713 = cljs.core.chunk_first(seq__27698_27712__$1);{
var G__27714 = cljs.core.chunk_rest(seq__27698_27712__$1);
var G__27715 = c__4148__auto___27713;
var G__27716 = cljs.core.count(c__4148__auto___27713);
var G__27717 = 0;
seq__27698_27702 = G__27714;
chunk__27699_27703 = G__27715;
count__27700_27704 = G__27716;
i__27701_27705 = G__27717;
continue;
}
} else
{var node_27718 = cljs.core.first(seq__27698_27712__$1);goog.dom.classes.add(node_27718,class$);
{
var G__27719 = cljs.core.next(seq__27698_27712__$1);
var G__27720 = null;
var G__27721 = 0;
var G__27722 = 0;
seq__27698_27702 = G__27719;
chunk__27699_27703 = G__27720;
count__27700_27704 = G__27721;
i__27701_27705 = G__27722;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__27727_27731 = cljs.core.seq(domina.nodes(content));var chunk__27728_27732 = null;var count__27729_27733 = 0;var i__27730_27734 = 0;while(true){
if((i__27730_27734 < count__27729_27733))
{var node_27735 = chunk__27728_27732.cljs$core$IIndexed$_nth$arity$2(null,i__27730_27734);goog.dom.classes.remove(node_27735,class$);
{
var G__27736 = seq__27727_27731;
var G__27737 = chunk__27728_27732;
var G__27738 = count__27729_27733;
var G__27739 = (i__27730_27734 + 1);
seq__27727_27731 = G__27736;
chunk__27728_27732 = G__27737;
count__27729_27733 = G__27738;
i__27730_27734 = G__27739;
continue;
}
} else
{var temp__4092__auto___27740 = cljs.core.seq(seq__27727_27731);if(temp__4092__auto___27740)
{var seq__27727_27741__$1 = temp__4092__auto___27740;if(cljs.core.chunked_seq_QMARK_(seq__27727_27741__$1))
{var c__4148__auto___27742 = cljs.core.chunk_first(seq__27727_27741__$1);{
var G__27743 = cljs.core.chunk_rest(seq__27727_27741__$1);
var G__27744 = c__4148__auto___27742;
var G__27745 = cljs.core.count(c__4148__auto___27742);
var G__27746 = 0;
seq__27727_27731 = G__27743;
chunk__27728_27732 = G__27744;
count__27729_27733 = G__27745;
i__27730_27734 = G__27746;
continue;
}
} else
{var node_27747 = cljs.core.first(seq__27727_27741__$1);goog.dom.classes.remove(node_27747,class$);
{
var G__27748 = cljs.core.next(seq__27727_27741__$1);
var G__27749 = null;
var G__27750 = 0;
var G__27751 = 0;
seq__27727_27731 = G__27748;
chunk__27728_27732 = G__27749;
count__27729_27733 = G__27750;
i__27730_27734 = G__27751;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__27756_27760 = cljs.core.seq(domina.nodes(content));var chunk__27757_27761 = null;var count__27758_27762 = 0;var i__27759_27763 = 0;while(true){
if((i__27759_27763 < count__27758_27762))
{var node_27764 = chunk__27757_27761.cljs$core$IIndexed$_nth$arity$2(null,i__27759_27763);goog.dom.classes.toggle(node_27764,class$);
{
var G__27765 = seq__27756_27760;
var G__27766 = chunk__27757_27761;
var G__27767 = count__27758_27762;
var G__27768 = (i__27759_27763 + 1);
seq__27756_27760 = G__27765;
chunk__27757_27761 = G__27766;
count__27758_27762 = G__27767;
i__27759_27763 = G__27768;
continue;
}
} else
{var temp__4092__auto___27769 = cljs.core.seq(seq__27756_27760);if(temp__4092__auto___27769)
{var seq__27756_27770__$1 = temp__4092__auto___27769;if(cljs.core.chunked_seq_QMARK_(seq__27756_27770__$1))
{var c__4148__auto___27771 = cljs.core.chunk_first(seq__27756_27770__$1);{
var G__27772 = cljs.core.chunk_rest(seq__27756_27770__$1);
var G__27773 = c__4148__auto___27771;
var G__27774 = cljs.core.count(c__4148__auto___27771);
var G__27775 = 0;
seq__27756_27760 = G__27772;
chunk__27757_27761 = G__27773;
count__27758_27762 = G__27774;
i__27759_27763 = G__27775;
continue;
}
} else
{var node_27776 = cljs.core.first(seq__27756_27770__$1);goog.dom.classes.toggle(node_27776,class$);
{
var G__27777 = cljs.core.next(seq__27756_27770__$1);
var G__27778 = null;
var G__27779 = 0;
var G__27780 = 0;
seq__27756_27760 = G__27777;
chunk__27757_27761 = G__27778;
count__27758_27762 = G__27779;
i__27759_27763 = G__27780;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_27789__$1 = ((cljs.core.coll_QMARK_(classes))?clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",classes):classes);var seq__27785_27790 = cljs.core.seq(domina.nodes(content));var chunk__27786_27791 = null;var count__27787_27792 = 0;var i__27788_27793 = 0;while(true){
if((i__27788_27793 < count__27787_27792))
{var node_27794 = chunk__27786_27791.cljs$core$IIndexed$_nth$arity$2(null,i__27788_27793);goog.dom.classes.set(node_27794,classes_27789__$1);
{
var G__27795 = seq__27785_27790;
var G__27796 = chunk__27786_27791;
var G__27797 = count__27787_27792;
var G__27798 = (i__27788_27793 + 1);
seq__27785_27790 = G__27795;
chunk__27786_27791 = G__27796;
count__27787_27792 = G__27797;
i__27788_27793 = G__27798;
continue;
}
} else
{var temp__4092__auto___27799 = cljs.core.seq(seq__27785_27790);if(temp__4092__auto___27799)
{var seq__27785_27800__$1 = temp__4092__auto___27799;if(cljs.core.chunked_seq_QMARK_(seq__27785_27800__$1))
{var c__4148__auto___27801 = cljs.core.chunk_first(seq__27785_27800__$1);{
var G__27802 = cljs.core.chunk_rest(seq__27785_27800__$1);
var G__27803 = c__4148__auto___27801;
var G__27804 = cljs.core.count(c__4148__auto___27801);
var G__27805 = 0;
seq__27785_27790 = G__27802;
chunk__27786_27791 = G__27803;
count__27787_27792 = G__27804;
i__27788_27793 = G__27805;
continue;
}
} else
{var node_27806 = cljs.core.first(seq__27785_27800__$1);goog.dom.classes.set(node_27806,classes_27789__$1);
{
var G__27807 = cljs.core.next(seq__27785_27800__$1);
var G__27808 = null;
var G__27809 = 0;
var G__27810 = 0;
seq__27785_27790 = G__27807;
chunk__27786_27791 = G__27808;
count__27787_27792 = G__27809;
i__27788_27793 = G__27810;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__27815_27819 = cljs.core.seq(domina.nodes(content));var chunk__27816_27820 = null;var count__27817_27821 = 0;var i__27818_27822 = 0;while(true){
if((i__27818_27822 < count__27817_27821))
{var node_27823 = chunk__27816_27820.cljs$core$IIndexed$_nth$arity$2(null,i__27818_27822);goog.dom.setTextContent(node_27823,value);
{
var G__27824 = seq__27815_27819;
var G__27825 = chunk__27816_27820;
var G__27826 = count__27817_27821;
var G__27827 = (i__27818_27822 + 1);
seq__27815_27819 = G__27824;
chunk__27816_27820 = G__27825;
count__27817_27821 = G__27826;
i__27818_27822 = G__27827;
continue;
}
} else
{var temp__4092__auto___27828 = cljs.core.seq(seq__27815_27819);if(temp__4092__auto___27828)
{var seq__27815_27829__$1 = temp__4092__auto___27828;if(cljs.core.chunked_seq_QMARK_(seq__27815_27829__$1))
{var c__4148__auto___27830 = cljs.core.chunk_first(seq__27815_27829__$1);{
var G__27831 = cljs.core.chunk_rest(seq__27815_27829__$1);
var G__27832 = c__4148__auto___27830;
var G__27833 = cljs.core.count(c__4148__auto___27830);
var G__27834 = 0;
seq__27815_27819 = G__27831;
chunk__27816_27820 = G__27832;
count__27817_27821 = G__27833;
i__27818_27822 = G__27834;
continue;
}
} else
{var node_27835 = cljs.core.first(seq__27815_27829__$1);goog.dom.setTextContent(node_27835,value);
{
var G__27836 = cljs.core.next(seq__27815_27829__$1);
var G__27837 = null;
var G__27838 = 0;
var G__27839 = 0;
seq__27815_27819 = G__27836;
chunk__27816_27820 = G__27837;
count__27817_27821 = G__27838;
i__27818_27822 = G__27839;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__27844_27848 = cljs.core.seq(domina.nodes(content));var chunk__27845_27849 = null;var count__27846_27850 = 0;var i__27847_27851 = 0;while(true){
if((i__27847_27851 < count__27846_27850))
{var node_27852 = chunk__27845_27849.cljs$core$IIndexed$_nth$arity$2(null,i__27847_27851);goog.dom.forms.setValue(node_27852,value);
{
var G__27853 = seq__27844_27848;
var G__27854 = chunk__27845_27849;
var G__27855 = count__27846_27850;
var G__27856 = (i__27847_27851 + 1);
seq__27844_27848 = G__27853;
chunk__27845_27849 = G__27854;
count__27846_27850 = G__27855;
i__27847_27851 = G__27856;
continue;
}
} else
{var temp__4092__auto___27857 = cljs.core.seq(seq__27844_27848);if(temp__4092__auto___27857)
{var seq__27844_27858__$1 = temp__4092__auto___27857;if(cljs.core.chunked_seq_QMARK_(seq__27844_27858__$1))
{var c__4148__auto___27859 = cljs.core.chunk_first(seq__27844_27858__$1);{
var G__27860 = cljs.core.chunk_rest(seq__27844_27858__$1);
var G__27861 = c__4148__auto___27859;
var G__27862 = cljs.core.count(c__4148__auto___27859);
var G__27863 = 0;
seq__27844_27848 = G__27860;
chunk__27845_27849 = G__27861;
count__27846_27850 = G__27862;
i__27847_27851 = G__27863;
continue;
}
} else
{var node_27864 = cljs.core.first(seq__27844_27858__$1);goog.dom.forms.setValue(node_27864,value);
{
var G__27865 = cljs.core.next(seq__27844_27858__$1);
var G__27866 = null;
var G__27867 = 0;
var G__27868 = 0;
seq__27844_27848 = G__27865;
chunk__27845_27849 = G__27866;
count__27846_27850 = G__27867;
i__27847_27851 = G__27868;
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
{var value_27879 = clojure.string.replace(html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__27875_27880 = cljs.core.seq(domina.nodes(content));var chunk__27876_27881 = null;var count__27877_27882 = 0;var i__27878_27883 = 0;while(true){
if((i__27878_27883 < count__27877_27882))
{var node_27884 = chunk__27876_27881.cljs$core$IIndexed$_nth$arity$2(null,i__27878_27883);node_27884.innerHTML = value_27879;
{
var G__27885 = seq__27875_27880;
var G__27886 = chunk__27876_27881;
var G__27887 = count__27877_27882;
var G__27888 = (i__27878_27883 + 1);
seq__27875_27880 = G__27885;
chunk__27876_27881 = G__27886;
count__27877_27882 = G__27887;
i__27878_27883 = G__27888;
continue;
}
} else
{var temp__4092__auto___27889 = cljs.core.seq(seq__27875_27880);if(temp__4092__auto___27889)
{var seq__27875_27890__$1 = temp__4092__auto___27889;if(cljs.core.chunked_seq_QMARK_(seq__27875_27890__$1))
{var c__4148__auto___27891 = cljs.core.chunk_first(seq__27875_27890__$1);{
var G__27892 = cljs.core.chunk_rest(seq__27875_27890__$1);
var G__27893 = c__4148__auto___27891;
var G__27894 = cljs.core.count(c__4148__auto___27891);
var G__27895 = 0;
seq__27875_27880 = G__27892;
chunk__27876_27881 = G__27893;
count__27877_27882 = G__27894;
i__27878_27883 = G__27895;
continue;
}
} else
{var node_27896 = cljs.core.first(seq__27875_27890__$1);node_27896.innerHTML = value_27879;
{
var G__27897 = cljs.core.next(seq__27875_27890__$1);
var G__27898 = null;
var G__27899 = 0;
var G__27900 = 0;
seq__27875_27880 = G__27897;
chunk__27876_27881 = G__27898;
count__27877_27882 = G__27899;
i__27878_27883 = G__27900;
continue;
}
}
} else
{}
}
break;
}
}catch (e27874){if((e27874 instanceof Error))
{var e_27901 = e27874;domina.replace_children_BANG_(content,value_27879);
} else
{if(cljs.core.constant$keyword$223)
{throw e27874;
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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes(parent_content);var children = domina.nodes(child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__27908_27912 = cljs.core.seq(children);var chunk__27909_27913 = null;var count__27910_27914 = 0;var i__27911_27915 = 0;while(true){
if((i__27911_27915 < count__27910_27914))
{var child_27916 = chunk__27909_27913.cljs$core$IIndexed$_nth$arity$2(null,i__27911_27915);frag.appendChild(child_27916);
{
var G__27917 = seq__27908_27912;
var G__27918 = chunk__27909_27913;
var G__27919 = count__27910_27914;
var G__27920 = (i__27911_27915 + 1);
seq__27908_27912 = G__27917;
chunk__27909_27913 = G__27918;
count__27910_27914 = G__27919;
i__27911_27915 = G__27920;
continue;
}
} else
{var temp__4092__auto___27921 = cljs.core.seq(seq__27908_27912);if(temp__4092__auto___27921)
{var seq__27908_27922__$1 = temp__4092__auto___27921;if(cljs.core.chunked_seq_QMARK_(seq__27908_27922__$1))
{var c__4148__auto___27923 = cljs.core.chunk_first(seq__27908_27922__$1);{
var G__27924 = cljs.core.chunk_rest(seq__27908_27922__$1);
var G__27925 = c__4148__auto___27923;
var G__27926 = cljs.core.count(c__4148__auto___27923);
var G__27927 = 0;
seq__27908_27912 = G__27924;
chunk__27909_27913 = G__27925;
count__27910_27914 = G__27926;
i__27911_27915 = G__27927;
continue;
}
} else
{var child_27928 = cljs.core.first(seq__27908_27922__$1);frag.appendChild(child_27928);
{
var G__27929 = cljs.core.next(seq__27908_27922__$1);
var G__27930 = null;
var G__27931 = 0;
var G__27932 = 0;
seq__27908_27912 = G__27929;
chunk__27909_27913 = G__27930;
count__27910_27914 = G__27931;
i__27911_27915 = G__27932;
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
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (p1__27902_SHARP_,p2__27903_SHARP_){return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(p1__27902_SHARP_,p2__27903_SHARP_) : f.call(null,p1__27902_SHARP_,p2__27903_SHARP_));
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
{if((function (){var G__27934 = list_thing;if(G__27934)
{var bit__4050__auto__ = (G__27934.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__27934.cljs$core$ISeqable$))
{return true;
} else
{if((!G__27934.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__27934);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__27934);
}
})())
{return cljs.core.seq(list_thing);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_(list_thing)))
{return domina.lazy_nodelist(list_thing);
} else
{if(cljs.core.constant$keyword$224)
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
{if((function (){var G__27935 = content;if(G__27935)
{var bit__4050__auto__ = (G__27935.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__27935.cljs$core$ISeqable$))
{return true;
} else
{if((!G__27935.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__27935);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__27935);
}
})())
{return cljs.core.seq(content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_(content)))
{return domina.lazy_nodelist(content);
} else
{if(cljs.core.constant$keyword$224)
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
{if((function (){var G__27936 = content;if(G__27936)
{var bit__4050__auto__ = (G__27936.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__27936.cljs$core$ISeqable$))
{return true;
} else
{if((!G__27936.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__27936);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__27936);
}
})())
{return cljs.core.first(content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_(content)))
{return content.item(0);
} else
{if(cljs.core.constant$keyword$224)
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
