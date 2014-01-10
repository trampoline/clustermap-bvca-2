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
var opt_wrapper_23914 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_23915 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<table>","</table>"], null);var cell_wrapper_23916 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["col",cljs.core.constant$keyword$113,"tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,"",""], null),table_section_wrapper_23915,table_section_wrapper_23915,opt_wrapper_23914,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<fieldset>","</fieldset>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<map>","</map>"], null),cell_wrapper_23916,table_section_wrapper_23915,cell_wrapper_23916,opt_wrapper_23914,table_section_wrapper_23915,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody>","</tbody></table>"], null),table_section_wrapper_23915]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not(cljs.core.re_find(domina.re_tbody,html));var tbody = (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3394__auto__ = div.firstChild;if(cljs.core.truth_(and__3394__auto__))
{return div.firstChild.childNodes;
} else
{return and__3394__auto__;
}
})():(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__23921 = cljs.core.seq(tbody);var chunk__23922 = null;var count__23923 = 0;var i__23924 = 0;while(true){
if((i__23924 < count__23923))
{var child = chunk__23922.cljs$core$IIndexed$_nth$arity$2(null,i__23924);if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.nodeName,"tbody")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__23925 = seq__23921;
var G__23926 = chunk__23922;
var G__23927 = count__23923;
var G__23928 = (i__23924 + 1);
seq__23921 = G__23925;
chunk__23922 = G__23926;
count__23923 = G__23927;
i__23924 = G__23928;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__23921);if(temp__4092__auto__)
{var seq__23921__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__23921__$1))
{var c__4148__auto__ = cljs.core.chunk_first(seq__23921__$1);{
var G__23929 = cljs.core.chunk_rest(seq__23921__$1);
var G__23930 = c__4148__auto__;
var G__23931 = cljs.core.count(c__4148__auto__);
var G__23932 = 0;
seq__23921 = G__23929;
chunk__23922 = G__23930;
count__23923 = G__23931;
i__23924 = G__23932;
continue;
}
} else
{var child = cljs.core.first(seq__23921__$1);if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.nodeName,"tbody")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__23933 = cljs.core.next(seq__23921__$1);
var G__23934 = null;
var G__23935 = 0;
var G__23936 = 0;
seq__23921 = G__23933;
chunk__23922 = G__23934;
count__23923 = G__23935;
i__23924 = G__23936;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace(html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = [cljs.core.str(cljs.core.second(cljs.core.re_find(domina.re_tag_name,html__$1)))].join('').toLowerCase();var vec__23938 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(domina.wrap_map,tag_name,cljs.core.constant$keyword$113.cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23938,0,null);var start_wrap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23938,1,null);var end_wrap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23938,2,null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');
return div;
})();var level = depth;while(true){
if((level > 0))
{{
var G__23939 = wrapper.lastChild;
var G__23940 = (level - 1);
wrapper = G__23939;
level = G__23940;
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
domina.DomContent = (function (){var obj23942 = {};return obj23942;
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
log_debug.cljs$lang$applyTo = (function (arglist__23943){
var mesg = cljs.core.seq(arglist__23943);
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
log.cljs$lang$applyTo = (function (arglist__23944){
var mesg = cljs.core.seq(arglist__23944);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__23945){
var contents = cljs.core.seq(arglist__23945);
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
domina.clone = (function clone(content){return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__23946_SHARP_){return p1__23946_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__23947_SHARP_,p2__23948_SHARP_){return goog.dom.insertChildAt(p1__23947_SHARP_,p2__23948_SHARP_,idx);
}),parent_content,child_content) : domina.apply_with_cloning.call(null,(function (p1__23947_SHARP_,p2__23948_SHARP_){return goog.dom.insertChildAt(p1__23947_SHARP_,p2__23948_SHARP_,idx);
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__23950_SHARP_,p2__23949_SHARP_){return goog.dom.insertSiblingBefore(p2__23949_SHARP_,p1__23950_SHARP_);
}),content,new_content) : domina.apply_with_cloning.call(null,(function (p1__23950_SHARP_,p2__23949_SHARP_){return goog.dom.insertSiblingBefore(p2__23949_SHARP_,p1__23950_SHARP_);
}),content,new_content));
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__23952_SHARP_,p2__23951_SHARP_){return goog.dom.insertSiblingAfter(p2__23951_SHARP_,p1__23952_SHARP_);
}),content,new_content) : domina.apply_with_cloning.call(null,(function (p1__23952_SHARP_,p2__23951_SHARP_){return goog.dom.insertSiblingAfter(p2__23951_SHARP_,p1__23952_SHARP_);
}),content,new_content));
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__23954_SHARP_,p2__23953_SHARP_){return goog.dom.replaceNode(p2__23953_SHARP_,p1__23954_SHARP_);
}),old_content,new_content) : domina.apply_with_cloning.call(null,(function (p1__23954_SHARP_,p2__23953_SHARP_){return goog.dom.replaceNode(p2__23953_SHARP_,p1__23954_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__23959_23963 = cljs.core.seq(domina.nodes(content));var chunk__23960_23964 = null;var count__23961_23965 = 0;var i__23962_23966 = 0;while(true){
if((i__23962_23966 < count__23961_23965))
{var n_23967 = chunk__23960_23964.cljs$core$IIndexed$_nth$arity$2(null,i__23962_23966);goog.style.setStyle(n_23967,cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__23968 = seq__23959_23963;
var G__23969 = chunk__23960_23964;
var G__23970 = count__23961_23965;
var G__23971 = (i__23962_23966 + 1);
seq__23959_23963 = G__23968;
chunk__23960_23964 = G__23969;
count__23961_23965 = G__23970;
i__23962_23966 = G__23971;
continue;
}
} else
{var temp__4092__auto___23972 = cljs.core.seq(seq__23959_23963);if(temp__4092__auto___23972)
{var seq__23959_23973__$1 = temp__4092__auto___23972;if(cljs.core.chunked_seq_QMARK_(seq__23959_23973__$1))
{var c__4148__auto___23974 = cljs.core.chunk_first(seq__23959_23973__$1);{
var G__23975 = cljs.core.chunk_rest(seq__23959_23973__$1);
var G__23976 = c__4148__auto___23974;
var G__23977 = cljs.core.count(c__4148__auto___23974);
var G__23978 = 0;
seq__23959_23963 = G__23975;
chunk__23960_23964 = G__23976;
count__23961_23965 = G__23977;
i__23962_23966 = G__23978;
continue;
}
} else
{var n_23979 = cljs.core.first(seq__23959_23973__$1);goog.style.setStyle(n_23979,cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__23980 = cljs.core.next(seq__23959_23973__$1);
var G__23981 = null;
var G__23982 = 0;
var G__23983 = 0;
seq__23959_23963 = G__23980;
chunk__23960_23964 = G__23981;
count__23961_23965 = G__23982;
i__23962_23966 = G__23983;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__23984){
var content = cljs.core.first(arglist__23984);
arglist__23984 = cljs.core.next(arglist__23984);
var name = cljs.core.first(arglist__23984);
var value = cljs.core.rest(arglist__23984);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__23989_23993 = cljs.core.seq(domina.nodes(content));var chunk__23990_23994 = null;var count__23991_23995 = 0;var i__23992_23996 = 0;while(true){
if((i__23992_23996 < count__23991_23995))
{var n_23997 = chunk__23990_23994.cljs$core$IIndexed$_nth$arity$2(null,i__23992_23996);n_23997.setAttribute(cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__23998 = seq__23989_23993;
var G__23999 = chunk__23990_23994;
var G__24000 = count__23991_23995;
var G__24001 = (i__23992_23996 + 1);
seq__23989_23993 = G__23998;
chunk__23990_23994 = G__23999;
count__23991_23995 = G__24000;
i__23992_23996 = G__24001;
continue;
}
} else
{var temp__4092__auto___24002 = cljs.core.seq(seq__23989_23993);if(temp__4092__auto___24002)
{var seq__23989_24003__$1 = temp__4092__auto___24002;if(cljs.core.chunked_seq_QMARK_(seq__23989_24003__$1))
{var c__4148__auto___24004 = cljs.core.chunk_first(seq__23989_24003__$1);{
var G__24005 = cljs.core.chunk_rest(seq__23989_24003__$1);
var G__24006 = c__4148__auto___24004;
var G__24007 = cljs.core.count(c__4148__auto___24004);
var G__24008 = 0;
seq__23989_23993 = G__24005;
chunk__23990_23994 = G__24006;
count__23991_23995 = G__24007;
i__23992_23996 = G__24008;
continue;
}
} else
{var n_24009 = cljs.core.first(seq__23989_24003__$1);n_24009.setAttribute(cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__24010 = cljs.core.next(seq__23989_24003__$1);
var G__24011 = null;
var G__24012 = 0;
var G__24013 = 0;
seq__23989_23993 = G__24010;
chunk__23990_23994 = G__24011;
count__23991_23995 = G__24012;
i__23992_23996 = G__24013;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__24014){
var content = cljs.core.first(arglist__24014);
arglist__24014 = cljs.core.next(arglist__24014);
var name = cljs.core.first(arglist__24014);
var value = cljs.core.rest(arglist__24014);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__24019_24023 = cljs.core.seq(domina.nodes(content));var chunk__24020_24024 = null;var count__24021_24025 = 0;var i__24022_24026 = 0;while(true){
if((i__24022_24026 < count__24021_24025))
{var n_24027 = chunk__24020_24024.cljs$core$IIndexed$_nth$arity$2(null,i__24022_24026);n_24027.removeAttribute(cljs.core.name(name));
{
var G__24028 = seq__24019_24023;
var G__24029 = chunk__24020_24024;
var G__24030 = count__24021_24025;
var G__24031 = (i__24022_24026 + 1);
seq__24019_24023 = G__24028;
chunk__24020_24024 = G__24029;
count__24021_24025 = G__24030;
i__24022_24026 = G__24031;
continue;
}
} else
{var temp__4092__auto___24032 = cljs.core.seq(seq__24019_24023);if(temp__4092__auto___24032)
{var seq__24019_24033__$1 = temp__4092__auto___24032;if(cljs.core.chunked_seq_QMARK_(seq__24019_24033__$1))
{var c__4148__auto___24034 = cljs.core.chunk_first(seq__24019_24033__$1);{
var G__24035 = cljs.core.chunk_rest(seq__24019_24033__$1);
var G__24036 = c__4148__auto___24034;
var G__24037 = cljs.core.count(c__4148__auto___24034);
var G__24038 = 0;
seq__24019_24023 = G__24035;
chunk__24020_24024 = G__24036;
count__24021_24025 = G__24037;
i__24022_24026 = G__24038;
continue;
}
} else
{var n_24039 = cljs.core.first(seq__24019_24033__$1);n_24039.removeAttribute(cljs.core.name(name));
{
var G__24040 = cljs.core.next(seq__24019_24033__$1);
var G__24041 = null;
var G__24042 = 0;
var G__24043 = 0;
seq__24019_24023 = G__24040;
chunk__24020_24024 = G__24041;
count__24021_24025 = G__24042;
i__24022_24026 = G__24043;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,pair){var vec__24045 = pair.split(/\s*:\s*/);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24045,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24045,1,null);if(cljs.core.truth_((function (){var and__3394__auto__ = k;if(cljs.core.truth_(and__3394__auto__))
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
{if(cljs.core.constant$keyword$112)
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
domina.attrs = (function attrs(content){var node = domina.single_node(content);var attrs__$1 = node.attributes;return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.filter(cljs.core.complement(cljs.core.nil_QMARK_),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__24046_SHARP_){var attr = attrs__$1.item(p1__24046_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(null,value)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__24053_24059 = cljs.core.seq(styles);var chunk__24054_24060 = null;var count__24055_24061 = 0;var i__24056_24062 = 0;while(true){
if((i__24056_24062 < count__24055_24061))
{var vec__24057_24063 = chunk__24054_24060.cljs$core$IIndexed$_nth$arity$2(null,i__24056_24062);var name_24064 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24057_24063,0,null);var value_24065 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24057_24063,1,null);domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_24064,cljs.core.array_seq([value_24065], 0));
{
var G__24066 = seq__24053_24059;
var G__24067 = chunk__24054_24060;
var G__24068 = count__24055_24061;
var G__24069 = (i__24056_24062 + 1);
seq__24053_24059 = G__24066;
chunk__24054_24060 = G__24067;
count__24055_24061 = G__24068;
i__24056_24062 = G__24069;
continue;
}
} else
{var temp__4092__auto___24070 = cljs.core.seq(seq__24053_24059);if(temp__4092__auto___24070)
{var seq__24053_24071__$1 = temp__4092__auto___24070;if(cljs.core.chunked_seq_QMARK_(seq__24053_24071__$1))
{var c__4148__auto___24072 = cljs.core.chunk_first(seq__24053_24071__$1);{
var G__24073 = cljs.core.chunk_rest(seq__24053_24071__$1);
var G__24074 = c__4148__auto___24072;
var G__24075 = cljs.core.count(c__4148__auto___24072);
var G__24076 = 0;
seq__24053_24059 = G__24073;
chunk__24054_24060 = G__24074;
count__24055_24061 = G__24075;
i__24056_24062 = G__24076;
continue;
}
} else
{var vec__24058_24077 = cljs.core.first(seq__24053_24071__$1);var name_24078 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24058_24077,0,null);var value_24079 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24058_24077,1,null);domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_24078,cljs.core.array_seq([value_24079], 0));
{
var G__24080 = cljs.core.next(seq__24053_24071__$1);
var G__24081 = null;
var G__24082 = 0;
var G__24083 = 0;
seq__24053_24059 = G__24080;
chunk__24054_24060 = G__24081;
count__24055_24061 = G__24082;
i__24056_24062 = G__24083;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__24090_24096 = cljs.core.seq(attrs);var chunk__24091_24097 = null;var count__24092_24098 = 0;var i__24093_24099 = 0;while(true){
if((i__24093_24099 < count__24092_24098))
{var vec__24094_24100 = chunk__24091_24097.cljs$core$IIndexed$_nth$arity$2(null,i__24093_24099);var name_24101 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24094_24100,0,null);var value_24102 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24094_24100,1,null);domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_24101,cljs.core.array_seq([value_24102], 0));
{
var G__24103 = seq__24090_24096;
var G__24104 = chunk__24091_24097;
var G__24105 = count__24092_24098;
var G__24106 = (i__24093_24099 + 1);
seq__24090_24096 = G__24103;
chunk__24091_24097 = G__24104;
count__24092_24098 = G__24105;
i__24093_24099 = G__24106;
continue;
}
} else
{var temp__4092__auto___24107 = cljs.core.seq(seq__24090_24096);if(temp__4092__auto___24107)
{var seq__24090_24108__$1 = temp__4092__auto___24107;if(cljs.core.chunked_seq_QMARK_(seq__24090_24108__$1))
{var c__4148__auto___24109 = cljs.core.chunk_first(seq__24090_24108__$1);{
var G__24110 = cljs.core.chunk_rest(seq__24090_24108__$1);
var G__24111 = c__4148__auto___24109;
var G__24112 = cljs.core.count(c__4148__auto___24109);
var G__24113 = 0;
seq__24090_24096 = G__24110;
chunk__24091_24097 = G__24111;
count__24092_24098 = G__24112;
i__24093_24099 = G__24113;
continue;
}
} else
{var vec__24095_24114 = cljs.core.first(seq__24090_24108__$1);var name_24115 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24095_24114,0,null);var value_24116 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24095_24114,1,null);domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_24115,cljs.core.array_seq([value_24116], 0));
{
var G__24117 = cljs.core.next(seq__24090_24108__$1);
var G__24118 = null;
var G__24119 = 0;
var G__24120 = 0;
seq__24090_24096 = G__24117;
chunk__24091_24097 = G__24118;
count__24092_24098 = G__24119;
i__24093_24099 = G__24120;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__24125_24129 = cljs.core.seq(domina.nodes(content));var chunk__24126_24130 = null;var count__24127_24131 = 0;var i__24128_24132 = 0;while(true){
if((i__24128_24132 < count__24127_24131))
{var node_24133 = chunk__24126_24130.cljs$core$IIndexed$_nth$arity$2(null,i__24128_24132);goog.dom.classes.add(node_24133,class$);
{
var G__24134 = seq__24125_24129;
var G__24135 = chunk__24126_24130;
var G__24136 = count__24127_24131;
var G__24137 = (i__24128_24132 + 1);
seq__24125_24129 = G__24134;
chunk__24126_24130 = G__24135;
count__24127_24131 = G__24136;
i__24128_24132 = G__24137;
continue;
}
} else
{var temp__4092__auto___24138 = cljs.core.seq(seq__24125_24129);if(temp__4092__auto___24138)
{var seq__24125_24139__$1 = temp__4092__auto___24138;if(cljs.core.chunked_seq_QMARK_(seq__24125_24139__$1))
{var c__4148__auto___24140 = cljs.core.chunk_first(seq__24125_24139__$1);{
var G__24141 = cljs.core.chunk_rest(seq__24125_24139__$1);
var G__24142 = c__4148__auto___24140;
var G__24143 = cljs.core.count(c__4148__auto___24140);
var G__24144 = 0;
seq__24125_24129 = G__24141;
chunk__24126_24130 = G__24142;
count__24127_24131 = G__24143;
i__24128_24132 = G__24144;
continue;
}
} else
{var node_24145 = cljs.core.first(seq__24125_24139__$1);goog.dom.classes.add(node_24145,class$);
{
var G__24146 = cljs.core.next(seq__24125_24139__$1);
var G__24147 = null;
var G__24148 = 0;
var G__24149 = 0;
seq__24125_24129 = G__24146;
chunk__24126_24130 = G__24147;
count__24127_24131 = G__24148;
i__24128_24132 = G__24149;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__24154_24158 = cljs.core.seq(domina.nodes(content));var chunk__24155_24159 = null;var count__24156_24160 = 0;var i__24157_24161 = 0;while(true){
if((i__24157_24161 < count__24156_24160))
{var node_24162 = chunk__24155_24159.cljs$core$IIndexed$_nth$arity$2(null,i__24157_24161);goog.dom.classes.remove(node_24162,class$);
{
var G__24163 = seq__24154_24158;
var G__24164 = chunk__24155_24159;
var G__24165 = count__24156_24160;
var G__24166 = (i__24157_24161 + 1);
seq__24154_24158 = G__24163;
chunk__24155_24159 = G__24164;
count__24156_24160 = G__24165;
i__24157_24161 = G__24166;
continue;
}
} else
{var temp__4092__auto___24167 = cljs.core.seq(seq__24154_24158);if(temp__4092__auto___24167)
{var seq__24154_24168__$1 = temp__4092__auto___24167;if(cljs.core.chunked_seq_QMARK_(seq__24154_24168__$1))
{var c__4148__auto___24169 = cljs.core.chunk_first(seq__24154_24168__$1);{
var G__24170 = cljs.core.chunk_rest(seq__24154_24168__$1);
var G__24171 = c__4148__auto___24169;
var G__24172 = cljs.core.count(c__4148__auto___24169);
var G__24173 = 0;
seq__24154_24158 = G__24170;
chunk__24155_24159 = G__24171;
count__24156_24160 = G__24172;
i__24157_24161 = G__24173;
continue;
}
} else
{var node_24174 = cljs.core.first(seq__24154_24168__$1);goog.dom.classes.remove(node_24174,class$);
{
var G__24175 = cljs.core.next(seq__24154_24168__$1);
var G__24176 = null;
var G__24177 = 0;
var G__24178 = 0;
seq__24154_24158 = G__24175;
chunk__24155_24159 = G__24176;
count__24156_24160 = G__24177;
i__24157_24161 = G__24178;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__24183_24187 = cljs.core.seq(domina.nodes(content));var chunk__24184_24188 = null;var count__24185_24189 = 0;var i__24186_24190 = 0;while(true){
if((i__24186_24190 < count__24185_24189))
{var node_24191 = chunk__24184_24188.cljs$core$IIndexed$_nth$arity$2(null,i__24186_24190);goog.dom.classes.toggle(node_24191,class$);
{
var G__24192 = seq__24183_24187;
var G__24193 = chunk__24184_24188;
var G__24194 = count__24185_24189;
var G__24195 = (i__24186_24190 + 1);
seq__24183_24187 = G__24192;
chunk__24184_24188 = G__24193;
count__24185_24189 = G__24194;
i__24186_24190 = G__24195;
continue;
}
} else
{var temp__4092__auto___24196 = cljs.core.seq(seq__24183_24187);if(temp__4092__auto___24196)
{var seq__24183_24197__$1 = temp__4092__auto___24196;if(cljs.core.chunked_seq_QMARK_(seq__24183_24197__$1))
{var c__4148__auto___24198 = cljs.core.chunk_first(seq__24183_24197__$1);{
var G__24199 = cljs.core.chunk_rest(seq__24183_24197__$1);
var G__24200 = c__4148__auto___24198;
var G__24201 = cljs.core.count(c__4148__auto___24198);
var G__24202 = 0;
seq__24183_24187 = G__24199;
chunk__24184_24188 = G__24200;
count__24185_24189 = G__24201;
i__24186_24190 = G__24202;
continue;
}
} else
{var node_24203 = cljs.core.first(seq__24183_24197__$1);goog.dom.classes.toggle(node_24203,class$);
{
var G__24204 = cljs.core.next(seq__24183_24197__$1);
var G__24205 = null;
var G__24206 = 0;
var G__24207 = 0;
seq__24183_24187 = G__24204;
chunk__24184_24188 = G__24205;
count__24185_24189 = G__24206;
i__24186_24190 = G__24207;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_24216__$1 = ((cljs.core.coll_QMARK_(classes))?clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",classes):classes);var seq__24212_24217 = cljs.core.seq(domina.nodes(content));var chunk__24213_24218 = null;var count__24214_24219 = 0;var i__24215_24220 = 0;while(true){
if((i__24215_24220 < count__24214_24219))
{var node_24221 = chunk__24213_24218.cljs$core$IIndexed$_nth$arity$2(null,i__24215_24220);goog.dom.classes.set(node_24221,classes_24216__$1);
{
var G__24222 = seq__24212_24217;
var G__24223 = chunk__24213_24218;
var G__24224 = count__24214_24219;
var G__24225 = (i__24215_24220 + 1);
seq__24212_24217 = G__24222;
chunk__24213_24218 = G__24223;
count__24214_24219 = G__24224;
i__24215_24220 = G__24225;
continue;
}
} else
{var temp__4092__auto___24226 = cljs.core.seq(seq__24212_24217);if(temp__4092__auto___24226)
{var seq__24212_24227__$1 = temp__4092__auto___24226;if(cljs.core.chunked_seq_QMARK_(seq__24212_24227__$1))
{var c__4148__auto___24228 = cljs.core.chunk_first(seq__24212_24227__$1);{
var G__24229 = cljs.core.chunk_rest(seq__24212_24227__$1);
var G__24230 = c__4148__auto___24228;
var G__24231 = cljs.core.count(c__4148__auto___24228);
var G__24232 = 0;
seq__24212_24217 = G__24229;
chunk__24213_24218 = G__24230;
count__24214_24219 = G__24231;
i__24215_24220 = G__24232;
continue;
}
} else
{var node_24233 = cljs.core.first(seq__24212_24227__$1);goog.dom.classes.set(node_24233,classes_24216__$1);
{
var G__24234 = cljs.core.next(seq__24212_24227__$1);
var G__24235 = null;
var G__24236 = 0;
var G__24237 = 0;
seq__24212_24217 = G__24234;
chunk__24213_24218 = G__24235;
count__24214_24219 = G__24236;
i__24215_24220 = G__24237;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__24242_24246 = cljs.core.seq(domina.nodes(content));var chunk__24243_24247 = null;var count__24244_24248 = 0;var i__24245_24249 = 0;while(true){
if((i__24245_24249 < count__24244_24248))
{var node_24250 = chunk__24243_24247.cljs$core$IIndexed$_nth$arity$2(null,i__24245_24249);goog.dom.setTextContent(node_24250,value);
{
var G__24251 = seq__24242_24246;
var G__24252 = chunk__24243_24247;
var G__24253 = count__24244_24248;
var G__24254 = (i__24245_24249 + 1);
seq__24242_24246 = G__24251;
chunk__24243_24247 = G__24252;
count__24244_24248 = G__24253;
i__24245_24249 = G__24254;
continue;
}
} else
{var temp__4092__auto___24255 = cljs.core.seq(seq__24242_24246);if(temp__4092__auto___24255)
{var seq__24242_24256__$1 = temp__4092__auto___24255;if(cljs.core.chunked_seq_QMARK_(seq__24242_24256__$1))
{var c__4148__auto___24257 = cljs.core.chunk_first(seq__24242_24256__$1);{
var G__24258 = cljs.core.chunk_rest(seq__24242_24256__$1);
var G__24259 = c__4148__auto___24257;
var G__24260 = cljs.core.count(c__4148__auto___24257);
var G__24261 = 0;
seq__24242_24246 = G__24258;
chunk__24243_24247 = G__24259;
count__24244_24248 = G__24260;
i__24245_24249 = G__24261;
continue;
}
} else
{var node_24262 = cljs.core.first(seq__24242_24256__$1);goog.dom.setTextContent(node_24262,value);
{
var G__24263 = cljs.core.next(seq__24242_24256__$1);
var G__24264 = null;
var G__24265 = 0;
var G__24266 = 0;
seq__24242_24246 = G__24263;
chunk__24243_24247 = G__24264;
count__24244_24248 = G__24265;
i__24245_24249 = G__24266;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__24271_24275 = cljs.core.seq(domina.nodes(content));var chunk__24272_24276 = null;var count__24273_24277 = 0;var i__24274_24278 = 0;while(true){
if((i__24274_24278 < count__24273_24277))
{var node_24279 = chunk__24272_24276.cljs$core$IIndexed$_nth$arity$2(null,i__24274_24278);goog.dom.forms.setValue(node_24279,value);
{
var G__24280 = seq__24271_24275;
var G__24281 = chunk__24272_24276;
var G__24282 = count__24273_24277;
var G__24283 = (i__24274_24278 + 1);
seq__24271_24275 = G__24280;
chunk__24272_24276 = G__24281;
count__24273_24277 = G__24282;
i__24274_24278 = G__24283;
continue;
}
} else
{var temp__4092__auto___24284 = cljs.core.seq(seq__24271_24275);if(temp__4092__auto___24284)
{var seq__24271_24285__$1 = temp__4092__auto___24284;if(cljs.core.chunked_seq_QMARK_(seq__24271_24285__$1))
{var c__4148__auto___24286 = cljs.core.chunk_first(seq__24271_24285__$1);{
var G__24287 = cljs.core.chunk_rest(seq__24271_24285__$1);
var G__24288 = c__4148__auto___24286;
var G__24289 = cljs.core.count(c__4148__auto___24286);
var G__24290 = 0;
seq__24271_24275 = G__24287;
chunk__24272_24276 = G__24288;
count__24273_24277 = G__24289;
i__24274_24278 = G__24290;
continue;
}
} else
{var node_24291 = cljs.core.first(seq__24271_24285__$1);goog.dom.forms.setValue(node_24291,value);
{
var G__24292 = cljs.core.next(seq__24271_24285__$1);
var G__24293 = null;
var G__24294 = 0;
var G__24295 = 0;
seq__24271_24275 = G__24292;
chunk__24272_24276 = G__24293;
count__24273_24277 = G__24294;
i__24274_24278 = G__24295;
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
{var value_24306 = clojure.string.replace(html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__24302_24307 = cljs.core.seq(domina.nodes(content));var chunk__24303_24308 = null;var count__24304_24309 = 0;var i__24305_24310 = 0;while(true){
if((i__24305_24310 < count__24304_24309))
{var node_24311 = chunk__24303_24308.cljs$core$IIndexed$_nth$arity$2(null,i__24305_24310);node_24311.innerHTML = value_24306;
{
var G__24312 = seq__24302_24307;
var G__24313 = chunk__24303_24308;
var G__24314 = count__24304_24309;
var G__24315 = (i__24305_24310 + 1);
seq__24302_24307 = G__24312;
chunk__24303_24308 = G__24313;
count__24304_24309 = G__24314;
i__24305_24310 = G__24315;
continue;
}
} else
{var temp__4092__auto___24316 = cljs.core.seq(seq__24302_24307);if(temp__4092__auto___24316)
{var seq__24302_24317__$1 = temp__4092__auto___24316;if(cljs.core.chunked_seq_QMARK_(seq__24302_24317__$1))
{var c__4148__auto___24318 = cljs.core.chunk_first(seq__24302_24317__$1);{
var G__24319 = cljs.core.chunk_rest(seq__24302_24317__$1);
var G__24320 = c__4148__auto___24318;
var G__24321 = cljs.core.count(c__4148__auto___24318);
var G__24322 = 0;
seq__24302_24307 = G__24319;
chunk__24303_24308 = G__24320;
count__24304_24309 = G__24321;
i__24305_24310 = G__24322;
continue;
}
} else
{var node_24323 = cljs.core.first(seq__24302_24317__$1);node_24323.innerHTML = value_24306;
{
var G__24324 = cljs.core.next(seq__24302_24317__$1);
var G__24325 = null;
var G__24326 = 0;
var G__24327 = 0;
seq__24302_24307 = G__24324;
chunk__24303_24308 = G__24325;
count__24304_24309 = G__24326;
i__24305_24310 = G__24327;
continue;
}
}
} else
{}
}
break;
}
}catch (e24301){if((e24301 instanceof Error))
{var e_24328 = e24301;domina.replace_children_BANG_(content,value_24306);
} else
{if(cljs.core.constant$keyword$112)
{throw e24301;
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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes(parent_content);var children = domina.nodes(child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__24335_24339 = cljs.core.seq(children);var chunk__24336_24340 = null;var count__24337_24341 = 0;var i__24338_24342 = 0;while(true){
if((i__24338_24342 < count__24337_24341))
{var child_24343 = chunk__24336_24340.cljs$core$IIndexed$_nth$arity$2(null,i__24338_24342);frag.appendChild(child_24343);
{
var G__24344 = seq__24335_24339;
var G__24345 = chunk__24336_24340;
var G__24346 = count__24337_24341;
var G__24347 = (i__24338_24342 + 1);
seq__24335_24339 = G__24344;
chunk__24336_24340 = G__24345;
count__24337_24341 = G__24346;
i__24338_24342 = G__24347;
continue;
}
} else
{var temp__4092__auto___24348 = cljs.core.seq(seq__24335_24339);if(temp__4092__auto___24348)
{var seq__24335_24349__$1 = temp__4092__auto___24348;if(cljs.core.chunked_seq_QMARK_(seq__24335_24349__$1))
{var c__4148__auto___24350 = cljs.core.chunk_first(seq__24335_24349__$1);{
var G__24351 = cljs.core.chunk_rest(seq__24335_24349__$1);
var G__24352 = c__4148__auto___24350;
var G__24353 = cljs.core.count(c__4148__auto___24350);
var G__24354 = 0;
seq__24335_24339 = G__24351;
chunk__24336_24340 = G__24352;
count__24337_24341 = G__24353;
i__24338_24342 = G__24354;
continue;
}
} else
{var child_24355 = cljs.core.first(seq__24335_24349__$1);frag.appendChild(child_24355);
{
var G__24356 = cljs.core.next(seq__24335_24349__$1);
var G__24357 = null;
var G__24358 = 0;
var G__24359 = 0;
seq__24335_24339 = G__24356;
chunk__24336_24340 = G__24357;
count__24337_24341 = G__24358;
i__24338_24342 = G__24359;
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
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (p1__24329_SHARP_,p2__24330_SHARP_){return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(p1__24329_SHARP_,p2__24330_SHARP_) : f.call(null,p1__24329_SHARP_,p2__24330_SHARP_));
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
{if((function (){var G__24361 = list_thing;if(G__24361)
{var bit__4050__auto__ = (G__24361.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__24361.cljs$core$ISeqable$))
{return true;
} else
{if((!G__24361.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__24361);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__24361);
}
})())
{return cljs.core.seq(list_thing);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_(list_thing)))
{return domina.lazy_nodelist(list_thing);
} else
{if(cljs.core.constant$keyword$113)
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
{if((function (){var G__24362 = content;if(G__24362)
{var bit__4050__auto__ = (G__24362.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__24362.cljs$core$ISeqable$))
{return true;
} else
{if((!G__24362.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__24362);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__24362);
}
})())
{return cljs.core.seq(content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_(content)))
{return domina.lazy_nodelist(content);
} else
{if(cljs.core.constant$keyword$113)
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
{if((function (){var G__24363 = content;if(G__24363)
{var bit__4050__auto__ = (G__24363.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__24363.cljs$core$ISeqable$))
{return true;
} else
{if((!G__24363.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__24363);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__24363);
}
})())
{return cljs.core.first(content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_(content)))
{return content.item(0);
} else
{if(cljs.core.constant$keyword$113)
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
