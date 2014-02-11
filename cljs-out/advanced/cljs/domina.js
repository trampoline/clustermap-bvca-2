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
var opt_wrapper_26787 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_26788 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<table>","</table>"], null);var cell_wrapper_26789 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["col",cljs.core.constant$keyword$206,"tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,"",""], null),table_section_wrapper_26788,table_section_wrapper_26788,opt_wrapper_26787,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<fieldset>","</fieldset>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<map>","</map>"], null),cell_wrapper_26789,table_section_wrapper_26788,cell_wrapper_26789,opt_wrapper_26787,table_section_wrapper_26788,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody>","</tbody></table>"], null),table_section_wrapper_26788]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not(cljs.core.re_find(domina.re_tbody,html));var tbody = (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3394__auto__ = div.firstChild;if(cljs.core.truth_(and__3394__auto__))
{return div.firstChild.childNodes;
} else
{return and__3394__auto__;
}
})():(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__26794 = cljs.core.seq(tbody);var chunk__26795 = null;var count__26796 = 0;var i__26797 = 0;while(true){
if((i__26797 < count__26796))
{var child = chunk__26795.cljs$core$IIndexed$_nth$arity$2(null,i__26797);if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.nodeName,"tbody")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__26798 = seq__26794;
var G__26799 = chunk__26795;
var G__26800 = count__26796;
var G__26801 = (i__26797 + 1);
seq__26794 = G__26798;
chunk__26795 = G__26799;
count__26796 = G__26800;
i__26797 = G__26801;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__26794);if(temp__4092__auto__)
{var seq__26794__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__26794__$1))
{var c__4148__auto__ = cljs.core.chunk_first(seq__26794__$1);{
var G__26802 = cljs.core.chunk_rest(seq__26794__$1);
var G__26803 = c__4148__auto__;
var G__26804 = cljs.core.count(c__4148__auto__);
var G__26805 = 0;
seq__26794 = G__26802;
chunk__26795 = G__26803;
count__26796 = G__26804;
i__26797 = G__26805;
continue;
}
} else
{var child = cljs.core.first(seq__26794__$1);if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.nodeName,"tbody")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__26806 = cljs.core.next(seq__26794__$1);
var G__26807 = null;
var G__26808 = 0;
var G__26809 = 0;
seq__26794 = G__26806;
chunk__26795 = G__26807;
count__26796 = G__26808;
i__26797 = G__26809;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace(html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = [cljs.core.str(cljs.core.second(cljs.core.re_find(domina.re_tag_name,html__$1)))].join('').toLowerCase();var vec__26811 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(domina.wrap_map,tag_name,cljs.core.constant$keyword$206.cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26811,0,null);var start_wrap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26811,1,null);var end_wrap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26811,2,null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');
return div;
})();var level = depth;while(true){
if((level > 0))
{{
var G__26812 = wrapper.lastChild;
var G__26813 = (level - 1);
wrapper = G__26812;
level = G__26813;
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
domina.DomContent = (function (){var obj26815 = {};return obj26815;
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
log_debug.cljs$lang$applyTo = (function (arglist__26816){
var mesg = cljs.core.seq(arglist__26816);
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
log.cljs$lang$applyTo = (function (arglist__26817){
var mesg = cljs.core.seq(arglist__26817);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__26818){
var contents = cljs.core.seq(arglist__26818);
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
domina.clone = (function clone(content){return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__26819_SHARP_){return p1__26819_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__26820_SHARP_,p2__26821_SHARP_){return goog.dom.insertChildAt(p1__26820_SHARP_,p2__26821_SHARP_,idx);
}),parent_content,child_content) : domina.apply_with_cloning.call(null,(function (p1__26820_SHARP_,p2__26821_SHARP_){return goog.dom.insertChildAt(p1__26820_SHARP_,p2__26821_SHARP_,idx);
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__26823_SHARP_,p2__26822_SHARP_){return goog.dom.insertSiblingBefore(p2__26822_SHARP_,p1__26823_SHARP_);
}),content,new_content) : domina.apply_with_cloning.call(null,(function (p1__26823_SHARP_,p2__26822_SHARP_){return goog.dom.insertSiblingBefore(p2__26822_SHARP_,p1__26823_SHARP_);
}),content,new_content));
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__26825_SHARP_,p2__26824_SHARP_){return goog.dom.insertSiblingAfter(p2__26824_SHARP_,p1__26825_SHARP_);
}),content,new_content) : domina.apply_with_cloning.call(null,(function (p1__26825_SHARP_,p2__26824_SHARP_){return goog.dom.insertSiblingAfter(p2__26824_SHARP_,p1__26825_SHARP_);
}),content,new_content));
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__26827_SHARP_,p2__26826_SHARP_){return goog.dom.replaceNode(p2__26826_SHARP_,p1__26827_SHARP_);
}),old_content,new_content) : domina.apply_with_cloning.call(null,(function (p1__26827_SHARP_,p2__26826_SHARP_){return goog.dom.replaceNode(p2__26826_SHARP_,p1__26827_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__26832_26836 = cljs.core.seq(domina.nodes(content));var chunk__26833_26837 = null;var count__26834_26838 = 0;var i__26835_26839 = 0;while(true){
if((i__26835_26839 < count__26834_26838))
{var n_26840 = chunk__26833_26837.cljs$core$IIndexed$_nth$arity$2(null,i__26835_26839);goog.style.setStyle(n_26840,cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__26841 = seq__26832_26836;
var G__26842 = chunk__26833_26837;
var G__26843 = count__26834_26838;
var G__26844 = (i__26835_26839 + 1);
seq__26832_26836 = G__26841;
chunk__26833_26837 = G__26842;
count__26834_26838 = G__26843;
i__26835_26839 = G__26844;
continue;
}
} else
{var temp__4092__auto___26845 = cljs.core.seq(seq__26832_26836);if(temp__4092__auto___26845)
{var seq__26832_26846__$1 = temp__4092__auto___26845;if(cljs.core.chunked_seq_QMARK_(seq__26832_26846__$1))
{var c__4148__auto___26847 = cljs.core.chunk_first(seq__26832_26846__$1);{
var G__26848 = cljs.core.chunk_rest(seq__26832_26846__$1);
var G__26849 = c__4148__auto___26847;
var G__26850 = cljs.core.count(c__4148__auto___26847);
var G__26851 = 0;
seq__26832_26836 = G__26848;
chunk__26833_26837 = G__26849;
count__26834_26838 = G__26850;
i__26835_26839 = G__26851;
continue;
}
} else
{var n_26852 = cljs.core.first(seq__26832_26846__$1);goog.style.setStyle(n_26852,cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__26853 = cljs.core.next(seq__26832_26846__$1);
var G__26854 = null;
var G__26855 = 0;
var G__26856 = 0;
seq__26832_26836 = G__26853;
chunk__26833_26837 = G__26854;
count__26834_26838 = G__26855;
i__26835_26839 = G__26856;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__26857){
var content = cljs.core.first(arglist__26857);
arglist__26857 = cljs.core.next(arglist__26857);
var name = cljs.core.first(arglist__26857);
var value = cljs.core.rest(arglist__26857);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__26862_26866 = cljs.core.seq(domina.nodes(content));var chunk__26863_26867 = null;var count__26864_26868 = 0;var i__26865_26869 = 0;while(true){
if((i__26865_26869 < count__26864_26868))
{var n_26870 = chunk__26863_26867.cljs$core$IIndexed$_nth$arity$2(null,i__26865_26869);n_26870.setAttribute(cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__26871 = seq__26862_26866;
var G__26872 = chunk__26863_26867;
var G__26873 = count__26864_26868;
var G__26874 = (i__26865_26869 + 1);
seq__26862_26866 = G__26871;
chunk__26863_26867 = G__26872;
count__26864_26868 = G__26873;
i__26865_26869 = G__26874;
continue;
}
} else
{var temp__4092__auto___26875 = cljs.core.seq(seq__26862_26866);if(temp__4092__auto___26875)
{var seq__26862_26876__$1 = temp__4092__auto___26875;if(cljs.core.chunked_seq_QMARK_(seq__26862_26876__$1))
{var c__4148__auto___26877 = cljs.core.chunk_first(seq__26862_26876__$1);{
var G__26878 = cljs.core.chunk_rest(seq__26862_26876__$1);
var G__26879 = c__4148__auto___26877;
var G__26880 = cljs.core.count(c__4148__auto___26877);
var G__26881 = 0;
seq__26862_26866 = G__26878;
chunk__26863_26867 = G__26879;
count__26864_26868 = G__26880;
i__26865_26869 = G__26881;
continue;
}
} else
{var n_26882 = cljs.core.first(seq__26862_26876__$1);n_26882.setAttribute(cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__26883 = cljs.core.next(seq__26862_26876__$1);
var G__26884 = null;
var G__26885 = 0;
var G__26886 = 0;
seq__26862_26866 = G__26883;
chunk__26863_26867 = G__26884;
count__26864_26868 = G__26885;
i__26865_26869 = G__26886;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__26887){
var content = cljs.core.first(arglist__26887);
arglist__26887 = cljs.core.next(arglist__26887);
var name = cljs.core.first(arglist__26887);
var value = cljs.core.rest(arglist__26887);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__26892_26896 = cljs.core.seq(domina.nodes(content));var chunk__26893_26897 = null;var count__26894_26898 = 0;var i__26895_26899 = 0;while(true){
if((i__26895_26899 < count__26894_26898))
{var n_26900 = chunk__26893_26897.cljs$core$IIndexed$_nth$arity$2(null,i__26895_26899);n_26900.removeAttribute(cljs.core.name(name));
{
var G__26901 = seq__26892_26896;
var G__26902 = chunk__26893_26897;
var G__26903 = count__26894_26898;
var G__26904 = (i__26895_26899 + 1);
seq__26892_26896 = G__26901;
chunk__26893_26897 = G__26902;
count__26894_26898 = G__26903;
i__26895_26899 = G__26904;
continue;
}
} else
{var temp__4092__auto___26905 = cljs.core.seq(seq__26892_26896);if(temp__4092__auto___26905)
{var seq__26892_26906__$1 = temp__4092__auto___26905;if(cljs.core.chunked_seq_QMARK_(seq__26892_26906__$1))
{var c__4148__auto___26907 = cljs.core.chunk_first(seq__26892_26906__$1);{
var G__26908 = cljs.core.chunk_rest(seq__26892_26906__$1);
var G__26909 = c__4148__auto___26907;
var G__26910 = cljs.core.count(c__4148__auto___26907);
var G__26911 = 0;
seq__26892_26896 = G__26908;
chunk__26893_26897 = G__26909;
count__26894_26898 = G__26910;
i__26895_26899 = G__26911;
continue;
}
} else
{var n_26912 = cljs.core.first(seq__26892_26906__$1);n_26912.removeAttribute(cljs.core.name(name));
{
var G__26913 = cljs.core.next(seq__26892_26906__$1);
var G__26914 = null;
var G__26915 = 0;
var G__26916 = 0;
seq__26892_26896 = G__26913;
chunk__26893_26897 = G__26914;
count__26894_26898 = G__26915;
i__26895_26899 = G__26916;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,pair){var vec__26918 = pair.split(/\s*:\s*/);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26918,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26918,1,null);if(cljs.core.truth_((function (){var and__3394__auto__ = k;if(cljs.core.truth_(and__3394__auto__))
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
{if(cljs.core.constant$keyword$205)
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
domina.attrs = (function attrs(content){var node = domina.single_node(content);var attrs__$1 = node.attributes;return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.filter(cljs.core.complement(cljs.core.nil_QMARK_),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__26919_SHARP_){var attr = attrs__$1.item(p1__26919_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(null,value)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__26926_26932 = cljs.core.seq(styles);var chunk__26927_26933 = null;var count__26928_26934 = 0;var i__26929_26935 = 0;while(true){
if((i__26929_26935 < count__26928_26934))
{var vec__26930_26936 = chunk__26927_26933.cljs$core$IIndexed$_nth$arity$2(null,i__26929_26935);var name_26937 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26930_26936,0,null);var value_26938 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26930_26936,1,null);domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_26937,cljs.core.array_seq([value_26938], 0));
{
var G__26939 = seq__26926_26932;
var G__26940 = chunk__26927_26933;
var G__26941 = count__26928_26934;
var G__26942 = (i__26929_26935 + 1);
seq__26926_26932 = G__26939;
chunk__26927_26933 = G__26940;
count__26928_26934 = G__26941;
i__26929_26935 = G__26942;
continue;
}
} else
{var temp__4092__auto___26943 = cljs.core.seq(seq__26926_26932);if(temp__4092__auto___26943)
{var seq__26926_26944__$1 = temp__4092__auto___26943;if(cljs.core.chunked_seq_QMARK_(seq__26926_26944__$1))
{var c__4148__auto___26945 = cljs.core.chunk_first(seq__26926_26944__$1);{
var G__26946 = cljs.core.chunk_rest(seq__26926_26944__$1);
var G__26947 = c__4148__auto___26945;
var G__26948 = cljs.core.count(c__4148__auto___26945);
var G__26949 = 0;
seq__26926_26932 = G__26946;
chunk__26927_26933 = G__26947;
count__26928_26934 = G__26948;
i__26929_26935 = G__26949;
continue;
}
} else
{var vec__26931_26950 = cljs.core.first(seq__26926_26944__$1);var name_26951 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26931_26950,0,null);var value_26952 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26931_26950,1,null);domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_26951,cljs.core.array_seq([value_26952], 0));
{
var G__26953 = cljs.core.next(seq__26926_26944__$1);
var G__26954 = null;
var G__26955 = 0;
var G__26956 = 0;
seq__26926_26932 = G__26953;
chunk__26927_26933 = G__26954;
count__26928_26934 = G__26955;
i__26929_26935 = G__26956;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__26963_26969 = cljs.core.seq(attrs);var chunk__26964_26970 = null;var count__26965_26971 = 0;var i__26966_26972 = 0;while(true){
if((i__26966_26972 < count__26965_26971))
{var vec__26967_26973 = chunk__26964_26970.cljs$core$IIndexed$_nth$arity$2(null,i__26966_26972);var name_26974 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26967_26973,0,null);var value_26975 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26967_26973,1,null);domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_26974,cljs.core.array_seq([value_26975], 0));
{
var G__26976 = seq__26963_26969;
var G__26977 = chunk__26964_26970;
var G__26978 = count__26965_26971;
var G__26979 = (i__26966_26972 + 1);
seq__26963_26969 = G__26976;
chunk__26964_26970 = G__26977;
count__26965_26971 = G__26978;
i__26966_26972 = G__26979;
continue;
}
} else
{var temp__4092__auto___26980 = cljs.core.seq(seq__26963_26969);if(temp__4092__auto___26980)
{var seq__26963_26981__$1 = temp__4092__auto___26980;if(cljs.core.chunked_seq_QMARK_(seq__26963_26981__$1))
{var c__4148__auto___26982 = cljs.core.chunk_first(seq__26963_26981__$1);{
var G__26983 = cljs.core.chunk_rest(seq__26963_26981__$1);
var G__26984 = c__4148__auto___26982;
var G__26985 = cljs.core.count(c__4148__auto___26982);
var G__26986 = 0;
seq__26963_26969 = G__26983;
chunk__26964_26970 = G__26984;
count__26965_26971 = G__26985;
i__26966_26972 = G__26986;
continue;
}
} else
{var vec__26968_26987 = cljs.core.first(seq__26963_26981__$1);var name_26988 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26968_26987,0,null);var value_26989 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26968_26987,1,null);domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_26988,cljs.core.array_seq([value_26989], 0));
{
var G__26990 = cljs.core.next(seq__26963_26981__$1);
var G__26991 = null;
var G__26992 = 0;
var G__26993 = 0;
seq__26963_26969 = G__26990;
chunk__26964_26970 = G__26991;
count__26965_26971 = G__26992;
i__26966_26972 = G__26993;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__26998_27002 = cljs.core.seq(domina.nodes(content));var chunk__26999_27003 = null;var count__27000_27004 = 0;var i__27001_27005 = 0;while(true){
if((i__27001_27005 < count__27000_27004))
{var node_27006 = chunk__26999_27003.cljs$core$IIndexed$_nth$arity$2(null,i__27001_27005);goog.dom.classes.add(node_27006,class$);
{
var G__27007 = seq__26998_27002;
var G__27008 = chunk__26999_27003;
var G__27009 = count__27000_27004;
var G__27010 = (i__27001_27005 + 1);
seq__26998_27002 = G__27007;
chunk__26999_27003 = G__27008;
count__27000_27004 = G__27009;
i__27001_27005 = G__27010;
continue;
}
} else
{var temp__4092__auto___27011 = cljs.core.seq(seq__26998_27002);if(temp__4092__auto___27011)
{var seq__26998_27012__$1 = temp__4092__auto___27011;if(cljs.core.chunked_seq_QMARK_(seq__26998_27012__$1))
{var c__4148__auto___27013 = cljs.core.chunk_first(seq__26998_27012__$1);{
var G__27014 = cljs.core.chunk_rest(seq__26998_27012__$1);
var G__27015 = c__4148__auto___27013;
var G__27016 = cljs.core.count(c__4148__auto___27013);
var G__27017 = 0;
seq__26998_27002 = G__27014;
chunk__26999_27003 = G__27015;
count__27000_27004 = G__27016;
i__27001_27005 = G__27017;
continue;
}
} else
{var node_27018 = cljs.core.first(seq__26998_27012__$1);goog.dom.classes.add(node_27018,class$);
{
var G__27019 = cljs.core.next(seq__26998_27012__$1);
var G__27020 = null;
var G__27021 = 0;
var G__27022 = 0;
seq__26998_27002 = G__27019;
chunk__26999_27003 = G__27020;
count__27000_27004 = G__27021;
i__27001_27005 = G__27022;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__27027_27031 = cljs.core.seq(domina.nodes(content));var chunk__27028_27032 = null;var count__27029_27033 = 0;var i__27030_27034 = 0;while(true){
if((i__27030_27034 < count__27029_27033))
{var node_27035 = chunk__27028_27032.cljs$core$IIndexed$_nth$arity$2(null,i__27030_27034);goog.dom.classes.remove(node_27035,class$);
{
var G__27036 = seq__27027_27031;
var G__27037 = chunk__27028_27032;
var G__27038 = count__27029_27033;
var G__27039 = (i__27030_27034 + 1);
seq__27027_27031 = G__27036;
chunk__27028_27032 = G__27037;
count__27029_27033 = G__27038;
i__27030_27034 = G__27039;
continue;
}
} else
{var temp__4092__auto___27040 = cljs.core.seq(seq__27027_27031);if(temp__4092__auto___27040)
{var seq__27027_27041__$1 = temp__4092__auto___27040;if(cljs.core.chunked_seq_QMARK_(seq__27027_27041__$1))
{var c__4148__auto___27042 = cljs.core.chunk_first(seq__27027_27041__$1);{
var G__27043 = cljs.core.chunk_rest(seq__27027_27041__$1);
var G__27044 = c__4148__auto___27042;
var G__27045 = cljs.core.count(c__4148__auto___27042);
var G__27046 = 0;
seq__27027_27031 = G__27043;
chunk__27028_27032 = G__27044;
count__27029_27033 = G__27045;
i__27030_27034 = G__27046;
continue;
}
} else
{var node_27047 = cljs.core.first(seq__27027_27041__$1);goog.dom.classes.remove(node_27047,class$);
{
var G__27048 = cljs.core.next(seq__27027_27041__$1);
var G__27049 = null;
var G__27050 = 0;
var G__27051 = 0;
seq__27027_27031 = G__27048;
chunk__27028_27032 = G__27049;
count__27029_27033 = G__27050;
i__27030_27034 = G__27051;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__27056_27060 = cljs.core.seq(domina.nodes(content));var chunk__27057_27061 = null;var count__27058_27062 = 0;var i__27059_27063 = 0;while(true){
if((i__27059_27063 < count__27058_27062))
{var node_27064 = chunk__27057_27061.cljs$core$IIndexed$_nth$arity$2(null,i__27059_27063);goog.dom.classes.toggle(node_27064,class$);
{
var G__27065 = seq__27056_27060;
var G__27066 = chunk__27057_27061;
var G__27067 = count__27058_27062;
var G__27068 = (i__27059_27063 + 1);
seq__27056_27060 = G__27065;
chunk__27057_27061 = G__27066;
count__27058_27062 = G__27067;
i__27059_27063 = G__27068;
continue;
}
} else
{var temp__4092__auto___27069 = cljs.core.seq(seq__27056_27060);if(temp__4092__auto___27069)
{var seq__27056_27070__$1 = temp__4092__auto___27069;if(cljs.core.chunked_seq_QMARK_(seq__27056_27070__$1))
{var c__4148__auto___27071 = cljs.core.chunk_first(seq__27056_27070__$1);{
var G__27072 = cljs.core.chunk_rest(seq__27056_27070__$1);
var G__27073 = c__4148__auto___27071;
var G__27074 = cljs.core.count(c__4148__auto___27071);
var G__27075 = 0;
seq__27056_27060 = G__27072;
chunk__27057_27061 = G__27073;
count__27058_27062 = G__27074;
i__27059_27063 = G__27075;
continue;
}
} else
{var node_27076 = cljs.core.first(seq__27056_27070__$1);goog.dom.classes.toggle(node_27076,class$);
{
var G__27077 = cljs.core.next(seq__27056_27070__$1);
var G__27078 = null;
var G__27079 = 0;
var G__27080 = 0;
seq__27056_27060 = G__27077;
chunk__27057_27061 = G__27078;
count__27058_27062 = G__27079;
i__27059_27063 = G__27080;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_27089__$1 = ((cljs.core.coll_QMARK_(classes))?clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",classes):classes);var seq__27085_27090 = cljs.core.seq(domina.nodes(content));var chunk__27086_27091 = null;var count__27087_27092 = 0;var i__27088_27093 = 0;while(true){
if((i__27088_27093 < count__27087_27092))
{var node_27094 = chunk__27086_27091.cljs$core$IIndexed$_nth$arity$2(null,i__27088_27093);goog.dom.classes.set(node_27094,classes_27089__$1);
{
var G__27095 = seq__27085_27090;
var G__27096 = chunk__27086_27091;
var G__27097 = count__27087_27092;
var G__27098 = (i__27088_27093 + 1);
seq__27085_27090 = G__27095;
chunk__27086_27091 = G__27096;
count__27087_27092 = G__27097;
i__27088_27093 = G__27098;
continue;
}
} else
{var temp__4092__auto___27099 = cljs.core.seq(seq__27085_27090);if(temp__4092__auto___27099)
{var seq__27085_27100__$1 = temp__4092__auto___27099;if(cljs.core.chunked_seq_QMARK_(seq__27085_27100__$1))
{var c__4148__auto___27101 = cljs.core.chunk_first(seq__27085_27100__$1);{
var G__27102 = cljs.core.chunk_rest(seq__27085_27100__$1);
var G__27103 = c__4148__auto___27101;
var G__27104 = cljs.core.count(c__4148__auto___27101);
var G__27105 = 0;
seq__27085_27090 = G__27102;
chunk__27086_27091 = G__27103;
count__27087_27092 = G__27104;
i__27088_27093 = G__27105;
continue;
}
} else
{var node_27106 = cljs.core.first(seq__27085_27100__$1);goog.dom.classes.set(node_27106,classes_27089__$1);
{
var G__27107 = cljs.core.next(seq__27085_27100__$1);
var G__27108 = null;
var G__27109 = 0;
var G__27110 = 0;
seq__27085_27090 = G__27107;
chunk__27086_27091 = G__27108;
count__27087_27092 = G__27109;
i__27088_27093 = G__27110;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__27115_27119 = cljs.core.seq(domina.nodes(content));var chunk__27116_27120 = null;var count__27117_27121 = 0;var i__27118_27122 = 0;while(true){
if((i__27118_27122 < count__27117_27121))
{var node_27123 = chunk__27116_27120.cljs$core$IIndexed$_nth$arity$2(null,i__27118_27122);goog.dom.setTextContent(node_27123,value);
{
var G__27124 = seq__27115_27119;
var G__27125 = chunk__27116_27120;
var G__27126 = count__27117_27121;
var G__27127 = (i__27118_27122 + 1);
seq__27115_27119 = G__27124;
chunk__27116_27120 = G__27125;
count__27117_27121 = G__27126;
i__27118_27122 = G__27127;
continue;
}
} else
{var temp__4092__auto___27128 = cljs.core.seq(seq__27115_27119);if(temp__4092__auto___27128)
{var seq__27115_27129__$1 = temp__4092__auto___27128;if(cljs.core.chunked_seq_QMARK_(seq__27115_27129__$1))
{var c__4148__auto___27130 = cljs.core.chunk_first(seq__27115_27129__$1);{
var G__27131 = cljs.core.chunk_rest(seq__27115_27129__$1);
var G__27132 = c__4148__auto___27130;
var G__27133 = cljs.core.count(c__4148__auto___27130);
var G__27134 = 0;
seq__27115_27119 = G__27131;
chunk__27116_27120 = G__27132;
count__27117_27121 = G__27133;
i__27118_27122 = G__27134;
continue;
}
} else
{var node_27135 = cljs.core.first(seq__27115_27129__$1);goog.dom.setTextContent(node_27135,value);
{
var G__27136 = cljs.core.next(seq__27115_27129__$1);
var G__27137 = null;
var G__27138 = 0;
var G__27139 = 0;
seq__27115_27119 = G__27136;
chunk__27116_27120 = G__27137;
count__27117_27121 = G__27138;
i__27118_27122 = G__27139;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__27144_27148 = cljs.core.seq(domina.nodes(content));var chunk__27145_27149 = null;var count__27146_27150 = 0;var i__27147_27151 = 0;while(true){
if((i__27147_27151 < count__27146_27150))
{var node_27152 = chunk__27145_27149.cljs$core$IIndexed$_nth$arity$2(null,i__27147_27151);goog.dom.forms.setValue(node_27152,value);
{
var G__27153 = seq__27144_27148;
var G__27154 = chunk__27145_27149;
var G__27155 = count__27146_27150;
var G__27156 = (i__27147_27151 + 1);
seq__27144_27148 = G__27153;
chunk__27145_27149 = G__27154;
count__27146_27150 = G__27155;
i__27147_27151 = G__27156;
continue;
}
} else
{var temp__4092__auto___27157 = cljs.core.seq(seq__27144_27148);if(temp__4092__auto___27157)
{var seq__27144_27158__$1 = temp__4092__auto___27157;if(cljs.core.chunked_seq_QMARK_(seq__27144_27158__$1))
{var c__4148__auto___27159 = cljs.core.chunk_first(seq__27144_27158__$1);{
var G__27160 = cljs.core.chunk_rest(seq__27144_27158__$1);
var G__27161 = c__4148__auto___27159;
var G__27162 = cljs.core.count(c__4148__auto___27159);
var G__27163 = 0;
seq__27144_27148 = G__27160;
chunk__27145_27149 = G__27161;
count__27146_27150 = G__27162;
i__27147_27151 = G__27163;
continue;
}
} else
{var node_27164 = cljs.core.first(seq__27144_27158__$1);goog.dom.forms.setValue(node_27164,value);
{
var G__27165 = cljs.core.next(seq__27144_27158__$1);
var G__27166 = null;
var G__27167 = 0;
var G__27168 = 0;
seq__27144_27148 = G__27165;
chunk__27145_27149 = G__27166;
count__27146_27150 = G__27167;
i__27147_27151 = G__27168;
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
{var value_27179 = clojure.string.replace(html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__27175_27180 = cljs.core.seq(domina.nodes(content));var chunk__27176_27181 = null;var count__27177_27182 = 0;var i__27178_27183 = 0;while(true){
if((i__27178_27183 < count__27177_27182))
{var node_27184 = chunk__27176_27181.cljs$core$IIndexed$_nth$arity$2(null,i__27178_27183);node_27184.innerHTML = value_27179;
{
var G__27185 = seq__27175_27180;
var G__27186 = chunk__27176_27181;
var G__27187 = count__27177_27182;
var G__27188 = (i__27178_27183 + 1);
seq__27175_27180 = G__27185;
chunk__27176_27181 = G__27186;
count__27177_27182 = G__27187;
i__27178_27183 = G__27188;
continue;
}
} else
{var temp__4092__auto___27189 = cljs.core.seq(seq__27175_27180);if(temp__4092__auto___27189)
{var seq__27175_27190__$1 = temp__4092__auto___27189;if(cljs.core.chunked_seq_QMARK_(seq__27175_27190__$1))
{var c__4148__auto___27191 = cljs.core.chunk_first(seq__27175_27190__$1);{
var G__27192 = cljs.core.chunk_rest(seq__27175_27190__$1);
var G__27193 = c__4148__auto___27191;
var G__27194 = cljs.core.count(c__4148__auto___27191);
var G__27195 = 0;
seq__27175_27180 = G__27192;
chunk__27176_27181 = G__27193;
count__27177_27182 = G__27194;
i__27178_27183 = G__27195;
continue;
}
} else
{var node_27196 = cljs.core.first(seq__27175_27190__$1);node_27196.innerHTML = value_27179;
{
var G__27197 = cljs.core.next(seq__27175_27190__$1);
var G__27198 = null;
var G__27199 = 0;
var G__27200 = 0;
seq__27175_27180 = G__27197;
chunk__27176_27181 = G__27198;
count__27177_27182 = G__27199;
i__27178_27183 = G__27200;
continue;
}
}
} else
{}
}
break;
}
}catch (e27174){if((e27174 instanceof Error))
{var e_27201 = e27174;domina.replace_children_BANG_(content,value_27179);
} else
{if(cljs.core.constant$keyword$205)
{throw e27174;
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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes(parent_content);var children = domina.nodes(child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__27208_27212 = cljs.core.seq(children);var chunk__27209_27213 = null;var count__27210_27214 = 0;var i__27211_27215 = 0;while(true){
if((i__27211_27215 < count__27210_27214))
{var child_27216 = chunk__27209_27213.cljs$core$IIndexed$_nth$arity$2(null,i__27211_27215);frag.appendChild(child_27216);
{
var G__27217 = seq__27208_27212;
var G__27218 = chunk__27209_27213;
var G__27219 = count__27210_27214;
var G__27220 = (i__27211_27215 + 1);
seq__27208_27212 = G__27217;
chunk__27209_27213 = G__27218;
count__27210_27214 = G__27219;
i__27211_27215 = G__27220;
continue;
}
} else
{var temp__4092__auto___27221 = cljs.core.seq(seq__27208_27212);if(temp__4092__auto___27221)
{var seq__27208_27222__$1 = temp__4092__auto___27221;if(cljs.core.chunked_seq_QMARK_(seq__27208_27222__$1))
{var c__4148__auto___27223 = cljs.core.chunk_first(seq__27208_27222__$1);{
var G__27224 = cljs.core.chunk_rest(seq__27208_27222__$1);
var G__27225 = c__4148__auto___27223;
var G__27226 = cljs.core.count(c__4148__auto___27223);
var G__27227 = 0;
seq__27208_27212 = G__27224;
chunk__27209_27213 = G__27225;
count__27210_27214 = G__27226;
i__27211_27215 = G__27227;
continue;
}
} else
{var child_27228 = cljs.core.first(seq__27208_27222__$1);frag.appendChild(child_27228);
{
var G__27229 = cljs.core.next(seq__27208_27222__$1);
var G__27230 = null;
var G__27231 = 0;
var G__27232 = 0;
seq__27208_27212 = G__27229;
chunk__27209_27213 = G__27230;
count__27210_27214 = G__27231;
i__27211_27215 = G__27232;
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
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (p1__27202_SHARP_,p2__27203_SHARP_){return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(p1__27202_SHARP_,p2__27203_SHARP_) : f.call(null,p1__27202_SHARP_,p2__27203_SHARP_));
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
{if((function (){var G__27234 = list_thing;if(G__27234)
{var bit__4050__auto__ = (G__27234.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__27234.cljs$core$ISeqable$))
{return true;
} else
{if((!G__27234.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__27234);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__27234);
}
})())
{return cljs.core.seq(list_thing);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_(list_thing)))
{return domina.lazy_nodelist(list_thing);
} else
{if(cljs.core.constant$keyword$206)
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
{if((function (){var G__27235 = content;if(G__27235)
{var bit__4050__auto__ = (G__27235.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__27235.cljs$core$ISeqable$))
{return true;
} else
{if((!G__27235.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__27235);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__27235);
}
})())
{return cljs.core.seq(content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_(content)))
{return domina.lazy_nodelist(content);
} else
{if(cljs.core.constant$keyword$206)
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
{if((function (){var G__27236 = content;if(G__27236)
{var bit__4050__auto__ = (G__27236.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__27236.cljs$core$ISeqable$))
{return true;
} else
{if((!G__27236.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__27236);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__27236);
}
})())
{return cljs.core.first(content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_(content)))
{return content.item(0);
} else
{if(cljs.core.constant$keyword$206)
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
