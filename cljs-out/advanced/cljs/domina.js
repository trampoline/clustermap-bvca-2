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
var opt_wrapper_26835 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_26836 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<table>","</table>"], null);var cell_wrapper_26837 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["col",cljs.core.constant$keyword$206,"tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,"",""], null),table_section_wrapper_26836,table_section_wrapper_26836,opt_wrapper_26835,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<fieldset>","</fieldset>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<map>","</map>"], null),cell_wrapper_26837,table_section_wrapper_26836,cell_wrapper_26837,opt_wrapper_26835,table_section_wrapper_26836,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody>","</tbody></table>"], null),table_section_wrapper_26836]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not(cljs.core.re_find(domina.re_tbody,html));var tbody = (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3394__auto__ = div.firstChild;if(cljs.core.truth_(and__3394__auto__))
{return div.firstChild.childNodes;
} else
{return and__3394__auto__;
}
})():(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__26842 = cljs.core.seq(tbody);var chunk__26843 = null;var count__26844 = 0;var i__26845 = 0;while(true){
if((i__26845 < count__26844))
{var child = chunk__26843.cljs$core$IIndexed$_nth$arity$2(null,i__26845);if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.nodeName,"tbody")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__26846 = seq__26842;
var G__26847 = chunk__26843;
var G__26848 = count__26844;
var G__26849 = (i__26845 + 1);
seq__26842 = G__26846;
chunk__26843 = G__26847;
count__26844 = G__26848;
i__26845 = G__26849;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__26842);if(temp__4092__auto__)
{var seq__26842__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__26842__$1))
{var c__4148__auto__ = cljs.core.chunk_first(seq__26842__$1);{
var G__26850 = cljs.core.chunk_rest(seq__26842__$1);
var G__26851 = c__4148__auto__;
var G__26852 = cljs.core.count(c__4148__auto__);
var G__26853 = 0;
seq__26842 = G__26850;
chunk__26843 = G__26851;
count__26844 = G__26852;
i__26845 = G__26853;
continue;
}
} else
{var child = cljs.core.first(seq__26842__$1);if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.nodeName,"tbody")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__26854 = cljs.core.next(seq__26842__$1);
var G__26855 = null;
var G__26856 = 0;
var G__26857 = 0;
seq__26842 = G__26854;
chunk__26843 = G__26855;
count__26844 = G__26856;
i__26845 = G__26857;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace(html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = [cljs.core.str(cljs.core.second(cljs.core.re_find(domina.re_tag_name,html__$1)))].join('').toLowerCase();var vec__26859 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(domina.wrap_map,tag_name,cljs.core.constant$keyword$206.cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26859,0,null);var start_wrap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26859,1,null);var end_wrap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26859,2,null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');
return div;
})();var level = depth;while(true){
if((level > 0))
{{
var G__26860 = wrapper.lastChild;
var G__26861 = (level - 1);
wrapper = G__26860;
level = G__26861;
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
domina.DomContent = (function (){var obj26863 = {};return obj26863;
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
log_debug.cljs$lang$applyTo = (function (arglist__26864){
var mesg = cljs.core.seq(arglist__26864);
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
log.cljs$lang$applyTo = (function (arglist__26865){
var mesg = cljs.core.seq(arglist__26865);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__26866){
var contents = cljs.core.seq(arglist__26866);
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
domina.clone = (function clone(content){return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__26867_SHARP_){return p1__26867_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__26868_SHARP_,p2__26869_SHARP_){return goog.dom.insertChildAt(p1__26868_SHARP_,p2__26869_SHARP_,idx);
}),parent_content,child_content) : domina.apply_with_cloning.call(null,(function (p1__26868_SHARP_,p2__26869_SHARP_){return goog.dom.insertChildAt(p1__26868_SHARP_,p2__26869_SHARP_,idx);
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__26871_SHARP_,p2__26870_SHARP_){return goog.dom.insertSiblingBefore(p2__26870_SHARP_,p1__26871_SHARP_);
}),content,new_content) : domina.apply_with_cloning.call(null,(function (p1__26871_SHARP_,p2__26870_SHARP_){return goog.dom.insertSiblingBefore(p2__26870_SHARP_,p1__26871_SHARP_);
}),content,new_content));
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__26873_SHARP_,p2__26872_SHARP_){return goog.dom.insertSiblingAfter(p2__26872_SHARP_,p1__26873_SHARP_);
}),content,new_content) : domina.apply_with_cloning.call(null,(function (p1__26873_SHARP_,p2__26872_SHARP_){return goog.dom.insertSiblingAfter(p2__26872_SHARP_,p1__26873_SHARP_);
}),content,new_content));
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__26875_SHARP_,p2__26874_SHARP_){return goog.dom.replaceNode(p2__26874_SHARP_,p1__26875_SHARP_);
}),old_content,new_content) : domina.apply_with_cloning.call(null,(function (p1__26875_SHARP_,p2__26874_SHARP_){return goog.dom.replaceNode(p2__26874_SHARP_,p1__26875_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__26880_26884 = cljs.core.seq(domina.nodes(content));var chunk__26881_26885 = null;var count__26882_26886 = 0;var i__26883_26887 = 0;while(true){
if((i__26883_26887 < count__26882_26886))
{var n_26888 = chunk__26881_26885.cljs$core$IIndexed$_nth$arity$2(null,i__26883_26887);goog.style.setStyle(n_26888,cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__26889 = seq__26880_26884;
var G__26890 = chunk__26881_26885;
var G__26891 = count__26882_26886;
var G__26892 = (i__26883_26887 + 1);
seq__26880_26884 = G__26889;
chunk__26881_26885 = G__26890;
count__26882_26886 = G__26891;
i__26883_26887 = G__26892;
continue;
}
} else
{var temp__4092__auto___26893 = cljs.core.seq(seq__26880_26884);if(temp__4092__auto___26893)
{var seq__26880_26894__$1 = temp__4092__auto___26893;if(cljs.core.chunked_seq_QMARK_(seq__26880_26894__$1))
{var c__4148__auto___26895 = cljs.core.chunk_first(seq__26880_26894__$1);{
var G__26896 = cljs.core.chunk_rest(seq__26880_26894__$1);
var G__26897 = c__4148__auto___26895;
var G__26898 = cljs.core.count(c__4148__auto___26895);
var G__26899 = 0;
seq__26880_26884 = G__26896;
chunk__26881_26885 = G__26897;
count__26882_26886 = G__26898;
i__26883_26887 = G__26899;
continue;
}
} else
{var n_26900 = cljs.core.first(seq__26880_26894__$1);goog.style.setStyle(n_26900,cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__26901 = cljs.core.next(seq__26880_26894__$1);
var G__26902 = null;
var G__26903 = 0;
var G__26904 = 0;
seq__26880_26884 = G__26901;
chunk__26881_26885 = G__26902;
count__26882_26886 = G__26903;
i__26883_26887 = G__26904;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__26905){
var content = cljs.core.first(arglist__26905);
arglist__26905 = cljs.core.next(arglist__26905);
var name = cljs.core.first(arglist__26905);
var value = cljs.core.rest(arglist__26905);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__26910_26914 = cljs.core.seq(domina.nodes(content));var chunk__26911_26915 = null;var count__26912_26916 = 0;var i__26913_26917 = 0;while(true){
if((i__26913_26917 < count__26912_26916))
{var n_26918 = chunk__26911_26915.cljs$core$IIndexed$_nth$arity$2(null,i__26913_26917);n_26918.setAttribute(cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__26919 = seq__26910_26914;
var G__26920 = chunk__26911_26915;
var G__26921 = count__26912_26916;
var G__26922 = (i__26913_26917 + 1);
seq__26910_26914 = G__26919;
chunk__26911_26915 = G__26920;
count__26912_26916 = G__26921;
i__26913_26917 = G__26922;
continue;
}
} else
{var temp__4092__auto___26923 = cljs.core.seq(seq__26910_26914);if(temp__4092__auto___26923)
{var seq__26910_26924__$1 = temp__4092__auto___26923;if(cljs.core.chunked_seq_QMARK_(seq__26910_26924__$1))
{var c__4148__auto___26925 = cljs.core.chunk_first(seq__26910_26924__$1);{
var G__26926 = cljs.core.chunk_rest(seq__26910_26924__$1);
var G__26927 = c__4148__auto___26925;
var G__26928 = cljs.core.count(c__4148__auto___26925);
var G__26929 = 0;
seq__26910_26914 = G__26926;
chunk__26911_26915 = G__26927;
count__26912_26916 = G__26928;
i__26913_26917 = G__26929;
continue;
}
} else
{var n_26930 = cljs.core.first(seq__26910_26924__$1);n_26930.setAttribute(cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__26931 = cljs.core.next(seq__26910_26924__$1);
var G__26932 = null;
var G__26933 = 0;
var G__26934 = 0;
seq__26910_26914 = G__26931;
chunk__26911_26915 = G__26932;
count__26912_26916 = G__26933;
i__26913_26917 = G__26934;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__26935){
var content = cljs.core.first(arglist__26935);
arglist__26935 = cljs.core.next(arglist__26935);
var name = cljs.core.first(arglist__26935);
var value = cljs.core.rest(arglist__26935);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__26940_26944 = cljs.core.seq(domina.nodes(content));var chunk__26941_26945 = null;var count__26942_26946 = 0;var i__26943_26947 = 0;while(true){
if((i__26943_26947 < count__26942_26946))
{var n_26948 = chunk__26941_26945.cljs$core$IIndexed$_nth$arity$2(null,i__26943_26947);n_26948.removeAttribute(cljs.core.name(name));
{
var G__26949 = seq__26940_26944;
var G__26950 = chunk__26941_26945;
var G__26951 = count__26942_26946;
var G__26952 = (i__26943_26947 + 1);
seq__26940_26944 = G__26949;
chunk__26941_26945 = G__26950;
count__26942_26946 = G__26951;
i__26943_26947 = G__26952;
continue;
}
} else
{var temp__4092__auto___26953 = cljs.core.seq(seq__26940_26944);if(temp__4092__auto___26953)
{var seq__26940_26954__$1 = temp__4092__auto___26953;if(cljs.core.chunked_seq_QMARK_(seq__26940_26954__$1))
{var c__4148__auto___26955 = cljs.core.chunk_first(seq__26940_26954__$1);{
var G__26956 = cljs.core.chunk_rest(seq__26940_26954__$1);
var G__26957 = c__4148__auto___26955;
var G__26958 = cljs.core.count(c__4148__auto___26955);
var G__26959 = 0;
seq__26940_26944 = G__26956;
chunk__26941_26945 = G__26957;
count__26942_26946 = G__26958;
i__26943_26947 = G__26959;
continue;
}
} else
{var n_26960 = cljs.core.first(seq__26940_26954__$1);n_26960.removeAttribute(cljs.core.name(name));
{
var G__26961 = cljs.core.next(seq__26940_26954__$1);
var G__26962 = null;
var G__26963 = 0;
var G__26964 = 0;
seq__26940_26944 = G__26961;
chunk__26941_26945 = G__26962;
count__26942_26946 = G__26963;
i__26943_26947 = G__26964;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,pair){var vec__26966 = pair.split(/\s*:\s*/);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26966,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26966,1,null);if(cljs.core.truth_((function (){var and__3394__auto__ = k;if(cljs.core.truth_(and__3394__auto__))
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
domina.attrs = (function attrs(content){var node = domina.single_node(content);var attrs__$1 = node.attributes;return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.filter(cljs.core.complement(cljs.core.nil_QMARK_),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__26967_SHARP_){var attr = attrs__$1.item(p1__26967_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(null,value)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__26974_26980 = cljs.core.seq(styles);var chunk__26975_26981 = null;var count__26976_26982 = 0;var i__26977_26983 = 0;while(true){
if((i__26977_26983 < count__26976_26982))
{var vec__26978_26984 = chunk__26975_26981.cljs$core$IIndexed$_nth$arity$2(null,i__26977_26983);var name_26985 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26978_26984,0,null);var value_26986 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26978_26984,1,null);domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_26985,cljs.core.array_seq([value_26986], 0));
{
var G__26987 = seq__26974_26980;
var G__26988 = chunk__26975_26981;
var G__26989 = count__26976_26982;
var G__26990 = (i__26977_26983 + 1);
seq__26974_26980 = G__26987;
chunk__26975_26981 = G__26988;
count__26976_26982 = G__26989;
i__26977_26983 = G__26990;
continue;
}
} else
{var temp__4092__auto___26991 = cljs.core.seq(seq__26974_26980);if(temp__4092__auto___26991)
{var seq__26974_26992__$1 = temp__4092__auto___26991;if(cljs.core.chunked_seq_QMARK_(seq__26974_26992__$1))
{var c__4148__auto___26993 = cljs.core.chunk_first(seq__26974_26992__$1);{
var G__26994 = cljs.core.chunk_rest(seq__26974_26992__$1);
var G__26995 = c__4148__auto___26993;
var G__26996 = cljs.core.count(c__4148__auto___26993);
var G__26997 = 0;
seq__26974_26980 = G__26994;
chunk__26975_26981 = G__26995;
count__26976_26982 = G__26996;
i__26977_26983 = G__26997;
continue;
}
} else
{var vec__26979_26998 = cljs.core.first(seq__26974_26992__$1);var name_26999 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26979_26998,0,null);var value_27000 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26979_26998,1,null);domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_26999,cljs.core.array_seq([value_27000], 0));
{
var G__27001 = cljs.core.next(seq__26974_26992__$1);
var G__27002 = null;
var G__27003 = 0;
var G__27004 = 0;
seq__26974_26980 = G__27001;
chunk__26975_26981 = G__27002;
count__26976_26982 = G__27003;
i__26977_26983 = G__27004;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__27011_27017 = cljs.core.seq(attrs);var chunk__27012_27018 = null;var count__27013_27019 = 0;var i__27014_27020 = 0;while(true){
if((i__27014_27020 < count__27013_27019))
{var vec__27015_27021 = chunk__27012_27018.cljs$core$IIndexed$_nth$arity$2(null,i__27014_27020);var name_27022 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27015_27021,0,null);var value_27023 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27015_27021,1,null);domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_27022,cljs.core.array_seq([value_27023], 0));
{
var G__27024 = seq__27011_27017;
var G__27025 = chunk__27012_27018;
var G__27026 = count__27013_27019;
var G__27027 = (i__27014_27020 + 1);
seq__27011_27017 = G__27024;
chunk__27012_27018 = G__27025;
count__27013_27019 = G__27026;
i__27014_27020 = G__27027;
continue;
}
} else
{var temp__4092__auto___27028 = cljs.core.seq(seq__27011_27017);if(temp__4092__auto___27028)
{var seq__27011_27029__$1 = temp__4092__auto___27028;if(cljs.core.chunked_seq_QMARK_(seq__27011_27029__$1))
{var c__4148__auto___27030 = cljs.core.chunk_first(seq__27011_27029__$1);{
var G__27031 = cljs.core.chunk_rest(seq__27011_27029__$1);
var G__27032 = c__4148__auto___27030;
var G__27033 = cljs.core.count(c__4148__auto___27030);
var G__27034 = 0;
seq__27011_27017 = G__27031;
chunk__27012_27018 = G__27032;
count__27013_27019 = G__27033;
i__27014_27020 = G__27034;
continue;
}
} else
{var vec__27016_27035 = cljs.core.first(seq__27011_27029__$1);var name_27036 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27016_27035,0,null);var value_27037 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27016_27035,1,null);domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_27036,cljs.core.array_seq([value_27037], 0));
{
var G__27038 = cljs.core.next(seq__27011_27029__$1);
var G__27039 = null;
var G__27040 = 0;
var G__27041 = 0;
seq__27011_27017 = G__27038;
chunk__27012_27018 = G__27039;
count__27013_27019 = G__27040;
i__27014_27020 = G__27041;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__27046_27050 = cljs.core.seq(domina.nodes(content));var chunk__27047_27051 = null;var count__27048_27052 = 0;var i__27049_27053 = 0;while(true){
if((i__27049_27053 < count__27048_27052))
{var node_27054 = chunk__27047_27051.cljs$core$IIndexed$_nth$arity$2(null,i__27049_27053);goog.dom.classes.add(node_27054,class$);
{
var G__27055 = seq__27046_27050;
var G__27056 = chunk__27047_27051;
var G__27057 = count__27048_27052;
var G__27058 = (i__27049_27053 + 1);
seq__27046_27050 = G__27055;
chunk__27047_27051 = G__27056;
count__27048_27052 = G__27057;
i__27049_27053 = G__27058;
continue;
}
} else
{var temp__4092__auto___27059 = cljs.core.seq(seq__27046_27050);if(temp__4092__auto___27059)
{var seq__27046_27060__$1 = temp__4092__auto___27059;if(cljs.core.chunked_seq_QMARK_(seq__27046_27060__$1))
{var c__4148__auto___27061 = cljs.core.chunk_first(seq__27046_27060__$1);{
var G__27062 = cljs.core.chunk_rest(seq__27046_27060__$1);
var G__27063 = c__4148__auto___27061;
var G__27064 = cljs.core.count(c__4148__auto___27061);
var G__27065 = 0;
seq__27046_27050 = G__27062;
chunk__27047_27051 = G__27063;
count__27048_27052 = G__27064;
i__27049_27053 = G__27065;
continue;
}
} else
{var node_27066 = cljs.core.first(seq__27046_27060__$1);goog.dom.classes.add(node_27066,class$);
{
var G__27067 = cljs.core.next(seq__27046_27060__$1);
var G__27068 = null;
var G__27069 = 0;
var G__27070 = 0;
seq__27046_27050 = G__27067;
chunk__27047_27051 = G__27068;
count__27048_27052 = G__27069;
i__27049_27053 = G__27070;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__27075_27079 = cljs.core.seq(domina.nodes(content));var chunk__27076_27080 = null;var count__27077_27081 = 0;var i__27078_27082 = 0;while(true){
if((i__27078_27082 < count__27077_27081))
{var node_27083 = chunk__27076_27080.cljs$core$IIndexed$_nth$arity$2(null,i__27078_27082);goog.dom.classes.remove(node_27083,class$);
{
var G__27084 = seq__27075_27079;
var G__27085 = chunk__27076_27080;
var G__27086 = count__27077_27081;
var G__27087 = (i__27078_27082 + 1);
seq__27075_27079 = G__27084;
chunk__27076_27080 = G__27085;
count__27077_27081 = G__27086;
i__27078_27082 = G__27087;
continue;
}
} else
{var temp__4092__auto___27088 = cljs.core.seq(seq__27075_27079);if(temp__4092__auto___27088)
{var seq__27075_27089__$1 = temp__4092__auto___27088;if(cljs.core.chunked_seq_QMARK_(seq__27075_27089__$1))
{var c__4148__auto___27090 = cljs.core.chunk_first(seq__27075_27089__$1);{
var G__27091 = cljs.core.chunk_rest(seq__27075_27089__$1);
var G__27092 = c__4148__auto___27090;
var G__27093 = cljs.core.count(c__4148__auto___27090);
var G__27094 = 0;
seq__27075_27079 = G__27091;
chunk__27076_27080 = G__27092;
count__27077_27081 = G__27093;
i__27078_27082 = G__27094;
continue;
}
} else
{var node_27095 = cljs.core.first(seq__27075_27089__$1);goog.dom.classes.remove(node_27095,class$);
{
var G__27096 = cljs.core.next(seq__27075_27089__$1);
var G__27097 = null;
var G__27098 = 0;
var G__27099 = 0;
seq__27075_27079 = G__27096;
chunk__27076_27080 = G__27097;
count__27077_27081 = G__27098;
i__27078_27082 = G__27099;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__27104_27108 = cljs.core.seq(domina.nodes(content));var chunk__27105_27109 = null;var count__27106_27110 = 0;var i__27107_27111 = 0;while(true){
if((i__27107_27111 < count__27106_27110))
{var node_27112 = chunk__27105_27109.cljs$core$IIndexed$_nth$arity$2(null,i__27107_27111);goog.dom.classes.toggle(node_27112,class$);
{
var G__27113 = seq__27104_27108;
var G__27114 = chunk__27105_27109;
var G__27115 = count__27106_27110;
var G__27116 = (i__27107_27111 + 1);
seq__27104_27108 = G__27113;
chunk__27105_27109 = G__27114;
count__27106_27110 = G__27115;
i__27107_27111 = G__27116;
continue;
}
} else
{var temp__4092__auto___27117 = cljs.core.seq(seq__27104_27108);if(temp__4092__auto___27117)
{var seq__27104_27118__$1 = temp__4092__auto___27117;if(cljs.core.chunked_seq_QMARK_(seq__27104_27118__$1))
{var c__4148__auto___27119 = cljs.core.chunk_first(seq__27104_27118__$1);{
var G__27120 = cljs.core.chunk_rest(seq__27104_27118__$1);
var G__27121 = c__4148__auto___27119;
var G__27122 = cljs.core.count(c__4148__auto___27119);
var G__27123 = 0;
seq__27104_27108 = G__27120;
chunk__27105_27109 = G__27121;
count__27106_27110 = G__27122;
i__27107_27111 = G__27123;
continue;
}
} else
{var node_27124 = cljs.core.first(seq__27104_27118__$1);goog.dom.classes.toggle(node_27124,class$);
{
var G__27125 = cljs.core.next(seq__27104_27118__$1);
var G__27126 = null;
var G__27127 = 0;
var G__27128 = 0;
seq__27104_27108 = G__27125;
chunk__27105_27109 = G__27126;
count__27106_27110 = G__27127;
i__27107_27111 = G__27128;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_27137__$1 = ((cljs.core.coll_QMARK_(classes))?clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",classes):classes);var seq__27133_27138 = cljs.core.seq(domina.nodes(content));var chunk__27134_27139 = null;var count__27135_27140 = 0;var i__27136_27141 = 0;while(true){
if((i__27136_27141 < count__27135_27140))
{var node_27142 = chunk__27134_27139.cljs$core$IIndexed$_nth$arity$2(null,i__27136_27141);goog.dom.classes.set(node_27142,classes_27137__$1);
{
var G__27143 = seq__27133_27138;
var G__27144 = chunk__27134_27139;
var G__27145 = count__27135_27140;
var G__27146 = (i__27136_27141 + 1);
seq__27133_27138 = G__27143;
chunk__27134_27139 = G__27144;
count__27135_27140 = G__27145;
i__27136_27141 = G__27146;
continue;
}
} else
{var temp__4092__auto___27147 = cljs.core.seq(seq__27133_27138);if(temp__4092__auto___27147)
{var seq__27133_27148__$1 = temp__4092__auto___27147;if(cljs.core.chunked_seq_QMARK_(seq__27133_27148__$1))
{var c__4148__auto___27149 = cljs.core.chunk_first(seq__27133_27148__$1);{
var G__27150 = cljs.core.chunk_rest(seq__27133_27148__$1);
var G__27151 = c__4148__auto___27149;
var G__27152 = cljs.core.count(c__4148__auto___27149);
var G__27153 = 0;
seq__27133_27138 = G__27150;
chunk__27134_27139 = G__27151;
count__27135_27140 = G__27152;
i__27136_27141 = G__27153;
continue;
}
} else
{var node_27154 = cljs.core.first(seq__27133_27148__$1);goog.dom.classes.set(node_27154,classes_27137__$1);
{
var G__27155 = cljs.core.next(seq__27133_27148__$1);
var G__27156 = null;
var G__27157 = 0;
var G__27158 = 0;
seq__27133_27138 = G__27155;
chunk__27134_27139 = G__27156;
count__27135_27140 = G__27157;
i__27136_27141 = G__27158;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__27163_27167 = cljs.core.seq(domina.nodes(content));var chunk__27164_27168 = null;var count__27165_27169 = 0;var i__27166_27170 = 0;while(true){
if((i__27166_27170 < count__27165_27169))
{var node_27171 = chunk__27164_27168.cljs$core$IIndexed$_nth$arity$2(null,i__27166_27170);goog.dom.setTextContent(node_27171,value);
{
var G__27172 = seq__27163_27167;
var G__27173 = chunk__27164_27168;
var G__27174 = count__27165_27169;
var G__27175 = (i__27166_27170 + 1);
seq__27163_27167 = G__27172;
chunk__27164_27168 = G__27173;
count__27165_27169 = G__27174;
i__27166_27170 = G__27175;
continue;
}
} else
{var temp__4092__auto___27176 = cljs.core.seq(seq__27163_27167);if(temp__4092__auto___27176)
{var seq__27163_27177__$1 = temp__4092__auto___27176;if(cljs.core.chunked_seq_QMARK_(seq__27163_27177__$1))
{var c__4148__auto___27178 = cljs.core.chunk_first(seq__27163_27177__$1);{
var G__27179 = cljs.core.chunk_rest(seq__27163_27177__$1);
var G__27180 = c__4148__auto___27178;
var G__27181 = cljs.core.count(c__4148__auto___27178);
var G__27182 = 0;
seq__27163_27167 = G__27179;
chunk__27164_27168 = G__27180;
count__27165_27169 = G__27181;
i__27166_27170 = G__27182;
continue;
}
} else
{var node_27183 = cljs.core.first(seq__27163_27177__$1);goog.dom.setTextContent(node_27183,value);
{
var G__27184 = cljs.core.next(seq__27163_27177__$1);
var G__27185 = null;
var G__27186 = 0;
var G__27187 = 0;
seq__27163_27167 = G__27184;
chunk__27164_27168 = G__27185;
count__27165_27169 = G__27186;
i__27166_27170 = G__27187;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__27192_27196 = cljs.core.seq(domina.nodes(content));var chunk__27193_27197 = null;var count__27194_27198 = 0;var i__27195_27199 = 0;while(true){
if((i__27195_27199 < count__27194_27198))
{var node_27200 = chunk__27193_27197.cljs$core$IIndexed$_nth$arity$2(null,i__27195_27199);goog.dom.forms.setValue(node_27200,value);
{
var G__27201 = seq__27192_27196;
var G__27202 = chunk__27193_27197;
var G__27203 = count__27194_27198;
var G__27204 = (i__27195_27199 + 1);
seq__27192_27196 = G__27201;
chunk__27193_27197 = G__27202;
count__27194_27198 = G__27203;
i__27195_27199 = G__27204;
continue;
}
} else
{var temp__4092__auto___27205 = cljs.core.seq(seq__27192_27196);if(temp__4092__auto___27205)
{var seq__27192_27206__$1 = temp__4092__auto___27205;if(cljs.core.chunked_seq_QMARK_(seq__27192_27206__$1))
{var c__4148__auto___27207 = cljs.core.chunk_first(seq__27192_27206__$1);{
var G__27208 = cljs.core.chunk_rest(seq__27192_27206__$1);
var G__27209 = c__4148__auto___27207;
var G__27210 = cljs.core.count(c__4148__auto___27207);
var G__27211 = 0;
seq__27192_27196 = G__27208;
chunk__27193_27197 = G__27209;
count__27194_27198 = G__27210;
i__27195_27199 = G__27211;
continue;
}
} else
{var node_27212 = cljs.core.first(seq__27192_27206__$1);goog.dom.forms.setValue(node_27212,value);
{
var G__27213 = cljs.core.next(seq__27192_27206__$1);
var G__27214 = null;
var G__27215 = 0;
var G__27216 = 0;
seq__27192_27196 = G__27213;
chunk__27193_27197 = G__27214;
count__27194_27198 = G__27215;
i__27195_27199 = G__27216;
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
{var value_27227 = clojure.string.replace(html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__27223_27228 = cljs.core.seq(domina.nodes(content));var chunk__27224_27229 = null;var count__27225_27230 = 0;var i__27226_27231 = 0;while(true){
if((i__27226_27231 < count__27225_27230))
{var node_27232 = chunk__27224_27229.cljs$core$IIndexed$_nth$arity$2(null,i__27226_27231);node_27232.innerHTML = value_27227;
{
var G__27233 = seq__27223_27228;
var G__27234 = chunk__27224_27229;
var G__27235 = count__27225_27230;
var G__27236 = (i__27226_27231 + 1);
seq__27223_27228 = G__27233;
chunk__27224_27229 = G__27234;
count__27225_27230 = G__27235;
i__27226_27231 = G__27236;
continue;
}
} else
{var temp__4092__auto___27237 = cljs.core.seq(seq__27223_27228);if(temp__4092__auto___27237)
{var seq__27223_27238__$1 = temp__4092__auto___27237;if(cljs.core.chunked_seq_QMARK_(seq__27223_27238__$1))
{var c__4148__auto___27239 = cljs.core.chunk_first(seq__27223_27238__$1);{
var G__27240 = cljs.core.chunk_rest(seq__27223_27238__$1);
var G__27241 = c__4148__auto___27239;
var G__27242 = cljs.core.count(c__4148__auto___27239);
var G__27243 = 0;
seq__27223_27228 = G__27240;
chunk__27224_27229 = G__27241;
count__27225_27230 = G__27242;
i__27226_27231 = G__27243;
continue;
}
} else
{var node_27244 = cljs.core.first(seq__27223_27238__$1);node_27244.innerHTML = value_27227;
{
var G__27245 = cljs.core.next(seq__27223_27238__$1);
var G__27246 = null;
var G__27247 = 0;
var G__27248 = 0;
seq__27223_27228 = G__27245;
chunk__27224_27229 = G__27246;
count__27225_27230 = G__27247;
i__27226_27231 = G__27248;
continue;
}
}
} else
{}
}
break;
}
}catch (e27222){if((e27222 instanceof Error))
{var e_27249 = e27222;domina.replace_children_BANG_(content,value_27227);
} else
{if(cljs.core.constant$keyword$205)
{throw e27222;
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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes(parent_content);var children = domina.nodes(child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__27256_27260 = cljs.core.seq(children);var chunk__27257_27261 = null;var count__27258_27262 = 0;var i__27259_27263 = 0;while(true){
if((i__27259_27263 < count__27258_27262))
{var child_27264 = chunk__27257_27261.cljs$core$IIndexed$_nth$arity$2(null,i__27259_27263);frag.appendChild(child_27264);
{
var G__27265 = seq__27256_27260;
var G__27266 = chunk__27257_27261;
var G__27267 = count__27258_27262;
var G__27268 = (i__27259_27263 + 1);
seq__27256_27260 = G__27265;
chunk__27257_27261 = G__27266;
count__27258_27262 = G__27267;
i__27259_27263 = G__27268;
continue;
}
} else
{var temp__4092__auto___27269 = cljs.core.seq(seq__27256_27260);if(temp__4092__auto___27269)
{var seq__27256_27270__$1 = temp__4092__auto___27269;if(cljs.core.chunked_seq_QMARK_(seq__27256_27270__$1))
{var c__4148__auto___27271 = cljs.core.chunk_first(seq__27256_27270__$1);{
var G__27272 = cljs.core.chunk_rest(seq__27256_27270__$1);
var G__27273 = c__4148__auto___27271;
var G__27274 = cljs.core.count(c__4148__auto___27271);
var G__27275 = 0;
seq__27256_27260 = G__27272;
chunk__27257_27261 = G__27273;
count__27258_27262 = G__27274;
i__27259_27263 = G__27275;
continue;
}
} else
{var child_27276 = cljs.core.first(seq__27256_27270__$1);frag.appendChild(child_27276);
{
var G__27277 = cljs.core.next(seq__27256_27270__$1);
var G__27278 = null;
var G__27279 = 0;
var G__27280 = 0;
seq__27256_27260 = G__27277;
chunk__27257_27261 = G__27278;
count__27258_27262 = G__27279;
i__27259_27263 = G__27280;
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
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (p1__27250_SHARP_,p2__27251_SHARP_){return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(p1__27250_SHARP_,p2__27251_SHARP_) : f.call(null,p1__27250_SHARP_,p2__27251_SHARP_));
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
{if((function (){var G__27282 = list_thing;if(G__27282)
{var bit__4050__auto__ = (G__27282.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__27282.cljs$core$ISeqable$))
{return true;
} else
{if((!G__27282.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__27282);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__27282);
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
{if((function (){var G__27283 = content;if(G__27283)
{var bit__4050__auto__ = (G__27283.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__27283.cljs$core$ISeqable$))
{return true;
} else
{if((!G__27283.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__27283);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__27283);
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
{if((function (){var G__27284 = content;if(G__27284)
{var bit__4050__auto__ = (G__27284.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__27284.cljs$core$ISeqable$))
{return true;
} else
{if((!G__27284.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__27284);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__27284);
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
