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
var opt_wrapper_35870 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_35871 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<table>","</table>"], null);var cell_wrapper_35872 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["col",new cljs.core.Keyword(null,"default","default",2558708147),"tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,"",""], null),table_section_wrapper_35871,table_section_wrapper_35871,opt_wrapper_35870,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<fieldset>","</fieldset>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<map>","</map>"], null),cell_wrapper_35872,table_section_wrapper_35871,cell_wrapper_35872,opt_wrapper_35870,table_section_wrapper_35871,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody>","</tbody></table>"], null),table_section_wrapper_35871]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3394__auto__ = div.firstChild;if(cljs.core.truth_(and__3394__auto__))
{return div.firstChild.childNodes;
} else
{return and__3394__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__35877 = cljs.core.seq.call(null,tbody);var chunk__35878 = null;var count__35879 = 0;var i__35880 = 0;while(true){
if((i__35880 < count__35879))
{var child = cljs.core._nth.call(null,chunk__35878,i__35880);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__35881 = seq__35877;
var G__35882 = chunk__35878;
var G__35883 = count__35879;
var G__35884 = (i__35880 + 1);
seq__35877 = G__35881;
chunk__35878 = G__35882;
count__35879 = G__35883;
i__35880 = G__35884;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__35877);if(temp__4092__auto__)
{var seq__35877__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__35877__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__35877__$1);{
var G__35885 = cljs.core.chunk_rest.call(null,seq__35877__$1);
var G__35886 = c__4148__auto__;
var G__35887 = cljs.core.count.call(null,c__4148__auto__);
var G__35888 = 0;
seq__35877 = G__35885;
chunk__35878 = G__35886;
count__35879 = G__35887;
i__35880 = G__35888;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__35877__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__35889 = cljs.core.next.call(null,seq__35877__$1);
var G__35890 = null;
var G__35891 = 0;
var G__35892 = 0;
seq__35877 = G__35889;
chunk__35878 = G__35890;
count__35879 = G__35891;
i__35880 = G__35892;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))].join('').toLowerCase();var vec__35894 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__35894,0,null);var start_wrap = cljs.core.nth.call(null,vec__35894,1,null);var end_wrap = cljs.core.nth.call(null,vec__35894,2,null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');
return div;
})();var level = depth;while(true){
if((level > 0))
{{
var G__35895 = wrapper.lastChild;
var G__35896 = (level - 1);
wrapper = G__35895;
level = G__35896;
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
if(cljs.core.truth_((function (){var and__3394__auto__ = cljs.core.not.call(null,domina.support.leading_whitespace_QMARK_);if(and__3394__auto__)
{return cljs.core.re_find.call(null,domina.re_leading_whitespace,html__$1);
} else
{return and__3394__auto__;
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
domina.DomContent = (function (){var obj35898 = {};return obj35898;
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
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
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
var log_debug__delegate = function (mesg){if(cljs.core.truth_((function (){var and__3394__auto__ = domina._STAR_debug_STAR_;if(cljs.core.truth_(and__3394__auto__))
{return !(cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__3394__auto__;
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
log_debug.cljs$lang$applyTo = (function (arglist__35899){
var mesg = cljs.core.seq(arglist__35899);
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
log.cljs$lang$applyTo = (function (arglist__35900){
var mesg = cljs.core.seq(arglist__35900);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__35901){
var contents = cljs.core.seq(arglist__35901);
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
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__35902_SHARP_){return p1__35902_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__35903_SHARP_,p2__35904_SHARP_){return goog.dom.insertChildAt(p1__35903_SHARP_,p2__35904_SHARP_,idx);
}),parent_content,child_content);
return parent_content;
});
/**
* Given a parent and child contents, prepends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.prepend_BANG_ = (function prepend_BANG_(parent_content,child_content){domina.insert_BANG_.call(null,parent_content,child_content,0);
return parent_content;
});
/**
* Given a content and some new content, inserts the new content immediately before the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__35906_SHARP_,p2__35905_SHARP_){return goog.dom.insertSiblingBefore(p2__35905_SHARP_,p1__35906_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__35908_SHARP_,p2__35907_SHARP_){return goog.dom.insertSiblingAfter(p2__35907_SHARP_,p1__35908_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__35910_SHARP_,p2__35909_SHARP_){return goog.dom.replaceNode(p2__35909_SHARP_,p1__35910_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__35915_35919 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__35916_35920 = null;var count__35917_35921 = 0;var i__35918_35922 = 0;while(true){
if((i__35918_35922 < count__35917_35921))
{var n_35923 = cljs.core._nth.call(null,chunk__35916_35920,i__35918_35922);goog.style.setStyle(n_35923,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__35924 = seq__35915_35919;
var G__35925 = chunk__35916_35920;
var G__35926 = count__35917_35921;
var G__35927 = (i__35918_35922 + 1);
seq__35915_35919 = G__35924;
chunk__35916_35920 = G__35925;
count__35917_35921 = G__35926;
i__35918_35922 = G__35927;
continue;
}
} else
{var temp__4092__auto___35928 = cljs.core.seq.call(null,seq__35915_35919);if(temp__4092__auto___35928)
{var seq__35915_35929__$1 = temp__4092__auto___35928;if(cljs.core.chunked_seq_QMARK_.call(null,seq__35915_35929__$1))
{var c__4148__auto___35930 = cljs.core.chunk_first.call(null,seq__35915_35929__$1);{
var G__35931 = cljs.core.chunk_rest.call(null,seq__35915_35929__$1);
var G__35932 = c__4148__auto___35930;
var G__35933 = cljs.core.count.call(null,c__4148__auto___35930);
var G__35934 = 0;
seq__35915_35919 = G__35931;
chunk__35916_35920 = G__35932;
count__35917_35921 = G__35933;
i__35918_35922 = G__35934;
continue;
}
} else
{var n_35935 = cljs.core.first.call(null,seq__35915_35929__$1);goog.style.setStyle(n_35935,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__35936 = cljs.core.next.call(null,seq__35915_35929__$1);
var G__35937 = null;
var G__35938 = 0;
var G__35939 = 0;
seq__35915_35919 = G__35936;
chunk__35916_35920 = G__35937;
count__35917_35921 = G__35938;
i__35918_35922 = G__35939;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__35940){
var content = cljs.core.first(arglist__35940);
arglist__35940 = cljs.core.next(arglist__35940);
var name = cljs.core.first(arglist__35940);
var value = cljs.core.rest(arglist__35940);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__35945_35949 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__35946_35950 = null;var count__35947_35951 = 0;var i__35948_35952 = 0;while(true){
if((i__35948_35952 < count__35947_35951))
{var n_35953 = cljs.core._nth.call(null,chunk__35946_35950,i__35948_35952);n_35953.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__35954 = seq__35945_35949;
var G__35955 = chunk__35946_35950;
var G__35956 = count__35947_35951;
var G__35957 = (i__35948_35952 + 1);
seq__35945_35949 = G__35954;
chunk__35946_35950 = G__35955;
count__35947_35951 = G__35956;
i__35948_35952 = G__35957;
continue;
}
} else
{var temp__4092__auto___35958 = cljs.core.seq.call(null,seq__35945_35949);if(temp__4092__auto___35958)
{var seq__35945_35959__$1 = temp__4092__auto___35958;if(cljs.core.chunked_seq_QMARK_.call(null,seq__35945_35959__$1))
{var c__4148__auto___35960 = cljs.core.chunk_first.call(null,seq__35945_35959__$1);{
var G__35961 = cljs.core.chunk_rest.call(null,seq__35945_35959__$1);
var G__35962 = c__4148__auto___35960;
var G__35963 = cljs.core.count.call(null,c__4148__auto___35960);
var G__35964 = 0;
seq__35945_35949 = G__35961;
chunk__35946_35950 = G__35962;
count__35947_35951 = G__35963;
i__35948_35952 = G__35964;
continue;
}
} else
{var n_35965 = cljs.core.first.call(null,seq__35945_35959__$1);n_35965.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__35966 = cljs.core.next.call(null,seq__35945_35959__$1);
var G__35967 = null;
var G__35968 = 0;
var G__35969 = 0;
seq__35945_35949 = G__35966;
chunk__35946_35950 = G__35967;
count__35947_35951 = G__35968;
i__35948_35952 = G__35969;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__35970){
var content = cljs.core.first(arglist__35970);
arglist__35970 = cljs.core.next(arglist__35970);
var name = cljs.core.first(arglist__35970);
var value = cljs.core.rest(arglist__35970);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__35975_35979 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__35976_35980 = null;var count__35977_35981 = 0;var i__35978_35982 = 0;while(true){
if((i__35978_35982 < count__35977_35981))
{var n_35983 = cljs.core._nth.call(null,chunk__35976_35980,i__35978_35982);n_35983.removeAttribute(cljs.core.name.call(null,name));
{
var G__35984 = seq__35975_35979;
var G__35985 = chunk__35976_35980;
var G__35986 = count__35977_35981;
var G__35987 = (i__35978_35982 + 1);
seq__35975_35979 = G__35984;
chunk__35976_35980 = G__35985;
count__35977_35981 = G__35986;
i__35978_35982 = G__35987;
continue;
}
} else
{var temp__4092__auto___35988 = cljs.core.seq.call(null,seq__35975_35979);if(temp__4092__auto___35988)
{var seq__35975_35989__$1 = temp__4092__auto___35988;if(cljs.core.chunked_seq_QMARK_.call(null,seq__35975_35989__$1))
{var c__4148__auto___35990 = cljs.core.chunk_first.call(null,seq__35975_35989__$1);{
var G__35991 = cljs.core.chunk_rest.call(null,seq__35975_35989__$1);
var G__35992 = c__4148__auto___35990;
var G__35993 = cljs.core.count.call(null,c__4148__auto___35990);
var G__35994 = 0;
seq__35975_35979 = G__35991;
chunk__35976_35980 = G__35992;
count__35977_35981 = G__35993;
i__35978_35982 = G__35994;
continue;
}
} else
{var n_35995 = cljs.core.first.call(null,seq__35975_35989__$1);n_35995.removeAttribute(cljs.core.name.call(null,name));
{
var G__35996 = cljs.core.next.call(null,seq__35975_35989__$1);
var G__35997 = null;
var G__35998 = 0;
var G__35999 = 0;
seq__35975_35979 = G__35996;
chunk__35976_35980 = G__35997;
count__35977_35981 = G__35998;
i__35978_35982 = G__35999;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__36001 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__36001,0,null);var v = cljs.core.nth.call(null,vec__36001,1,null);if(cljs.core.truth_((function (){var and__3394__auto__ = k;if(cljs.core.truth_(and__3394__auto__))
{return v;
} else
{return and__3394__auto__;
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
{if(new cljs.core.Keyword(null,"else","else",1017020587))
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
domina.attrs = (function attrs(content){var node = domina.single_node.call(null,content);var attrs__$1 = node.attributes;return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,(function (p1__36002_SHARP_){var attr = attrs__$1.item(p1__36002_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.call(null,attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
}),cljs.core.range.call(null,attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__36009_36015 = cljs.core.seq.call(null,styles);var chunk__36010_36016 = null;var count__36011_36017 = 0;var i__36012_36018 = 0;while(true){
if((i__36012_36018 < count__36011_36017))
{var vec__36013_36019 = cljs.core._nth.call(null,chunk__36010_36016,i__36012_36018);var name_36020 = cljs.core.nth.call(null,vec__36013_36019,0,null);var value_36021 = cljs.core.nth.call(null,vec__36013_36019,1,null);domina.set_style_BANG_.call(null,content,name_36020,value_36021);
{
var G__36022 = seq__36009_36015;
var G__36023 = chunk__36010_36016;
var G__36024 = count__36011_36017;
var G__36025 = (i__36012_36018 + 1);
seq__36009_36015 = G__36022;
chunk__36010_36016 = G__36023;
count__36011_36017 = G__36024;
i__36012_36018 = G__36025;
continue;
}
} else
{var temp__4092__auto___36026 = cljs.core.seq.call(null,seq__36009_36015);if(temp__4092__auto___36026)
{var seq__36009_36027__$1 = temp__4092__auto___36026;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36009_36027__$1))
{var c__4148__auto___36028 = cljs.core.chunk_first.call(null,seq__36009_36027__$1);{
var G__36029 = cljs.core.chunk_rest.call(null,seq__36009_36027__$1);
var G__36030 = c__4148__auto___36028;
var G__36031 = cljs.core.count.call(null,c__4148__auto___36028);
var G__36032 = 0;
seq__36009_36015 = G__36029;
chunk__36010_36016 = G__36030;
count__36011_36017 = G__36031;
i__36012_36018 = G__36032;
continue;
}
} else
{var vec__36014_36033 = cljs.core.first.call(null,seq__36009_36027__$1);var name_36034 = cljs.core.nth.call(null,vec__36014_36033,0,null);var value_36035 = cljs.core.nth.call(null,vec__36014_36033,1,null);domina.set_style_BANG_.call(null,content,name_36034,value_36035);
{
var G__36036 = cljs.core.next.call(null,seq__36009_36027__$1);
var G__36037 = null;
var G__36038 = 0;
var G__36039 = 0;
seq__36009_36015 = G__36036;
chunk__36010_36016 = G__36037;
count__36011_36017 = G__36038;
i__36012_36018 = G__36039;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__36046_36052 = cljs.core.seq.call(null,attrs);var chunk__36047_36053 = null;var count__36048_36054 = 0;var i__36049_36055 = 0;while(true){
if((i__36049_36055 < count__36048_36054))
{var vec__36050_36056 = cljs.core._nth.call(null,chunk__36047_36053,i__36049_36055);var name_36057 = cljs.core.nth.call(null,vec__36050_36056,0,null);var value_36058 = cljs.core.nth.call(null,vec__36050_36056,1,null);domina.set_attr_BANG_.call(null,content,name_36057,value_36058);
{
var G__36059 = seq__36046_36052;
var G__36060 = chunk__36047_36053;
var G__36061 = count__36048_36054;
var G__36062 = (i__36049_36055 + 1);
seq__36046_36052 = G__36059;
chunk__36047_36053 = G__36060;
count__36048_36054 = G__36061;
i__36049_36055 = G__36062;
continue;
}
} else
{var temp__4092__auto___36063 = cljs.core.seq.call(null,seq__36046_36052);if(temp__4092__auto___36063)
{var seq__36046_36064__$1 = temp__4092__auto___36063;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36046_36064__$1))
{var c__4148__auto___36065 = cljs.core.chunk_first.call(null,seq__36046_36064__$1);{
var G__36066 = cljs.core.chunk_rest.call(null,seq__36046_36064__$1);
var G__36067 = c__4148__auto___36065;
var G__36068 = cljs.core.count.call(null,c__4148__auto___36065);
var G__36069 = 0;
seq__36046_36052 = G__36066;
chunk__36047_36053 = G__36067;
count__36048_36054 = G__36068;
i__36049_36055 = G__36069;
continue;
}
} else
{var vec__36051_36070 = cljs.core.first.call(null,seq__36046_36064__$1);var name_36071 = cljs.core.nth.call(null,vec__36051_36070,0,null);var value_36072 = cljs.core.nth.call(null,vec__36051_36070,1,null);domina.set_attr_BANG_.call(null,content,name_36071,value_36072);
{
var G__36073 = cljs.core.next.call(null,seq__36046_36064__$1);
var G__36074 = null;
var G__36075 = 0;
var G__36076 = 0;
seq__36046_36052 = G__36073;
chunk__36047_36053 = G__36074;
count__36048_36054 = G__36075;
i__36049_36055 = G__36076;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__36081_36085 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__36082_36086 = null;var count__36083_36087 = 0;var i__36084_36088 = 0;while(true){
if((i__36084_36088 < count__36083_36087))
{var node_36089 = cljs.core._nth.call(null,chunk__36082_36086,i__36084_36088);goog.dom.classes.add(node_36089,class$);
{
var G__36090 = seq__36081_36085;
var G__36091 = chunk__36082_36086;
var G__36092 = count__36083_36087;
var G__36093 = (i__36084_36088 + 1);
seq__36081_36085 = G__36090;
chunk__36082_36086 = G__36091;
count__36083_36087 = G__36092;
i__36084_36088 = G__36093;
continue;
}
} else
{var temp__4092__auto___36094 = cljs.core.seq.call(null,seq__36081_36085);if(temp__4092__auto___36094)
{var seq__36081_36095__$1 = temp__4092__auto___36094;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36081_36095__$1))
{var c__4148__auto___36096 = cljs.core.chunk_first.call(null,seq__36081_36095__$1);{
var G__36097 = cljs.core.chunk_rest.call(null,seq__36081_36095__$1);
var G__36098 = c__4148__auto___36096;
var G__36099 = cljs.core.count.call(null,c__4148__auto___36096);
var G__36100 = 0;
seq__36081_36085 = G__36097;
chunk__36082_36086 = G__36098;
count__36083_36087 = G__36099;
i__36084_36088 = G__36100;
continue;
}
} else
{var node_36101 = cljs.core.first.call(null,seq__36081_36095__$1);goog.dom.classes.add(node_36101,class$);
{
var G__36102 = cljs.core.next.call(null,seq__36081_36095__$1);
var G__36103 = null;
var G__36104 = 0;
var G__36105 = 0;
seq__36081_36085 = G__36102;
chunk__36082_36086 = G__36103;
count__36083_36087 = G__36104;
i__36084_36088 = G__36105;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__36110_36114 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__36111_36115 = null;var count__36112_36116 = 0;var i__36113_36117 = 0;while(true){
if((i__36113_36117 < count__36112_36116))
{var node_36118 = cljs.core._nth.call(null,chunk__36111_36115,i__36113_36117);goog.dom.classes.remove(node_36118,class$);
{
var G__36119 = seq__36110_36114;
var G__36120 = chunk__36111_36115;
var G__36121 = count__36112_36116;
var G__36122 = (i__36113_36117 + 1);
seq__36110_36114 = G__36119;
chunk__36111_36115 = G__36120;
count__36112_36116 = G__36121;
i__36113_36117 = G__36122;
continue;
}
} else
{var temp__4092__auto___36123 = cljs.core.seq.call(null,seq__36110_36114);if(temp__4092__auto___36123)
{var seq__36110_36124__$1 = temp__4092__auto___36123;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36110_36124__$1))
{var c__4148__auto___36125 = cljs.core.chunk_first.call(null,seq__36110_36124__$1);{
var G__36126 = cljs.core.chunk_rest.call(null,seq__36110_36124__$1);
var G__36127 = c__4148__auto___36125;
var G__36128 = cljs.core.count.call(null,c__4148__auto___36125);
var G__36129 = 0;
seq__36110_36114 = G__36126;
chunk__36111_36115 = G__36127;
count__36112_36116 = G__36128;
i__36113_36117 = G__36129;
continue;
}
} else
{var node_36130 = cljs.core.first.call(null,seq__36110_36124__$1);goog.dom.classes.remove(node_36130,class$);
{
var G__36131 = cljs.core.next.call(null,seq__36110_36124__$1);
var G__36132 = null;
var G__36133 = 0;
var G__36134 = 0;
seq__36110_36114 = G__36131;
chunk__36111_36115 = G__36132;
count__36112_36116 = G__36133;
i__36113_36117 = G__36134;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__36139_36143 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__36140_36144 = null;var count__36141_36145 = 0;var i__36142_36146 = 0;while(true){
if((i__36142_36146 < count__36141_36145))
{var node_36147 = cljs.core._nth.call(null,chunk__36140_36144,i__36142_36146);goog.dom.classes.toggle(node_36147,class$);
{
var G__36148 = seq__36139_36143;
var G__36149 = chunk__36140_36144;
var G__36150 = count__36141_36145;
var G__36151 = (i__36142_36146 + 1);
seq__36139_36143 = G__36148;
chunk__36140_36144 = G__36149;
count__36141_36145 = G__36150;
i__36142_36146 = G__36151;
continue;
}
} else
{var temp__4092__auto___36152 = cljs.core.seq.call(null,seq__36139_36143);if(temp__4092__auto___36152)
{var seq__36139_36153__$1 = temp__4092__auto___36152;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36139_36153__$1))
{var c__4148__auto___36154 = cljs.core.chunk_first.call(null,seq__36139_36153__$1);{
var G__36155 = cljs.core.chunk_rest.call(null,seq__36139_36153__$1);
var G__36156 = c__4148__auto___36154;
var G__36157 = cljs.core.count.call(null,c__4148__auto___36154);
var G__36158 = 0;
seq__36139_36143 = G__36155;
chunk__36140_36144 = G__36156;
count__36141_36145 = G__36157;
i__36142_36146 = G__36158;
continue;
}
} else
{var node_36159 = cljs.core.first.call(null,seq__36139_36153__$1);goog.dom.classes.toggle(node_36159,class$);
{
var G__36160 = cljs.core.next.call(null,seq__36139_36153__$1);
var G__36161 = null;
var G__36162 = 0;
var G__36163 = 0;
seq__36139_36143 = G__36160;
chunk__36140_36144 = G__36161;
count__36141_36145 = G__36162;
i__36142_36146 = G__36163;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_36172__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__36168_36173 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__36169_36174 = null;var count__36170_36175 = 0;var i__36171_36176 = 0;while(true){
if((i__36171_36176 < count__36170_36175))
{var node_36177 = cljs.core._nth.call(null,chunk__36169_36174,i__36171_36176);goog.dom.classes.set(node_36177,classes_36172__$1);
{
var G__36178 = seq__36168_36173;
var G__36179 = chunk__36169_36174;
var G__36180 = count__36170_36175;
var G__36181 = (i__36171_36176 + 1);
seq__36168_36173 = G__36178;
chunk__36169_36174 = G__36179;
count__36170_36175 = G__36180;
i__36171_36176 = G__36181;
continue;
}
} else
{var temp__4092__auto___36182 = cljs.core.seq.call(null,seq__36168_36173);if(temp__4092__auto___36182)
{var seq__36168_36183__$1 = temp__4092__auto___36182;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36168_36183__$1))
{var c__4148__auto___36184 = cljs.core.chunk_first.call(null,seq__36168_36183__$1);{
var G__36185 = cljs.core.chunk_rest.call(null,seq__36168_36183__$1);
var G__36186 = c__4148__auto___36184;
var G__36187 = cljs.core.count.call(null,c__4148__auto___36184);
var G__36188 = 0;
seq__36168_36173 = G__36185;
chunk__36169_36174 = G__36186;
count__36170_36175 = G__36187;
i__36171_36176 = G__36188;
continue;
}
} else
{var node_36189 = cljs.core.first.call(null,seq__36168_36183__$1);goog.dom.classes.set(node_36189,classes_36172__$1);
{
var G__36190 = cljs.core.next.call(null,seq__36168_36183__$1);
var G__36191 = null;
var G__36192 = 0;
var G__36193 = 0;
seq__36168_36173 = G__36190;
chunk__36169_36174 = G__36191;
count__36170_36175 = G__36192;
i__36171_36176 = G__36193;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__36198_36202 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__36199_36203 = null;var count__36200_36204 = 0;var i__36201_36205 = 0;while(true){
if((i__36201_36205 < count__36200_36204))
{var node_36206 = cljs.core._nth.call(null,chunk__36199_36203,i__36201_36205);goog.dom.setTextContent(node_36206,value);
{
var G__36207 = seq__36198_36202;
var G__36208 = chunk__36199_36203;
var G__36209 = count__36200_36204;
var G__36210 = (i__36201_36205 + 1);
seq__36198_36202 = G__36207;
chunk__36199_36203 = G__36208;
count__36200_36204 = G__36209;
i__36201_36205 = G__36210;
continue;
}
} else
{var temp__4092__auto___36211 = cljs.core.seq.call(null,seq__36198_36202);if(temp__4092__auto___36211)
{var seq__36198_36212__$1 = temp__4092__auto___36211;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36198_36212__$1))
{var c__4148__auto___36213 = cljs.core.chunk_first.call(null,seq__36198_36212__$1);{
var G__36214 = cljs.core.chunk_rest.call(null,seq__36198_36212__$1);
var G__36215 = c__4148__auto___36213;
var G__36216 = cljs.core.count.call(null,c__4148__auto___36213);
var G__36217 = 0;
seq__36198_36202 = G__36214;
chunk__36199_36203 = G__36215;
count__36200_36204 = G__36216;
i__36201_36205 = G__36217;
continue;
}
} else
{var node_36218 = cljs.core.first.call(null,seq__36198_36212__$1);goog.dom.setTextContent(node_36218,value);
{
var G__36219 = cljs.core.next.call(null,seq__36198_36212__$1);
var G__36220 = null;
var G__36221 = 0;
var G__36222 = 0;
seq__36198_36202 = G__36219;
chunk__36199_36203 = G__36220;
count__36200_36204 = G__36221;
i__36201_36205 = G__36222;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__36227_36231 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__36228_36232 = null;var count__36229_36233 = 0;var i__36230_36234 = 0;while(true){
if((i__36230_36234 < count__36229_36233))
{var node_36235 = cljs.core._nth.call(null,chunk__36228_36232,i__36230_36234);goog.dom.forms.setValue(node_36235,value);
{
var G__36236 = seq__36227_36231;
var G__36237 = chunk__36228_36232;
var G__36238 = count__36229_36233;
var G__36239 = (i__36230_36234 + 1);
seq__36227_36231 = G__36236;
chunk__36228_36232 = G__36237;
count__36229_36233 = G__36238;
i__36230_36234 = G__36239;
continue;
}
} else
{var temp__4092__auto___36240 = cljs.core.seq.call(null,seq__36227_36231);if(temp__4092__auto___36240)
{var seq__36227_36241__$1 = temp__4092__auto___36240;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36227_36241__$1))
{var c__4148__auto___36242 = cljs.core.chunk_first.call(null,seq__36227_36241__$1);{
var G__36243 = cljs.core.chunk_rest.call(null,seq__36227_36241__$1);
var G__36244 = c__4148__auto___36242;
var G__36245 = cljs.core.count.call(null,c__4148__auto___36242);
var G__36246 = 0;
seq__36227_36231 = G__36243;
chunk__36228_36232 = G__36244;
count__36229_36233 = G__36245;
i__36230_36234 = G__36246;
continue;
}
} else
{var node_36247 = cljs.core.first.call(null,seq__36227_36241__$1);goog.dom.forms.setValue(node_36247,value);
{
var G__36248 = cljs.core.next.call(null,seq__36227_36241__$1);
var G__36249 = null;
var G__36250 = 0;
var G__36251 = 0;
seq__36227_36231 = G__36248;
chunk__36228_36232 = G__36249;
count__36229_36233 = G__36250;
i__36230_36234 = G__36251;
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
domina.set_inner_html_BANG_ = (function set_inner_html_BANG_(content,html_string){var allows_inner_html_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_no_inner_html,html_string));var leading_whitespace_QMARK_ = cljs.core.re_find.call(null,domina.re_leading_whitespace,html_string);var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html_string)))].join('').toLowerCase();var special_tag_QMARK_ = cljs.core.contains_QMARK_.call(null,domina.wrap_map,tag_name);if(cljs.core.truth_((function (){var and__3394__auto__ = allows_inner_html_QMARK_;if(and__3394__auto__)
{var and__3394__auto____$1 = (function (){var or__3406__auto__ = domina.support.leading_whitespace_QMARK_;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return cljs.core.not.call(null,leading_whitespace_QMARK_);
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
{var value_36262 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__36258_36263 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__36259_36264 = null;var count__36260_36265 = 0;var i__36261_36266 = 0;while(true){
if((i__36261_36266 < count__36260_36265))
{var node_36267 = cljs.core._nth.call(null,chunk__36259_36264,i__36261_36266);node_36267.innerHTML = value_36262;
{
var G__36268 = seq__36258_36263;
var G__36269 = chunk__36259_36264;
var G__36270 = count__36260_36265;
var G__36271 = (i__36261_36266 + 1);
seq__36258_36263 = G__36268;
chunk__36259_36264 = G__36269;
count__36260_36265 = G__36270;
i__36261_36266 = G__36271;
continue;
}
} else
{var temp__4092__auto___36272 = cljs.core.seq.call(null,seq__36258_36263);if(temp__4092__auto___36272)
{var seq__36258_36273__$1 = temp__4092__auto___36272;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36258_36273__$1))
{var c__4148__auto___36274 = cljs.core.chunk_first.call(null,seq__36258_36273__$1);{
var G__36275 = cljs.core.chunk_rest.call(null,seq__36258_36273__$1);
var G__36276 = c__4148__auto___36274;
var G__36277 = cljs.core.count.call(null,c__4148__auto___36274);
var G__36278 = 0;
seq__36258_36263 = G__36275;
chunk__36259_36264 = G__36276;
count__36260_36265 = G__36277;
i__36261_36266 = G__36278;
continue;
}
} else
{var node_36279 = cljs.core.first.call(null,seq__36258_36273__$1);node_36279.innerHTML = value_36262;
{
var G__36280 = cljs.core.next.call(null,seq__36258_36273__$1);
var G__36281 = null;
var G__36282 = 0;
var G__36283 = 0;
seq__36258_36263 = G__36280;
chunk__36259_36264 = G__36281;
count__36260_36265 = G__36282;
i__36261_36266 = G__36283;
continue;
}
}
} else
{}
}
break;
}
}catch (e36257){if((e36257 instanceof Error))
{var e_36284 = e36257;domina.replace_children_BANG_.call(null,content,value_36262);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e36257;
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
var get_data__3 = (function (node,key,bubble){var m = domina.single_node.call(null,node).__domina_data;var value = (cljs.core.truth_(m)?cljs.core.get.call(null,m,key):null);if(cljs.core.truth_((function (){var and__3394__auto__ = bubble;if(cljs.core.truth_(and__3394__auto__))
{return (value == null);
} else
{return and__3394__auto__;
}
})()))
{var temp__4092__auto__ = domina.single_node.call(null,node).parentNode;if(cljs.core.truth_(temp__4092__auto__))
{var parent = temp__4092__auto__;return get_data.call(null,parent,key,true);
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
domina.set_data_BANG_ = (function set_data_BANG_(node,key,value){var m = (function (){var or__3406__auto__ = domina.single_node.call(null,node).__domina_data;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__36291_36295 = cljs.core.seq.call(null,children);var chunk__36292_36296 = null;var count__36293_36297 = 0;var i__36294_36298 = 0;while(true){
if((i__36294_36298 < count__36293_36297))
{var child_36299 = cljs.core._nth.call(null,chunk__36292_36296,i__36294_36298);frag.appendChild(child_36299);
{
var G__36300 = seq__36291_36295;
var G__36301 = chunk__36292_36296;
var G__36302 = count__36293_36297;
var G__36303 = (i__36294_36298 + 1);
seq__36291_36295 = G__36300;
chunk__36292_36296 = G__36301;
count__36293_36297 = G__36302;
i__36294_36298 = G__36303;
continue;
}
} else
{var temp__4092__auto___36304 = cljs.core.seq.call(null,seq__36291_36295);if(temp__4092__auto___36304)
{var seq__36291_36305__$1 = temp__4092__auto___36304;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36291_36305__$1))
{var c__4148__auto___36306 = cljs.core.chunk_first.call(null,seq__36291_36305__$1);{
var G__36307 = cljs.core.chunk_rest.call(null,seq__36291_36305__$1);
var G__36308 = c__4148__auto___36306;
var G__36309 = cljs.core.count.call(null,c__4148__auto___36306);
var G__36310 = 0;
seq__36291_36295 = G__36307;
chunk__36292_36296 = G__36308;
count__36293_36297 = G__36309;
i__36294_36298 = G__36310;
continue;
}
} else
{var child_36311 = cljs.core.first.call(null,seq__36291_36305__$1);frag.appendChild(child_36311);
{
var G__36312 = cljs.core.next.call(null,seq__36291_36305__$1);
var G__36313 = null;
var G__36314 = 0;
var G__36315 = 0;
seq__36291_36295 = G__36312;
chunk__36292_36296 = G__36313;
count__36293_36297 = G__36314;
i__36294_36298 = G__36315;
continue;
}
}
} else
{}
}
break;
}
return frag;
})();var other_children = cljs.core.doall.call(null,cljs.core.repeatedly.call(null,(cljs.core.count.call(null,parents) - 1),((function (parents,children,first_child){
return (function (){return first_child.cloneNode(true);
});})(parents,children,first_child))
));if(cljs.core.seq.call(null,parents))
{f.call(null,cljs.core.first.call(null,parents),first_child);
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__36285_SHARP_,p2__36286_SHARP_){return f.call(null,p1__36285_SHARP_,p2__36286_SHARP_);
}),cljs.core.rest.call(null,parents),other_children));
} else
{return null;
}
});
domina.lazy_nl_via_item = (function() {
var lazy_nl_via_item = null;
var lazy_nl_via_item__1 = (function (nl){return lazy_nl_via_item.call(null,nl,0);
});
var lazy_nl_via_item__2 = (function (nl,n){if((n < nl.length))
{return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons.call(null,nl.item(n),lazy_nl_via_item.call(null,nl,(n + 1)));
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
var lazy_nl_via_array_ref__1 = (function (nl){return lazy_nl_via_array_ref.call(null,nl,0);
});
var lazy_nl_via_array_ref__2 = (function (nl,n){if((n < nl.length))
{return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons.call(null,(nl[n]),lazy_nl_via_array_ref.call(null,nl,(n + 1)));
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
domina.array_like_QMARK_ = (function array_like_QMARK_(obj){var and__3394__auto__ = obj;if(cljs.core.truth_(and__3394__auto__))
{var and__3394__auto____$1 = cljs.core.not.call(null,obj.nodeName);if(and__3394__auto____$1)
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
{if((function (){var G__36317 = list_thing;if(G__36317)
{var bit__4050__auto__ = (G__36317.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__36317.cljs$core$ISeqable$))
{return true;
} else
{if((!G__36317.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__36317);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__36317);
}
})())
{return cljs.core.seq.call(null,list_thing);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,list_thing)))
{return domina.lazy_nodelist.call(null,list_thing);
} else
{if(new cljs.core.Keyword(null,"default","default",2558708147))
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
{if((function (){var G__36318 = content;if(G__36318)
{var bit__4050__auto__ = (G__36318.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__36318.cljs$core$ISeqable$))
{return true;
} else
{if((!G__36318.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__36318);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__36318);
}
})())
{return cljs.core.seq.call(null,content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content)))
{return domina.lazy_nodelist.call(null,content);
} else
{if(new cljs.core.Keyword(null,"default","default",2558708147))
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
{if((function (){var G__36319 = content;if(G__36319)
{var bit__4050__auto__ = (G__36319.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__36319.cljs$core$ISeqable$))
{return true;
} else
{if((!G__36319.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__36319);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__36319);
}
})())
{return cljs.core.first.call(null,content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content)))
{return content.item(0);
} else
{if(new cljs.core.Keyword(null,"default","default",2558708147))
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
