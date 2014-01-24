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
var opt_wrapper_25858 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_25859 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<table>","</table>"], null);var cell_wrapper_25860 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["col",cljs.core.constant$keyword$157,"tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,"",""], null),table_section_wrapper_25859,table_section_wrapper_25859,opt_wrapper_25858,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<fieldset>","</fieldset>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<map>","</map>"], null),cell_wrapper_25860,table_section_wrapper_25859,cell_wrapper_25860,opt_wrapper_25858,table_section_wrapper_25859,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody>","</tbody></table>"], null),table_section_wrapper_25859]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not(cljs.core.re_find(domina.re_tbody,html));var tbody = (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3394__auto__ = div.firstChild;if(cljs.core.truth_(and__3394__auto__))
{return div.firstChild.childNodes;
} else
{return and__3394__auto__;
}
})():(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__25865 = cljs.core.seq(tbody);var chunk__25866 = null;var count__25867 = 0;var i__25868 = 0;while(true){
if((i__25868 < count__25867))
{var child = chunk__25866.cljs$core$IIndexed$_nth$arity$2(null,i__25868);if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.nodeName,"tbody")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__25869 = seq__25865;
var G__25870 = chunk__25866;
var G__25871 = count__25867;
var G__25872 = (i__25868 + 1);
seq__25865 = G__25869;
chunk__25866 = G__25870;
count__25867 = G__25871;
i__25868 = G__25872;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__25865);if(temp__4092__auto__)
{var seq__25865__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__25865__$1))
{var c__4148__auto__ = cljs.core.chunk_first(seq__25865__$1);{
var G__25873 = cljs.core.chunk_rest(seq__25865__$1);
var G__25874 = c__4148__auto__;
var G__25875 = cljs.core.count(c__4148__auto__);
var G__25876 = 0;
seq__25865 = G__25873;
chunk__25866 = G__25874;
count__25867 = G__25875;
i__25868 = G__25876;
continue;
}
} else
{var child = cljs.core.first(seq__25865__$1);if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.nodeName,"tbody")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__25877 = cljs.core.next(seq__25865__$1);
var G__25878 = null;
var G__25879 = 0;
var G__25880 = 0;
seq__25865 = G__25877;
chunk__25866 = G__25878;
count__25867 = G__25879;
i__25868 = G__25880;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace(html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = [cljs.core.str(cljs.core.second(cljs.core.re_find(domina.re_tag_name,html__$1)))].join('').toLowerCase();var vec__25882 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(domina.wrap_map,tag_name,cljs.core.constant$keyword$157.cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25882,0,null);var start_wrap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25882,1,null);var end_wrap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25882,2,null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');
return div;
})();var level = depth;while(true){
if((level > 0))
{{
var G__25883 = wrapper.lastChild;
var G__25884 = (level - 1);
wrapper = G__25883;
level = G__25884;
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
domina.DomContent = (function (){var obj25886 = {};return obj25886;
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
log_debug.cljs$lang$applyTo = (function (arglist__25887){
var mesg = cljs.core.seq(arglist__25887);
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
log.cljs$lang$applyTo = (function (arglist__25888){
var mesg = cljs.core.seq(arglist__25888);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__25889){
var contents = cljs.core.seq(arglist__25889);
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
domina.clone = (function clone(content){return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__25890_SHARP_){return p1__25890_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__25891_SHARP_,p2__25892_SHARP_){return goog.dom.insertChildAt(p1__25891_SHARP_,p2__25892_SHARP_,idx);
}),parent_content,child_content) : domina.apply_with_cloning.call(null,(function (p1__25891_SHARP_,p2__25892_SHARP_){return goog.dom.insertChildAt(p1__25891_SHARP_,p2__25892_SHARP_,idx);
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__25894_SHARP_,p2__25893_SHARP_){return goog.dom.insertSiblingBefore(p2__25893_SHARP_,p1__25894_SHARP_);
}),content,new_content) : domina.apply_with_cloning.call(null,(function (p1__25894_SHARP_,p2__25893_SHARP_){return goog.dom.insertSiblingBefore(p2__25893_SHARP_,p1__25894_SHARP_);
}),content,new_content));
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__25896_SHARP_,p2__25895_SHARP_){return goog.dom.insertSiblingAfter(p2__25895_SHARP_,p1__25896_SHARP_);
}),content,new_content) : domina.apply_with_cloning.call(null,(function (p1__25896_SHARP_,p2__25895_SHARP_){return goog.dom.insertSiblingAfter(p2__25895_SHARP_,p1__25896_SHARP_);
}),content,new_content));
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__25898_SHARP_,p2__25897_SHARP_){return goog.dom.replaceNode(p2__25897_SHARP_,p1__25898_SHARP_);
}),old_content,new_content) : domina.apply_with_cloning.call(null,(function (p1__25898_SHARP_,p2__25897_SHARP_){return goog.dom.replaceNode(p2__25897_SHARP_,p1__25898_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__25903_25907 = cljs.core.seq(domina.nodes(content));var chunk__25904_25908 = null;var count__25905_25909 = 0;var i__25906_25910 = 0;while(true){
if((i__25906_25910 < count__25905_25909))
{var n_25911 = chunk__25904_25908.cljs$core$IIndexed$_nth$arity$2(null,i__25906_25910);goog.style.setStyle(n_25911,cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__25912 = seq__25903_25907;
var G__25913 = chunk__25904_25908;
var G__25914 = count__25905_25909;
var G__25915 = (i__25906_25910 + 1);
seq__25903_25907 = G__25912;
chunk__25904_25908 = G__25913;
count__25905_25909 = G__25914;
i__25906_25910 = G__25915;
continue;
}
} else
{var temp__4092__auto___25916 = cljs.core.seq(seq__25903_25907);if(temp__4092__auto___25916)
{var seq__25903_25917__$1 = temp__4092__auto___25916;if(cljs.core.chunked_seq_QMARK_(seq__25903_25917__$1))
{var c__4148__auto___25918 = cljs.core.chunk_first(seq__25903_25917__$1);{
var G__25919 = cljs.core.chunk_rest(seq__25903_25917__$1);
var G__25920 = c__4148__auto___25918;
var G__25921 = cljs.core.count(c__4148__auto___25918);
var G__25922 = 0;
seq__25903_25907 = G__25919;
chunk__25904_25908 = G__25920;
count__25905_25909 = G__25921;
i__25906_25910 = G__25922;
continue;
}
} else
{var n_25923 = cljs.core.first(seq__25903_25917__$1);goog.style.setStyle(n_25923,cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__25924 = cljs.core.next(seq__25903_25917__$1);
var G__25925 = null;
var G__25926 = 0;
var G__25927 = 0;
seq__25903_25907 = G__25924;
chunk__25904_25908 = G__25925;
count__25905_25909 = G__25926;
i__25906_25910 = G__25927;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__25928){
var content = cljs.core.first(arglist__25928);
arglist__25928 = cljs.core.next(arglist__25928);
var name = cljs.core.first(arglist__25928);
var value = cljs.core.rest(arglist__25928);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__25933_25937 = cljs.core.seq(domina.nodes(content));var chunk__25934_25938 = null;var count__25935_25939 = 0;var i__25936_25940 = 0;while(true){
if((i__25936_25940 < count__25935_25939))
{var n_25941 = chunk__25934_25938.cljs$core$IIndexed$_nth$arity$2(null,i__25936_25940);n_25941.setAttribute(cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__25942 = seq__25933_25937;
var G__25943 = chunk__25934_25938;
var G__25944 = count__25935_25939;
var G__25945 = (i__25936_25940 + 1);
seq__25933_25937 = G__25942;
chunk__25934_25938 = G__25943;
count__25935_25939 = G__25944;
i__25936_25940 = G__25945;
continue;
}
} else
{var temp__4092__auto___25946 = cljs.core.seq(seq__25933_25937);if(temp__4092__auto___25946)
{var seq__25933_25947__$1 = temp__4092__auto___25946;if(cljs.core.chunked_seq_QMARK_(seq__25933_25947__$1))
{var c__4148__auto___25948 = cljs.core.chunk_first(seq__25933_25947__$1);{
var G__25949 = cljs.core.chunk_rest(seq__25933_25947__$1);
var G__25950 = c__4148__auto___25948;
var G__25951 = cljs.core.count(c__4148__auto___25948);
var G__25952 = 0;
seq__25933_25937 = G__25949;
chunk__25934_25938 = G__25950;
count__25935_25939 = G__25951;
i__25936_25940 = G__25952;
continue;
}
} else
{var n_25953 = cljs.core.first(seq__25933_25947__$1);n_25953.setAttribute(cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__25954 = cljs.core.next(seq__25933_25947__$1);
var G__25955 = null;
var G__25956 = 0;
var G__25957 = 0;
seq__25933_25937 = G__25954;
chunk__25934_25938 = G__25955;
count__25935_25939 = G__25956;
i__25936_25940 = G__25957;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__25958){
var content = cljs.core.first(arglist__25958);
arglist__25958 = cljs.core.next(arglist__25958);
var name = cljs.core.first(arglist__25958);
var value = cljs.core.rest(arglist__25958);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__25963_25967 = cljs.core.seq(domina.nodes(content));var chunk__25964_25968 = null;var count__25965_25969 = 0;var i__25966_25970 = 0;while(true){
if((i__25966_25970 < count__25965_25969))
{var n_25971 = chunk__25964_25968.cljs$core$IIndexed$_nth$arity$2(null,i__25966_25970);n_25971.removeAttribute(cljs.core.name(name));
{
var G__25972 = seq__25963_25967;
var G__25973 = chunk__25964_25968;
var G__25974 = count__25965_25969;
var G__25975 = (i__25966_25970 + 1);
seq__25963_25967 = G__25972;
chunk__25964_25968 = G__25973;
count__25965_25969 = G__25974;
i__25966_25970 = G__25975;
continue;
}
} else
{var temp__4092__auto___25976 = cljs.core.seq(seq__25963_25967);if(temp__4092__auto___25976)
{var seq__25963_25977__$1 = temp__4092__auto___25976;if(cljs.core.chunked_seq_QMARK_(seq__25963_25977__$1))
{var c__4148__auto___25978 = cljs.core.chunk_first(seq__25963_25977__$1);{
var G__25979 = cljs.core.chunk_rest(seq__25963_25977__$1);
var G__25980 = c__4148__auto___25978;
var G__25981 = cljs.core.count(c__4148__auto___25978);
var G__25982 = 0;
seq__25963_25967 = G__25979;
chunk__25964_25968 = G__25980;
count__25965_25969 = G__25981;
i__25966_25970 = G__25982;
continue;
}
} else
{var n_25983 = cljs.core.first(seq__25963_25977__$1);n_25983.removeAttribute(cljs.core.name(name));
{
var G__25984 = cljs.core.next(seq__25963_25977__$1);
var G__25985 = null;
var G__25986 = 0;
var G__25987 = 0;
seq__25963_25967 = G__25984;
chunk__25964_25968 = G__25985;
count__25965_25969 = G__25986;
i__25966_25970 = G__25987;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,pair){var vec__25989 = pair.split(/\s*:\s*/);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25989,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25989,1,null);if(cljs.core.truth_((function (){var and__3394__auto__ = k;if(cljs.core.truth_(and__3394__auto__))
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
{if(cljs.core.constant$keyword$156)
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
domina.attrs = (function attrs(content){var node = domina.single_node(content);var attrs__$1 = node.attributes;return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.filter(cljs.core.complement(cljs.core.nil_QMARK_),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__25990_SHARP_){var attr = attrs__$1.item(p1__25990_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(null,value)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__25997_26003 = cljs.core.seq(styles);var chunk__25998_26004 = null;var count__25999_26005 = 0;var i__26000_26006 = 0;while(true){
if((i__26000_26006 < count__25999_26005))
{var vec__26001_26007 = chunk__25998_26004.cljs$core$IIndexed$_nth$arity$2(null,i__26000_26006);var name_26008 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26001_26007,0,null);var value_26009 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26001_26007,1,null);domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_26008,cljs.core.array_seq([value_26009], 0));
{
var G__26010 = seq__25997_26003;
var G__26011 = chunk__25998_26004;
var G__26012 = count__25999_26005;
var G__26013 = (i__26000_26006 + 1);
seq__25997_26003 = G__26010;
chunk__25998_26004 = G__26011;
count__25999_26005 = G__26012;
i__26000_26006 = G__26013;
continue;
}
} else
{var temp__4092__auto___26014 = cljs.core.seq(seq__25997_26003);if(temp__4092__auto___26014)
{var seq__25997_26015__$1 = temp__4092__auto___26014;if(cljs.core.chunked_seq_QMARK_(seq__25997_26015__$1))
{var c__4148__auto___26016 = cljs.core.chunk_first(seq__25997_26015__$1);{
var G__26017 = cljs.core.chunk_rest(seq__25997_26015__$1);
var G__26018 = c__4148__auto___26016;
var G__26019 = cljs.core.count(c__4148__auto___26016);
var G__26020 = 0;
seq__25997_26003 = G__26017;
chunk__25998_26004 = G__26018;
count__25999_26005 = G__26019;
i__26000_26006 = G__26020;
continue;
}
} else
{var vec__26002_26021 = cljs.core.first(seq__25997_26015__$1);var name_26022 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26002_26021,0,null);var value_26023 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26002_26021,1,null);domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_26022,cljs.core.array_seq([value_26023], 0));
{
var G__26024 = cljs.core.next(seq__25997_26015__$1);
var G__26025 = null;
var G__26026 = 0;
var G__26027 = 0;
seq__25997_26003 = G__26024;
chunk__25998_26004 = G__26025;
count__25999_26005 = G__26026;
i__26000_26006 = G__26027;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__26034_26040 = cljs.core.seq(attrs);var chunk__26035_26041 = null;var count__26036_26042 = 0;var i__26037_26043 = 0;while(true){
if((i__26037_26043 < count__26036_26042))
{var vec__26038_26044 = chunk__26035_26041.cljs$core$IIndexed$_nth$arity$2(null,i__26037_26043);var name_26045 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26038_26044,0,null);var value_26046 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26038_26044,1,null);domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_26045,cljs.core.array_seq([value_26046], 0));
{
var G__26047 = seq__26034_26040;
var G__26048 = chunk__26035_26041;
var G__26049 = count__26036_26042;
var G__26050 = (i__26037_26043 + 1);
seq__26034_26040 = G__26047;
chunk__26035_26041 = G__26048;
count__26036_26042 = G__26049;
i__26037_26043 = G__26050;
continue;
}
} else
{var temp__4092__auto___26051 = cljs.core.seq(seq__26034_26040);if(temp__4092__auto___26051)
{var seq__26034_26052__$1 = temp__4092__auto___26051;if(cljs.core.chunked_seq_QMARK_(seq__26034_26052__$1))
{var c__4148__auto___26053 = cljs.core.chunk_first(seq__26034_26052__$1);{
var G__26054 = cljs.core.chunk_rest(seq__26034_26052__$1);
var G__26055 = c__4148__auto___26053;
var G__26056 = cljs.core.count(c__4148__auto___26053);
var G__26057 = 0;
seq__26034_26040 = G__26054;
chunk__26035_26041 = G__26055;
count__26036_26042 = G__26056;
i__26037_26043 = G__26057;
continue;
}
} else
{var vec__26039_26058 = cljs.core.first(seq__26034_26052__$1);var name_26059 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26039_26058,0,null);var value_26060 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26039_26058,1,null);domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_26059,cljs.core.array_seq([value_26060], 0));
{
var G__26061 = cljs.core.next(seq__26034_26052__$1);
var G__26062 = null;
var G__26063 = 0;
var G__26064 = 0;
seq__26034_26040 = G__26061;
chunk__26035_26041 = G__26062;
count__26036_26042 = G__26063;
i__26037_26043 = G__26064;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__26069_26073 = cljs.core.seq(domina.nodes(content));var chunk__26070_26074 = null;var count__26071_26075 = 0;var i__26072_26076 = 0;while(true){
if((i__26072_26076 < count__26071_26075))
{var node_26077 = chunk__26070_26074.cljs$core$IIndexed$_nth$arity$2(null,i__26072_26076);goog.dom.classes.add(node_26077,class$);
{
var G__26078 = seq__26069_26073;
var G__26079 = chunk__26070_26074;
var G__26080 = count__26071_26075;
var G__26081 = (i__26072_26076 + 1);
seq__26069_26073 = G__26078;
chunk__26070_26074 = G__26079;
count__26071_26075 = G__26080;
i__26072_26076 = G__26081;
continue;
}
} else
{var temp__4092__auto___26082 = cljs.core.seq(seq__26069_26073);if(temp__4092__auto___26082)
{var seq__26069_26083__$1 = temp__4092__auto___26082;if(cljs.core.chunked_seq_QMARK_(seq__26069_26083__$1))
{var c__4148__auto___26084 = cljs.core.chunk_first(seq__26069_26083__$1);{
var G__26085 = cljs.core.chunk_rest(seq__26069_26083__$1);
var G__26086 = c__4148__auto___26084;
var G__26087 = cljs.core.count(c__4148__auto___26084);
var G__26088 = 0;
seq__26069_26073 = G__26085;
chunk__26070_26074 = G__26086;
count__26071_26075 = G__26087;
i__26072_26076 = G__26088;
continue;
}
} else
{var node_26089 = cljs.core.first(seq__26069_26083__$1);goog.dom.classes.add(node_26089,class$);
{
var G__26090 = cljs.core.next(seq__26069_26083__$1);
var G__26091 = null;
var G__26092 = 0;
var G__26093 = 0;
seq__26069_26073 = G__26090;
chunk__26070_26074 = G__26091;
count__26071_26075 = G__26092;
i__26072_26076 = G__26093;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__26098_26102 = cljs.core.seq(domina.nodes(content));var chunk__26099_26103 = null;var count__26100_26104 = 0;var i__26101_26105 = 0;while(true){
if((i__26101_26105 < count__26100_26104))
{var node_26106 = chunk__26099_26103.cljs$core$IIndexed$_nth$arity$2(null,i__26101_26105);goog.dom.classes.remove(node_26106,class$);
{
var G__26107 = seq__26098_26102;
var G__26108 = chunk__26099_26103;
var G__26109 = count__26100_26104;
var G__26110 = (i__26101_26105 + 1);
seq__26098_26102 = G__26107;
chunk__26099_26103 = G__26108;
count__26100_26104 = G__26109;
i__26101_26105 = G__26110;
continue;
}
} else
{var temp__4092__auto___26111 = cljs.core.seq(seq__26098_26102);if(temp__4092__auto___26111)
{var seq__26098_26112__$1 = temp__4092__auto___26111;if(cljs.core.chunked_seq_QMARK_(seq__26098_26112__$1))
{var c__4148__auto___26113 = cljs.core.chunk_first(seq__26098_26112__$1);{
var G__26114 = cljs.core.chunk_rest(seq__26098_26112__$1);
var G__26115 = c__4148__auto___26113;
var G__26116 = cljs.core.count(c__4148__auto___26113);
var G__26117 = 0;
seq__26098_26102 = G__26114;
chunk__26099_26103 = G__26115;
count__26100_26104 = G__26116;
i__26101_26105 = G__26117;
continue;
}
} else
{var node_26118 = cljs.core.first(seq__26098_26112__$1);goog.dom.classes.remove(node_26118,class$);
{
var G__26119 = cljs.core.next(seq__26098_26112__$1);
var G__26120 = null;
var G__26121 = 0;
var G__26122 = 0;
seq__26098_26102 = G__26119;
chunk__26099_26103 = G__26120;
count__26100_26104 = G__26121;
i__26101_26105 = G__26122;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__26127_26131 = cljs.core.seq(domina.nodes(content));var chunk__26128_26132 = null;var count__26129_26133 = 0;var i__26130_26134 = 0;while(true){
if((i__26130_26134 < count__26129_26133))
{var node_26135 = chunk__26128_26132.cljs$core$IIndexed$_nth$arity$2(null,i__26130_26134);goog.dom.classes.toggle(node_26135,class$);
{
var G__26136 = seq__26127_26131;
var G__26137 = chunk__26128_26132;
var G__26138 = count__26129_26133;
var G__26139 = (i__26130_26134 + 1);
seq__26127_26131 = G__26136;
chunk__26128_26132 = G__26137;
count__26129_26133 = G__26138;
i__26130_26134 = G__26139;
continue;
}
} else
{var temp__4092__auto___26140 = cljs.core.seq(seq__26127_26131);if(temp__4092__auto___26140)
{var seq__26127_26141__$1 = temp__4092__auto___26140;if(cljs.core.chunked_seq_QMARK_(seq__26127_26141__$1))
{var c__4148__auto___26142 = cljs.core.chunk_first(seq__26127_26141__$1);{
var G__26143 = cljs.core.chunk_rest(seq__26127_26141__$1);
var G__26144 = c__4148__auto___26142;
var G__26145 = cljs.core.count(c__4148__auto___26142);
var G__26146 = 0;
seq__26127_26131 = G__26143;
chunk__26128_26132 = G__26144;
count__26129_26133 = G__26145;
i__26130_26134 = G__26146;
continue;
}
} else
{var node_26147 = cljs.core.first(seq__26127_26141__$1);goog.dom.classes.toggle(node_26147,class$);
{
var G__26148 = cljs.core.next(seq__26127_26141__$1);
var G__26149 = null;
var G__26150 = 0;
var G__26151 = 0;
seq__26127_26131 = G__26148;
chunk__26128_26132 = G__26149;
count__26129_26133 = G__26150;
i__26130_26134 = G__26151;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_26160__$1 = ((cljs.core.coll_QMARK_(classes))?clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",classes):classes);var seq__26156_26161 = cljs.core.seq(domina.nodes(content));var chunk__26157_26162 = null;var count__26158_26163 = 0;var i__26159_26164 = 0;while(true){
if((i__26159_26164 < count__26158_26163))
{var node_26165 = chunk__26157_26162.cljs$core$IIndexed$_nth$arity$2(null,i__26159_26164);goog.dom.classes.set(node_26165,classes_26160__$1);
{
var G__26166 = seq__26156_26161;
var G__26167 = chunk__26157_26162;
var G__26168 = count__26158_26163;
var G__26169 = (i__26159_26164 + 1);
seq__26156_26161 = G__26166;
chunk__26157_26162 = G__26167;
count__26158_26163 = G__26168;
i__26159_26164 = G__26169;
continue;
}
} else
{var temp__4092__auto___26170 = cljs.core.seq(seq__26156_26161);if(temp__4092__auto___26170)
{var seq__26156_26171__$1 = temp__4092__auto___26170;if(cljs.core.chunked_seq_QMARK_(seq__26156_26171__$1))
{var c__4148__auto___26172 = cljs.core.chunk_first(seq__26156_26171__$1);{
var G__26173 = cljs.core.chunk_rest(seq__26156_26171__$1);
var G__26174 = c__4148__auto___26172;
var G__26175 = cljs.core.count(c__4148__auto___26172);
var G__26176 = 0;
seq__26156_26161 = G__26173;
chunk__26157_26162 = G__26174;
count__26158_26163 = G__26175;
i__26159_26164 = G__26176;
continue;
}
} else
{var node_26177 = cljs.core.first(seq__26156_26171__$1);goog.dom.classes.set(node_26177,classes_26160__$1);
{
var G__26178 = cljs.core.next(seq__26156_26171__$1);
var G__26179 = null;
var G__26180 = 0;
var G__26181 = 0;
seq__26156_26161 = G__26178;
chunk__26157_26162 = G__26179;
count__26158_26163 = G__26180;
i__26159_26164 = G__26181;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__26186_26190 = cljs.core.seq(domina.nodes(content));var chunk__26187_26191 = null;var count__26188_26192 = 0;var i__26189_26193 = 0;while(true){
if((i__26189_26193 < count__26188_26192))
{var node_26194 = chunk__26187_26191.cljs$core$IIndexed$_nth$arity$2(null,i__26189_26193);goog.dom.setTextContent(node_26194,value);
{
var G__26195 = seq__26186_26190;
var G__26196 = chunk__26187_26191;
var G__26197 = count__26188_26192;
var G__26198 = (i__26189_26193 + 1);
seq__26186_26190 = G__26195;
chunk__26187_26191 = G__26196;
count__26188_26192 = G__26197;
i__26189_26193 = G__26198;
continue;
}
} else
{var temp__4092__auto___26199 = cljs.core.seq(seq__26186_26190);if(temp__4092__auto___26199)
{var seq__26186_26200__$1 = temp__4092__auto___26199;if(cljs.core.chunked_seq_QMARK_(seq__26186_26200__$1))
{var c__4148__auto___26201 = cljs.core.chunk_first(seq__26186_26200__$1);{
var G__26202 = cljs.core.chunk_rest(seq__26186_26200__$1);
var G__26203 = c__4148__auto___26201;
var G__26204 = cljs.core.count(c__4148__auto___26201);
var G__26205 = 0;
seq__26186_26190 = G__26202;
chunk__26187_26191 = G__26203;
count__26188_26192 = G__26204;
i__26189_26193 = G__26205;
continue;
}
} else
{var node_26206 = cljs.core.first(seq__26186_26200__$1);goog.dom.setTextContent(node_26206,value);
{
var G__26207 = cljs.core.next(seq__26186_26200__$1);
var G__26208 = null;
var G__26209 = 0;
var G__26210 = 0;
seq__26186_26190 = G__26207;
chunk__26187_26191 = G__26208;
count__26188_26192 = G__26209;
i__26189_26193 = G__26210;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__26215_26219 = cljs.core.seq(domina.nodes(content));var chunk__26216_26220 = null;var count__26217_26221 = 0;var i__26218_26222 = 0;while(true){
if((i__26218_26222 < count__26217_26221))
{var node_26223 = chunk__26216_26220.cljs$core$IIndexed$_nth$arity$2(null,i__26218_26222);goog.dom.forms.setValue(node_26223,value);
{
var G__26224 = seq__26215_26219;
var G__26225 = chunk__26216_26220;
var G__26226 = count__26217_26221;
var G__26227 = (i__26218_26222 + 1);
seq__26215_26219 = G__26224;
chunk__26216_26220 = G__26225;
count__26217_26221 = G__26226;
i__26218_26222 = G__26227;
continue;
}
} else
{var temp__4092__auto___26228 = cljs.core.seq(seq__26215_26219);if(temp__4092__auto___26228)
{var seq__26215_26229__$1 = temp__4092__auto___26228;if(cljs.core.chunked_seq_QMARK_(seq__26215_26229__$1))
{var c__4148__auto___26230 = cljs.core.chunk_first(seq__26215_26229__$1);{
var G__26231 = cljs.core.chunk_rest(seq__26215_26229__$1);
var G__26232 = c__4148__auto___26230;
var G__26233 = cljs.core.count(c__4148__auto___26230);
var G__26234 = 0;
seq__26215_26219 = G__26231;
chunk__26216_26220 = G__26232;
count__26217_26221 = G__26233;
i__26218_26222 = G__26234;
continue;
}
} else
{var node_26235 = cljs.core.first(seq__26215_26229__$1);goog.dom.forms.setValue(node_26235,value);
{
var G__26236 = cljs.core.next(seq__26215_26229__$1);
var G__26237 = null;
var G__26238 = 0;
var G__26239 = 0;
seq__26215_26219 = G__26236;
chunk__26216_26220 = G__26237;
count__26217_26221 = G__26238;
i__26218_26222 = G__26239;
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
{var value_26250 = clojure.string.replace(html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__26246_26251 = cljs.core.seq(domina.nodes(content));var chunk__26247_26252 = null;var count__26248_26253 = 0;var i__26249_26254 = 0;while(true){
if((i__26249_26254 < count__26248_26253))
{var node_26255 = chunk__26247_26252.cljs$core$IIndexed$_nth$arity$2(null,i__26249_26254);node_26255.innerHTML = value_26250;
{
var G__26256 = seq__26246_26251;
var G__26257 = chunk__26247_26252;
var G__26258 = count__26248_26253;
var G__26259 = (i__26249_26254 + 1);
seq__26246_26251 = G__26256;
chunk__26247_26252 = G__26257;
count__26248_26253 = G__26258;
i__26249_26254 = G__26259;
continue;
}
} else
{var temp__4092__auto___26260 = cljs.core.seq(seq__26246_26251);if(temp__4092__auto___26260)
{var seq__26246_26261__$1 = temp__4092__auto___26260;if(cljs.core.chunked_seq_QMARK_(seq__26246_26261__$1))
{var c__4148__auto___26262 = cljs.core.chunk_first(seq__26246_26261__$1);{
var G__26263 = cljs.core.chunk_rest(seq__26246_26261__$1);
var G__26264 = c__4148__auto___26262;
var G__26265 = cljs.core.count(c__4148__auto___26262);
var G__26266 = 0;
seq__26246_26251 = G__26263;
chunk__26247_26252 = G__26264;
count__26248_26253 = G__26265;
i__26249_26254 = G__26266;
continue;
}
} else
{var node_26267 = cljs.core.first(seq__26246_26261__$1);node_26267.innerHTML = value_26250;
{
var G__26268 = cljs.core.next(seq__26246_26261__$1);
var G__26269 = null;
var G__26270 = 0;
var G__26271 = 0;
seq__26246_26251 = G__26268;
chunk__26247_26252 = G__26269;
count__26248_26253 = G__26270;
i__26249_26254 = G__26271;
continue;
}
}
} else
{}
}
break;
}
}catch (e26245){if((e26245 instanceof Error))
{var e_26272 = e26245;domina.replace_children_BANG_(content,value_26250);
} else
{if(cljs.core.constant$keyword$156)
{throw e26245;
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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes(parent_content);var children = domina.nodes(child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__26279_26283 = cljs.core.seq(children);var chunk__26280_26284 = null;var count__26281_26285 = 0;var i__26282_26286 = 0;while(true){
if((i__26282_26286 < count__26281_26285))
{var child_26287 = chunk__26280_26284.cljs$core$IIndexed$_nth$arity$2(null,i__26282_26286);frag.appendChild(child_26287);
{
var G__26288 = seq__26279_26283;
var G__26289 = chunk__26280_26284;
var G__26290 = count__26281_26285;
var G__26291 = (i__26282_26286 + 1);
seq__26279_26283 = G__26288;
chunk__26280_26284 = G__26289;
count__26281_26285 = G__26290;
i__26282_26286 = G__26291;
continue;
}
} else
{var temp__4092__auto___26292 = cljs.core.seq(seq__26279_26283);if(temp__4092__auto___26292)
{var seq__26279_26293__$1 = temp__4092__auto___26292;if(cljs.core.chunked_seq_QMARK_(seq__26279_26293__$1))
{var c__4148__auto___26294 = cljs.core.chunk_first(seq__26279_26293__$1);{
var G__26295 = cljs.core.chunk_rest(seq__26279_26293__$1);
var G__26296 = c__4148__auto___26294;
var G__26297 = cljs.core.count(c__4148__auto___26294);
var G__26298 = 0;
seq__26279_26283 = G__26295;
chunk__26280_26284 = G__26296;
count__26281_26285 = G__26297;
i__26282_26286 = G__26298;
continue;
}
} else
{var child_26299 = cljs.core.first(seq__26279_26293__$1);frag.appendChild(child_26299);
{
var G__26300 = cljs.core.next(seq__26279_26293__$1);
var G__26301 = null;
var G__26302 = 0;
var G__26303 = 0;
seq__26279_26283 = G__26300;
chunk__26280_26284 = G__26301;
count__26281_26285 = G__26302;
i__26282_26286 = G__26303;
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
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (p1__26273_SHARP_,p2__26274_SHARP_){return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(p1__26273_SHARP_,p2__26274_SHARP_) : f.call(null,p1__26273_SHARP_,p2__26274_SHARP_));
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
{if((function (){var G__26305 = list_thing;if(G__26305)
{var bit__4050__auto__ = (G__26305.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__26305.cljs$core$ISeqable$))
{return true;
} else
{if((!G__26305.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__26305);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__26305);
}
})())
{return cljs.core.seq(list_thing);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_(list_thing)))
{return domina.lazy_nodelist(list_thing);
} else
{if(cljs.core.constant$keyword$157)
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
{if((function (){var G__26306 = content;if(G__26306)
{var bit__4050__auto__ = (G__26306.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__26306.cljs$core$ISeqable$))
{return true;
} else
{if((!G__26306.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__26306);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__26306);
}
})())
{return cljs.core.seq(content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_(content)))
{return domina.lazy_nodelist(content);
} else
{if(cljs.core.constant$keyword$157)
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
{if((function (){var G__26307 = content;if(G__26307)
{var bit__4050__auto__ = (G__26307.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__26307.cljs$core$ISeqable$))
{return true;
} else
{if((!G__26307.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__26307);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__26307);
}
})())
{return cljs.core.first(content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_(content)))
{return content.item(0);
} else
{if(cljs.core.constant$keyword$157)
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
