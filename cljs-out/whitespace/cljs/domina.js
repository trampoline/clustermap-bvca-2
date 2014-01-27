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
var opt_wrapper_35863 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_35864 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<table>","</table>"], null);var cell_wrapper_35865 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["col",new cljs.core.Keyword(null,"default","default",2558708147),"tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,"",""], null),table_section_wrapper_35864,table_section_wrapper_35864,opt_wrapper_35863,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<fieldset>","</fieldset>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<map>","</map>"], null),cell_wrapper_35865,table_section_wrapper_35864,cell_wrapper_35865,opt_wrapper_35863,table_section_wrapper_35864,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody>","</tbody></table>"], null),table_section_wrapper_35864]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3394__auto__ = div.firstChild;if(cljs.core.truth_(and__3394__auto__))
{return div.firstChild.childNodes;
} else
{return and__3394__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__35870 = cljs.core.seq.call(null,tbody);var chunk__35871 = null;var count__35872 = 0;var i__35873 = 0;while(true){
if((i__35873 < count__35872))
{var child = cljs.core._nth.call(null,chunk__35871,i__35873);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__35874 = seq__35870;
var G__35875 = chunk__35871;
var G__35876 = count__35872;
var G__35877 = (i__35873 + 1);
seq__35870 = G__35874;
chunk__35871 = G__35875;
count__35872 = G__35876;
i__35873 = G__35877;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__35870);if(temp__4092__auto__)
{var seq__35870__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__35870__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__35870__$1);{
var G__35878 = cljs.core.chunk_rest.call(null,seq__35870__$1);
var G__35879 = c__4148__auto__;
var G__35880 = cljs.core.count.call(null,c__4148__auto__);
var G__35881 = 0;
seq__35870 = G__35878;
chunk__35871 = G__35879;
count__35872 = G__35880;
i__35873 = G__35881;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__35870__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__35882 = cljs.core.next.call(null,seq__35870__$1);
var G__35883 = null;
var G__35884 = 0;
var G__35885 = 0;
seq__35870 = G__35882;
chunk__35871 = G__35883;
count__35872 = G__35884;
i__35873 = G__35885;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))].join('').toLowerCase();var vec__35887 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__35887,0,null);var start_wrap = cljs.core.nth.call(null,vec__35887,1,null);var end_wrap = cljs.core.nth.call(null,vec__35887,2,null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');
return div;
})();var level = depth;while(true){
if((level > 0))
{{
var G__35888 = wrapper.lastChild;
var G__35889 = (level - 1);
wrapper = G__35888;
level = G__35889;
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
domina.DomContent = (function (){var obj35891 = {};return obj35891;
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
log_debug.cljs$lang$applyTo = (function (arglist__35892){
var mesg = cljs.core.seq(arglist__35892);
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
log.cljs$lang$applyTo = (function (arglist__35893){
var mesg = cljs.core.seq(arglist__35893);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__35894){
var contents = cljs.core.seq(arglist__35894);
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
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__35895_SHARP_){return p1__35895_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__35896_SHARP_,p2__35897_SHARP_){return goog.dom.insertChildAt(p1__35896_SHARP_,p2__35897_SHARP_,idx);
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__35899_SHARP_,p2__35898_SHARP_){return goog.dom.insertSiblingBefore(p2__35898_SHARP_,p1__35899_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__35901_SHARP_,p2__35900_SHARP_){return goog.dom.insertSiblingAfter(p2__35900_SHARP_,p1__35901_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__35903_SHARP_,p2__35902_SHARP_){return goog.dom.replaceNode(p2__35902_SHARP_,p1__35903_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__35908_35912 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__35909_35913 = null;var count__35910_35914 = 0;var i__35911_35915 = 0;while(true){
if((i__35911_35915 < count__35910_35914))
{var n_35916 = cljs.core._nth.call(null,chunk__35909_35913,i__35911_35915);goog.style.setStyle(n_35916,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__35917 = seq__35908_35912;
var G__35918 = chunk__35909_35913;
var G__35919 = count__35910_35914;
var G__35920 = (i__35911_35915 + 1);
seq__35908_35912 = G__35917;
chunk__35909_35913 = G__35918;
count__35910_35914 = G__35919;
i__35911_35915 = G__35920;
continue;
}
} else
{var temp__4092__auto___35921 = cljs.core.seq.call(null,seq__35908_35912);if(temp__4092__auto___35921)
{var seq__35908_35922__$1 = temp__4092__auto___35921;if(cljs.core.chunked_seq_QMARK_.call(null,seq__35908_35922__$1))
{var c__4148__auto___35923 = cljs.core.chunk_first.call(null,seq__35908_35922__$1);{
var G__35924 = cljs.core.chunk_rest.call(null,seq__35908_35922__$1);
var G__35925 = c__4148__auto___35923;
var G__35926 = cljs.core.count.call(null,c__4148__auto___35923);
var G__35927 = 0;
seq__35908_35912 = G__35924;
chunk__35909_35913 = G__35925;
count__35910_35914 = G__35926;
i__35911_35915 = G__35927;
continue;
}
} else
{var n_35928 = cljs.core.first.call(null,seq__35908_35922__$1);goog.style.setStyle(n_35928,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__35929 = cljs.core.next.call(null,seq__35908_35922__$1);
var G__35930 = null;
var G__35931 = 0;
var G__35932 = 0;
seq__35908_35912 = G__35929;
chunk__35909_35913 = G__35930;
count__35910_35914 = G__35931;
i__35911_35915 = G__35932;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__35933){
var content = cljs.core.first(arglist__35933);
arglist__35933 = cljs.core.next(arglist__35933);
var name = cljs.core.first(arglist__35933);
var value = cljs.core.rest(arglist__35933);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__35938_35942 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__35939_35943 = null;var count__35940_35944 = 0;var i__35941_35945 = 0;while(true){
if((i__35941_35945 < count__35940_35944))
{var n_35946 = cljs.core._nth.call(null,chunk__35939_35943,i__35941_35945);n_35946.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__35947 = seq__35938_35942;
var G__35948 = chunk__35939_35943;
var G__35949 = count__35940_35944;
var G__35950 = (i__35941_35945 + 1);
seq__35938_35942 = G__35947;
chunk__35939_35943 = G__35948;
count__35940_35944 = G__35949;
i__35941_35945 = G__35950;
continue;
}
} else
{var temp__4092__auto___35951 = cljs.core.seq.call(null,seq__35938_35942);if(temp__4092__auto___35951)
{var seq__35938_35952__$1 = temp__4092__auto___35951;if(cljs.core.chunked_seq_QMARK_.call(null,seq__35938_35952__$1))
{var c__4148__auto___35953 = cljs.core.chunk_first.call(null,seq__35938_35952__$1);{
var G__35954 = cljs.core.chunk_rest.call(null,seq__35938_35952__$1);
var G__35955 = c__4148__auto___35953;
var G__35956 = cljs.core.count.call(null,c__4148__auto___35953);
var G__35957 = 0;
seq__35938_35942 = G__35954;
chunk__35939_35943 = G__35955;
count__35940_35944 = G__35956;
i__35941_35945 = G__35957;
continue;
}
} else
{var n_35958 = cljs.core.first.call(null,seq__35938_35952__$1);n_35958.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__35959 = cljs.core.next.call(null,seq__35938_35952__$1);
var G__35960 = null;
var G__35961 = 0;
var G__35962 = 0;
seq__35938_35942 = G__35959;
chunk__35939_35943 = G__35960;
count__35940_35944 = G__35961;
i__35941_35945 = G__35962;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__35963){
var content = cljs.core.first(arglist__35963);
arglist__35963 = cljs.core.next(arglist__35963);
var name = cljs.core.first(arglist__35963);
var value = cljs.core.rest(arglist__35963);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__35968_35972 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__35969_35973 = null;var count__35970_35974 = 0;var i__35971_35975 = 0;while(true){
if((i__35971_35975 < count__35970_35974))
{var n_35976 = cljs.core._nth.call(null,chunk__35969_35973,i__35971_35975);n_35976.removeAttribute(cljs.core.name.call(null,name));
{
var G__35977 = seq__35968_35972;
var G__35978 = chunk__35969_35973;
var G__35979 = count__35970_35974;
var G__35980 = (i__35971_35975 + 1);
seq__35968_35972 = G__35977;
chunk__35969_35973 = G__35978;
count__35970_35974 = G__35979;
i__35971_35975 = G__35980;
continue;
}
} else
{var temp__4092__auto___35981 = cljs.core.seq.call(null,seq__35968_35972);if(temp__4092__auto___35981)
{var seq__35968_35982__$1 = temp__4092__auto___35981;if(cljs.core.chunked_seq_QMARK_.call(null,seq__35968_35982__$1))
{var c__4148__auto___35983 = cljs.core.chunk_first.call(null,seq__35968_35982__$1);{
var G__35984 = cljs.core.chunk_rest.call(null,seq__35968_35982__$1);
var G__35985 = c__4148__auto___35983;
var G__35986 = cljs.core.count.call(null,c__4148__auto___35983);
var G__35987 = 0;
seq__35968_35972 = G__35984;
chunk__35969_35973 = G__35985;
count__35970_35974 = G__35986;
i__35971_35975 = G__35987;
continue;
}
} else
{var n_35988 = cljs.core.first.call(null,seq__35968_35982__$1);n_35988.removeAttribute(cljs.core.name.call(null,name));
{
var G__35989 = cljs.core.next.call(null,seq__35968_35982__$1);
var G__35990 = null;
var G__35991 = 0;
var G__35992 = 0;
seq__35968_35972 = G__35989;
chunk__35969_35973 = G__35990;
count__35970_35974 = G__35991;
i__35971_35975 = G__35992;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__35994 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__35994,0,null);var v = cljs.core.nth.call(null,vec__35994,1,null);if(cljs.core.truth_((function (){var and__3394__auto__ = k;if(cljs.core.truth_(and__3394__auto__))
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
domina.attrs = (function attrs(content){var node = domina.single_node.call(null,content);var attrs__$1 = node.attributes;return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,(function (p1__35995_SHARP_){var attr = attrs__$1.item(p1__35995_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.call(null,attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
}),cljs.core.range.call(null,attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__36002_36008 = cljs.core.seq.call(null,styles);var chunk__36003_36009 = null;var count__36004_36010 = 0;var i__36005_36011 = 0;while(true){
if((i__36005_36011 < count__36004_36010))
{var vec__36006_36012 = cljs.core._nth.call(null,chunk__36003_36009,i__36005_36011);var name_36013 = cljs.core.nth.call(null,vec__36006_36012,0,null);var value_36014 = cljs.core.nth.call(null,vec__36006_36012,1,null);domina.set_style_BANG_.call(null,content,name_36013,value_36014);
{
var G__36015 = seq__36002_36008;
var G__36016 = chunk__36003_36009;
var G__36017 = count__36004_36010;
var G__36018 = (i__36005_36011 + 1);
seq__36002_36008 = G__36015;
chunk__36003_36009 = G__36016;
count__36004_36010 = G__36017;
i__36005_36011 = G__36018;
continue;
}
} else
{var temp__4092__auto___36019 = cljs.core.seq.call(null,seq__36002_36008);if(temp__4092__auto___36019)
{var seq__36002_36020__$1 = temp__4092__auto___36019;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36002_36020__$1))
{var c__4148__auto___36021 = cljs.core.chunk_first.call(null,seq__36002_36020__$1);{
var G__36022 = cljs.core.chunk_rest.call(null,seq__36002_36020__$1);
var G__36023 = c__4148__auto___36021;
var G__36024 = cljs.core.count.call(null,c__4148__auto___36021);
var G__36025 = 0;
seq__36002_36008 = G__36022;
chunk__36003_36009 = G__36023;
count__36004_36010 = G__36024;
i__36005_36011 = G__36025;
continue;
}
} else
{var vec__36007_36026 = cljs.core.first.call(null,seq__36002_36020__$1);var name_36027 = cljs.core.nth.call(null,vec__36007_36026,0,null);var value_36028 = cljs.core.nth.call(null,vec__36007_36026,1,null);domina.set_style_BANG_.call(null,content,name_36027,value_36028);
{
var G__36029 = cljs.core.next.call(null,seq__36002_36020__$1);
var G__36030 = null;
var G__36031 = 0;
var G__36032 = 0;
seq__36002_36008 = G__36029;
chunk__36003_36009 = G__36030;
count__36004_36010 = G__36031;
i__36005_36011 = G__36032;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__36039_36045 = cljs.core.seq.call(null,attrs);var chunk__36040_36046 = null;var count__36041_36047 = 0;var i__36042_36048 = 0;while(true){
if((i__36042_36048 < count__36041_36047))
{var vec__36043_36049 = cljs.core._nth.call(null,chunk__36040_36046,i__36042_36048);var name_36050 = cljs.core.nth.call(null,vec__36043_36049,0,null);var value_36051 = cljs.core.nth.call(null,vec__36043_36049,1,null);domina.set_attr_BANG_.call(null,content,name_36050,value_36051);
{
var G__36052 = seq__36039_36045;
var G__36053 = chunk__36040_36046;
var G__36054 = count__36041_36047;
var G__36055 = (i__36042_36048 + 1);
seq__36039_36045 = G__36052;
chunk__36040_36046 = G__36053;
count__36041_36047 = G__36054;
i__36042_36048 = G__36055;
continue;
}
} else
{var temp__4092__auto___36056 = cljs.core.seq.call(null,seq__36039_36045);if(temp__4092__auto___36056)
{var seq__36039_36057__$1 = temp__4092__auto___36056;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36039_36057__$1))
{var c__4148__auto___36058 = cljs.core.chunk_first.call(null,seq__36039_36057__$1);{
var G__36059 = cljs.core.chunk_rest.call(null,seq__36039_36057__$1);
var G__36060 = c__4148__auto___36058;
var G__36061 = cljs.core.count.call(null,c__4148__auto___36058);
var G__36062 = 0;
seq__36039_36045 = G__36059;
chunk__36040_36046 = G__36060;
count__36041_36047 = G__36061;
i__36042_36048 = G__36062;
continue;
}
} else
{var vec__36044_36063 = cljs.core.first.call(null,seq__36039_36057__$1);var name_36064 = cljs.core.nth.call(null,vec__36044_36063,0,null);var value_36065 = cljs.core.nth.call(null,vec__36044_36063,1,null);domina.set_attr_BANG_.call(null,content,name_36064,value_36065);
{
var G__36066 = cljs.core.next.call(null,seq__36039_36057__$1);
var G__36067 = null;
var G__36068 = 0;
var G__36069 = 0;
seq__36039_36045 = G__36066;
chunk__36040_36046 = G__36067;
count__36041_36047 = G__36068;
i__36042_36048 = G__36069;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__36074_36078 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__36075_36079 = null;var count__36076_36080 = 0;var i__36077_36081 = 0;while(true){
if((i__36077_36081 < count__36076_36080))
{var node_36082 = cljs.core._nth.call(null,chunk__36075_36079,i__36077_36081);goog.dom.classes.add(node_36082,class$);
{
var G__36083 = seq__36074_36078;
var G__36084 = chunk__36075_36079;
var G__36085 = count__36076_36080;
var G__36086 = (i__36077_36081 + 1);
seq__36074_36078 = G__36083;
chunk__36075_36079 = G__36084;
count__36076_36080 = G__36085;
i__36077_36081 = G__36086;
continue;
}
} else
{var temp__4092__auto___36087 = cljs.core.seq.call(null,seq__36074_36078);if(temp__4092__auto___36087)
{var seq__36074_36088__$1 = temp__4092__auto___36087;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36074_36088__$1))
{var c__4148__auto___36089 = cljs.core.chunk_first.call(null,seq__36074_36088__$1);{
var G__36090 = cljs.core.chunk_rest.call(null,seq__36074_36088__$1);
var G__36091 = c__4148__auto___36089;
var G__36092 = cljs.core.count.call(null,c__4148__auto___36089);
var G__36093 = 0;
seq__36074_36078 = G__36090;
chunk__36075_36079 = G__36091;
count__36076_36080 = G__36092;
i__36077_36081 = G__36093;
continue;
}
} else
{var node_36094 = cljs.core.first.call(null,seq__36074_36088__$1);goog.dom.classes.add(node_36094,class$);
{
var G__36095 = cljs.core.next.call(null,seq__36074_36088__$1);
var G__36096 = null;
var G__36097 = 0;
var G__36098 = 0;
seq__36074_36078 = G__36095;
chunk__36075_36079 = G__36096;
count__36076_36080 = G__36097;
i__36077_36081 = G__36098;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__36103_36107 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__36104_36108 = null;var count__36105_36109 = 0;var i__36106_36110 = 0;while(true){
if((i__36106_36110 < count__36105_36109))
{var node_36111 = cljs.core._nth.call(null,chunk__36104_36108,i__36106_36110);goog.dom.classes.remove(node_36111,class$);
{
var G__36112 = seq__36103_36107;
var G__36113 = chunk__36104_36108;
var G__36114 = count__36105_36109;
var G__36115 = (i__36106_36110 + 1);
seq__36103_36107 = G__36112;
chunk__36104_36108 = G__36113;
count__36105_36109 = G__36114;
i__36106_36110 = G__36115;
continue;
}
} else
{var temp__4092__auto___36116 = cljs.core.seq.call(null,seq__36103_36107);if(temp__4092__auto___36116)
{var seq__36103_36117__$1 = temp__4092__auto___36116;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36103_36117__$1))
{var c__4148__auto___36118 = cljs.core.chunk_first.call(null,seq__36103_36117__$1);{
var G__36119 = cljs.core.chunk_rest.call(null,seq__36103_36117__$1);
var G__36120 = c__4148__auto___36118;
var G__36121 = cljs.core.count.call(null,c__4148__auto___36118);
var G__36122 = 0;
seq__36103_36107 = G__36119;
chunk__36104_36108 = G__36120;
count__36105_36109 = G__36121;
i__36106_36110 = G__36122;
continue;
}
} else
{var node_36123 = cljs.core.first.call(null,seq__36103_36117__$1);goog.dom.classes.remove(node_36123,class$);
{
var G__36124 = cljs.core.next.call(null,seq__36103_36117__$1);
var G__36125 = null;
var G__36126 = 0;
var G__36127 = 0;
seq__36103_36107 = G__36124;
chunk__36104_36108 = G__36125;
count__36105_36109 = G__36126;
i__36106_36110 = G__36127;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__36132_36136 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__36133_36137 = null;var count__36134_36138 = 0;var i__36135_36139 = 0;while(true){
if((i__36135_36139 < count__36134_36138))
{var node_36140 = cljs.core._nth.call(null,chunk__36133_36137,i__36135_36139);goog.dom.classes.toggle(node_36140,class$);
{
var G__36141 = seq__36132_36136;
var G__36142 = chunk__36133_36137;
var G__36143 = count__36134_36138;
var G__36144 = (i__36135_36139 + 1);
seq__36132_36136 = G__36141;
chunk__36133_36137 = G__36142;
count__36134_36138 = G__36143;
i__36135_36139 = G__36144;
continue;
}
} else
{var temp__4092__auto___36145 = cljs.core.seq.call(null,seq__36132_36136);if(temp__4092__auto___36145)
{var seq__36132_36146__$1 = temp__4092__auto___36145;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36132_36146__$1))
{var c__4148__auto___36147 = cljs.core.chunk_first.call(null,seq__36132_36146__$1);{
var G__36148 = cljs.core.chunk_rest.call(null,seq__36132_36146__$1);
var G__36149 = c__4148__auto___36147;
var G__36150 = cljs.core.count.call(null,c__4148__auto___36147);
var G__36151 = 0;
seq__36132_36136 = G__36148;
chunk__36133_36137 = G__36149;
count__36134_36138 = G__36150;
i__36135_36139 = G__36151;
continue;
}
} else
{var node_36152 = cljs.core.first.call(null,seq__36132_36146__$1);goog.dom.classes.toggle(node_36152,class$);
{
var G__36153 = cljs.core.next.call(null,seq__36132_36146__$1);
var G__36154 = null;
var G__36155 = 0;
var G__36156 = 0;
seq__36132_36136 = G__36153;
chunk__36133_36137 = G__36154;
count__36134_36138 = G__36155;
i__36135_36139 = G__36156;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_36165__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__36161_36166 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__36162_36167 = null;var count__36163_36168 = 0;var i__36164_36169 = 0;while(true){
if((i__36164_36169 < count__36163_36168))
{var node_36170 = cljs.core._nth.call(null,chunk__36162_36167,i__36164_36169);goog.dom.classes.set(node_36170,classes_36165__$1);
{
var G__36171 = seq__36161_36166;
var G__36172 = chunk__36162_36167;
var G__36173 = count__36163_36168;
var G__36174 = (i__36164_36169 + 1);
seq__36161_36166 = G__36171;
chunk__36162_36167 = G__36172;
count__36163_36168 = G__36173;
i__36164_36169 = G__36174;
continue;
}
} else
{var temp__4092__auto___36175 = cljs.core.seq.call(null,seq__36161_36166);if(temp__4092__auto___36175)
{var seq__36161_36176__$1 = temp__4092__auto___36175;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36161_36176__$1))
{var c__4148__auto___36177 = cljs.core.chunk_first.call(null,seq__36161_36176__$1);{
var G__36178 = cljs.core.chunk_rest.call(null,seq__36161_36176__$1);
var G__36179 = c__4148__auto___36177;
var G__36180 = cljs.core.count.call(null,c__4148__auto___36177);
var G__36181 = 0;
seq__36161_36166 = G__36178;
chunk__36162_36167 = G__36179;
count__36163_36168 = G__36180;
i__36164_36169 = G__36181;
continue;
}
} else
{var node_36182 = cljs.core.first.call(null,seq__36161_36176__$1);goog.dom.classes.set(node_36182,classes_36165__$1);
{
var G__36183 = cljs.core.next.call(null,seq__36161_36176__$1);
var G__36184 = null;
var G__36185 = 0;
var G__36186 = 0;
seq__36161_36166 = G__36183;
chunk__36162_36167 = G__36184;
count__36163_36168 = G__36185;
i__36164_36169 = G__36186;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__36191_36195 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__36192_36196 = null;var count__36193_36197 = 0;var i__36194_36198 = 0;while(true){
if((i__36194_36198 < count__36193_36197))
{var node_36199 = cljs.core._nth.call(null,chunk__36192_36196,i__36194_36198);goog.dom.setTextContent(node_36199,value);
{
var G__36200 = seq__36191_36195;
var G__36201 = chunk__36192_36196;
var G__36202 = count__36193_36197;
var G__36203 = (i__36194_36198 + 1);
seq__36191_36195 = G__36200;
chunk__36192_36196 = G__36201;
count__36193_36197 = G__36202;
i__36194_36198 = G__36203;
continue;
}
} else
{var temp__4092__auto___36204 = cljs.core.seq.call(null,seq__36191_36195);if(temp__4092__auto___36204)
{var seq__36191_36205__$1 = temp__4092__auto___36204;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36191_36205__$1))
{var c__4148__auto___36206 = cljs.core.chunk_first.call(null,seq__36191_36205__$1);{
var G__36207 = cljs.core.chunk_rest.call(null,seq__36191_36205__$1);
var G__36208 = c__4148__auto___36206;
var G__36209 = cljs.core.count.call(null,c__4148__auto___36206);
var G__36210 = 0;
seq__36191_36195 = G__36207;
chunk__36192_36196 = G__36208;
count__36193_36197 = G__36209;
i__36194_36198 = G__36210;
continue;
}
} else
{var node_36211 = cljs.core.first.call(null,seq__36191_36205__$1);goog.dom.setTextContent(node_36211,value);
{
var G__36212 = cljs.core.next.call(null,seq__36191_36205__$1);
var G__36213 = null;
var G__36214 = 0;
var G__36215 = 0;
seq__36191_36195 = G__36212;
chunk__36192_36196 = G__36213;
count__36193_36197 = G__36214;
i__36194_36198 = G__36215;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__36220_36224 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__36221_36225 = null;var count__36222_36226 = 0;var i__36223_36227 = 0;while(true){
if((i__36223_36227 < count__36222_36226))
{var node_36228 = cljs.core._nth.call(null,chunk__36221_36225,i__36223_36227);goog.dom.forms.setValue(node_36228,value);
{
var G__36229 = seq__36220_36224;
var G__36230 = chunk__36221_36225;
var G__36231 = count__36222_36226;
var G__36232 = (i__36223_36227 + 1);
seq__36220_36224 = G__36229;
chunk__36221_36225 = G__36230;
count__36222_36226 = G__36231;
i__36223_36227 = G__36232;
continue;
}
} else
{var temp__4092__auto___36233 = cljs.core.seq.call(null,seq__36220_36224);if(temp__4092__auto___36233)
{var seq__36220_36234__$1 = temp__4092__auto___36233;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36220_36234__$1))
{var c__4148__auto___36235 = cljs.core.chunk_first.call(null,seq__36220_36234__$1);{
var G__36236 = cljs.core.chunk_rest.call(null,seq__36220_36234__$1);
var G__36237 = c__4148__auto___36235;
var G__36238 = cljs.core.count.call(null,c__4148__auto___36235);
var G__36239 = 0;
seq__36220_36224 = G__36236;
chunk__36221_36225 = G__36237;
count__36222_36226 = G__36238;
i__36223_36227 = G__36239;
continue;
}
} else
{var node_36240 = cljs.core.first.call(null,seq__36220_36234__$1);goog.dom.forms.setValue(node_36240,value);
{
var G__36241 = cljs.core.next.call(null,seq__36220_36234__$1);
var G__36242 = null;
var G__36243 = 0;
var G__36244 = 0;
seq__36220_36224 = G__36241;
chunk__36221_36225 = G__36242;
count__36222_36226 = G__36243;
i__36223_36227 = G__36244;
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
{var value_36255 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__36251_36256 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__36252_36257 = null;var count__36253_36258 = 0;var i__36254_36259 = 0;while(true){
if((i__36254_36259 < count__36253_36258))
{var node_36260 = cljs.core._nth.call(null,chunk__36252_36257,i__36254_36259);node_36260.innerHTML = value_36255;
{
var G__36261 = seq__36251_36256;
var G__36262 = chunk__36252_36257;
var G__36263 = count__36253_36258;
var G__36264 = (i__36254_36259 + 1);
seq__36251_36256 = G__36261;
chunk__36252_36257 = G__36262;
count__36253_36258 = G__36263;
i__36254_36259 = G__36264;
continue;
}
} else
{var temp__4092__auto___36265 = cljs.core.seq.call(null,seq__36251_36256);if(temp__4092__auto___36265)
{var seq__36251_36266__$1 = temp__4092__auto___36265;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36251_36266__$1))
{var c__4148__auto___36267 = cljs.core.chunk_first.call(null,seq__36251_36266__$1);{
var G__36268 = cljs.core.chunk_rest.call(null,seq__36251_36266__$1);
var G__36269 = c__4148__auto___36267;
var G__36270 = cljs.core.count.call(null,c__4148__auto___36267);
var G__36271 = 0;
seq__36251_36256 = G__36268;
chunk__36252_36257 = G__36269;
count__36253_36258 = G__36270;
i__36254_36259 = G__36271;
continue;
}
} else
{var node_36272 = cljs.core.first.call(null,seq__36251_36266__$1);node_36272.innerHTML = value_36255;
{
var G__36273 = cljs.core.next.call(null,seq__36251_36266__$1);
var G__36274 = null;
var G__36275 = 0;
var G__36276 = 0;
seq__36251_36256 = G__36273;
chunk__36252_36257 = G__36274;
count__36253_36258 = G__36275;
i__36254_36259 = G__36276;
continue;
}
}
} else
{}
}
break;
}
}catch (e36250){if((e36250 instanceof Error))
{var e_36277 = e36250;domina.replace_children_BANG_.call(null,content,value_36255);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e36250;
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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__36284_36288 = cljs.core.seq.call(null,children);var chunk__36285_36289 = null;var count__36286_36290 = 0;var i__36287_36291 = 0;while(true){
if((i__36287_36291 < count__36286_36290))
{var child_36292 = cljs.core._nth.call(null,chunk__36285_36289,i__36287_36291);frag.appendChild(child_36292);
{
var G__36293 = seq__36284_36288;
var G__36294 = chunk__36285_36289;
var G__36295 = count__36286_36290;
var G__36296 = (i__36287_36291 + 1);
seq__36284_36288 = G__36293;
chunk__36285_36289 = G__36294;
count__36286_36290 = G__36295;
i__36287_36291 = G__36296;
continue;
}
} else
{var temp__4092__auto___36297 = cljs.core.seq.call(null,seq__36284_36288);if(temp__4092__auto___36297)
{var seq__36284_36298__$1 = temp__4092__auto___36297;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36284_36298__$1))
{var c__4148__auto___36299 = cljs.core.chunk_first.call(null,seq__36284_36298__$1);{
var G__36300 = cljs.core.chunk_rest.call(null,seq__36284_36298__$1);
var G__36301 = c__4148__auto___36299;
var G__36302 = cljs.core.count.call(null,c__4148__auto___36299);
var G__36303 = 0;
seq__36284_36288 = G__36300;
chunk__36285_36289 = G__36301;
count__36286_36290 = G__36302;
i__36287_36291 = G__36303;
continue;
}
} else
{var child_36304 = cljs.core.first.call(null,seq__36284_36298__$1);frag.appendChild(child_36304);
{
var G__36305 = cljs.core.next.call(null,seq__36284_36298__$1);
var G__36306 = null;
var G__36307 = 0;
var G__36308 = 0;
seq__36284_36288 = G__36305;
chunk__36285_36289 = G__36306;
count__36286_36290 = G__36307;
i__36287_36291 = G__36308;
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
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__36278_SHARP_,p2__36279_SHARP_){return f.call(null,p1__36278_SHARP_,p2__36279_SHARP_);
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
{if((function (){var G__36310 = list_thing;if(G__36310)
{var bit__4050__auto__ = (G__36310.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__36310.cljs$core$ISeqable$))
{return true;
} else
{if((!G__36310.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__36310);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__36310);
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
{if((function (){var G__36311 = content;if(G__36311)
{var bit__4050__auto__ = (G__36311.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__36311.cljs$core$ISeqable$))
{return true;
} else
{if((!G__36311.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__36311);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__36311);
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
{if((function (){var G__36312 = content;if(G__36312)
{var bit__4050__auto__ = (G__36312.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__36312.cljs$core$ISeqable$))
{return true;
} else
{if((!G__36312.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__36312);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__36312);
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
